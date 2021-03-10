const express = require("express");
const schedule = require('node-schedule');
const router = express.Router();
const path  = "../../../Data/queryResult/CHANGE_OF_DELAY_"

let mhdData = [];
let sadData = [];
let trainData = [];

//Scheduling loading jsons---------------------------
//1day
schedule.scheduleJob('0 10 2 * * *', function () {
    let type = "MHD"
    mhdData = require(`${path}${type}_1day.json`);
    console.log(`done_${type}_forPrediction`)
});

//1day
schedule.scheduleJob('0 15 2 * * *', function () {
    let type = "SAD"
    sadData = require(`${path}${type}_1day.json`);
    console.log(`done_${type}_forPrediction`)
});

//1day
schedule.scheduleJob('0 20 2 * * *', function () {
    const type = "Train"
    trainData = require(`${path}${type}_1day.json`);
    console.log(`done_${type}_forPrediction`)
});

router.get("/Mhd", async (req, res) => {
    if (mhdData.length < 0)
    mhdData = require(`${path}${type}_1day.json`);
    console.log(mhdData)
    res.send(mhdData);
});

router.get("/Sad", async (req, res) => {
    if (sadData.length < 0)
    sadData = require(`${path}${type}_1day.json`);
    console.log(sadData)
    res.send(sadData);
});

router.get("/Train", async (req, res) => {
    if (trainData.length < 0)
    trainData = require(`${path}${type}_1day.json`);
    console.log(trainData)
    res.send(trainData);
});


module.exports = router;
