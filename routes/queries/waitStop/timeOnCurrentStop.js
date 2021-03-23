
const express = require("express");
const router = express.Router();
const { Client } = require("@elastic/elasticsearch");
const ElasticsearchScrollStream = require("elasticsearch-scroll-stream");
const fs = require("fs");
const { apiUrl } = require("../../../config.json");
const elasticsearch_client = new Client({ node: apiUrl });
let date = new Date();
const _ = require("lodash");
let lenghtOfElastic;
const sortArray = require('sort-array')

String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

router.post("/", async (req, res) => {
    async function geLenght() {
        lenghtOfElastic = await elasticsearch_client.search({
            index: "bst",
            scroll: "10m",
            body: {
                from: 0,
                size: 1,
                query: {
                    match_all: {},
                },
            },
        });
        lenghtOfElastic = lenghtOfElastic.body.hits.total.value;
        console.log(lenghtOfElastic);
    }
    geLenght();
    // Create index and add documents here...
    const pageSizeFrom = "0";
    //from: pageSizeFrom,
    const pageSize = "10000";
    let stopCounterIndex = parseInt(pageSize) + lenghtOfElastic;
    let counter = 0;
    let current_doc;
    let finalResult = [];
    
    function miliseconds(week, day, hrs, min, sec) {
        //from hours
        return (
            (week * 360 * 24 * 7 + day * 3600 * 24 + hrs * 60 * 60 + min * 60 + sec) *
            1000
        );
    }
    
    function getIsOnStop_By_Current_Stop(Current_Stop, time) {
        let CS = Current_Stop
        const es_stream = new ElasticsearchScrollStream(elasticsearch_client, {
            index: "bst",
            scroll: "10m",
            size: pageSize,
            body: {
                query: {
                    bool: {
                        must: [
                            { match: { "properties.isOnStop": "true" } },
                            {
                                range: {
                                    "properties.Current_Time": {
                                        gte: `${date.getTime() - miliseconds(time.week, time.day, time.hours, time.minutes, time.sec)
                                            }`,
                                        lte: `${date.getTime()}`,
                                        format: "epoch_millis",
                                    },
                                },
                            },
                        ],
                        filter: [
                            { match: { "properties.Current_Stop": `${Current_Stop}` } }
                        ]
                    },
                },
            },
        });
    
        es_stream.on("data", function (data) {
            current_doc = JSON.parse(data.toString());
            if (counter == stopCounterIndex) {
                es_stream.close();
            }
            counter++;
            if (current_doc.geometry) finalResult.push(current_doc);
        });
    
        es_stream.on("end", async function () {
            let result = finalResult
            //Filter
            let filteredResult = finalResult.reduce((acc, current) => {
                const x = acc.find(
                    (item) =>
                        item.geometry.coordinates[0].toFixed(4) ===
                        current.geometry.coordinates[0].toFixed(4) &&
                        item.geometry.coordinates[1].toFixed(4) ===
                        current.geometry.coordinates[1].toFixed(4)
                );
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
    
            let finalAcc = []
            filteredResult.map(e => { //getAll indexes witch are equal
                let acc = []
                for (let i = 0; i < result.length; i++)
                    if (_.isEqual(result[i].geometry.coordinates, e.geometry.coordinates))
                        acc.push(i);
    
                finalAcc.push({ coordinates: e.geometry.coordinates, acc: acc })
            })
    
            let finalArray = []
            finalAcc.map(e => {
                let array = e.acc
                let max = Math.max.apply(Math, array)
                let min = Math.min.apply(Math, array)
                if (max == min) {
                } else {
                    let time = result[max].properties.Current_Time - result[min].properties.Current_Time
                    let date = new Date(time);
                    let seconds2 = date.getSeconds()
                    let obj = {}
                    let properties = {}
                    let geometry = result[max].geometry
                    let type = "Feature"
                    obj.type = type
                    obj.geometry = geometry
                    let seconds = seconds2
                    properties.Time = new Date(result[max].properties.Current_Time)
                    properties.Current_Stop = result[max].properties.Current_Stop
                    properties.seconds = seconds
                    obj.properties = properties
                    finalArray.push(obj)
                }
            })
            let obj2 = {};
            obj2.type = "FeatureCollection";
            obj2.name = "isOnStop";
    
    
            let aArray = []
            finalArray.map(e => {
                console.log(e)
                if (_.isEqual(e.properties.Current_Stop, CS)) {
                    aArray.push(e)
                }
            })
            // sort by Time 
            aArray = sortArray(aArray, {
                by: 'Time',
                computed: {
                    Time: row => new Date(row.properties.Time).getTime()
                }
            })
            obj2.features = aArray;
            console.log(obj2)
            res.send(obj2)
            console.log(`timeOnCurrentStop`)
        })
    
        es_stream.on("error", function (err) {
            console.log(err);
        });
    }
   
    console.log(req.body)
    let currentStop = req.body.Current_Stop
    let time_interval = req.body.time_interval

    getIsOnStop_By_Current_Stop(currentStop,time_interval)
});
module.exports = router;
