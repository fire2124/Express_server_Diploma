const express = require("express")
const router = express.Router();
const schedule = require('node-schedule');
const path  = "../../../Data/queryResult/CHANGE_OF_DELAY_"
const type = "Train"
let change_of_delay59 = [];
let change_of_delay1418 = [];
let change_of_delay15 = [];
let change_of_delay1hour = [];
let change_of_delay3hours = [];
let change_of_delay1day = [];
let change_of_delay1week = [];
let change_of_delay1month = [];


//Scheduling loading jsons---------------------------
// 15 min 
setInterval(() => {
    try {
        change_of_delay15 = require(`${path}${type}_15minutes.json`);
        console.log(`done_${type}_change_of_delay15`)
    } catch (error) {
        console.log(error)
    }
},
    900000);

// 1hour
schedule.scheduleJob('0 3 * * * *', function () {
    try {
        change_of_delay1hour = require(`${path}${type}_1hour.json`);
        console.log(`done_${type}_change_of_delay1hour`)
    } catch (error) {
        console.log(error)
    }
});

// 3hours
setInterval(() => {
    try {
        change_of_delay3hours = require(`${path}${type}_3hours.json`);
        console.log(`done_${type}_change_of_delay3hours`)
    } catch (error) {
        console.log(error)
    }
},
    10800000);

//5-9
schedule.scheduleJob('0 3 9 * * *', function () {
    try {
        change_of_delay59 = require(`${path}${type}_5-9.json`);
        console.log(`done_${type}_change_of_delay59`)
    } catch (error) {
        console.log(error)
    }
});

//14-18
schedule.scheduleJob('0 3 18 * * *', function () {
    try {
        change_of_delay1418 = require(`${path}${type}_14-18.json`);
        console.log(`done_${type}_change_of_delay1418`)
    } catch (error) {
        console.log(error)
    }
});

//1day
schedule.scheduleJob('0 2 2 * * *', function () {
    try {
        change_of_delay1day = require(`${path}${type}_1day.json`);
        console.log(`done_${type}_change_of_delay1day`)
    } catch (error) {
        console.log(error)
    }
});

//1week
schedule.scheduleJob('* 30 23 * * 7', function () {
    try {
        change_of_delay1week = require(`${path}${type}_1week.json`);
        console.log(`done_${type}_change_of_delay1week`)
    } catch (error) {
        console.log(error)
    }
});

//1month
schedule.scheduleJob('* 5 2 1 * *', function () {
    try {
        change_of_delay1month = require(`${path}${type}_1month.json`);
        console.log(`done_${type}_change_of_delay1month`)
    } catch (error) {
        console.log(error)
    }
});

router.get("/15min", async (req, res) => {
    if (change_of_delay15.length === 0) {
        try {
            change_of_delay15 = require(`${path}${type}_15minutes.json`);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(change_of_delay15)
    res.send(change_of_delay15);
});

router.get("/1hour", async (req, res) => {
    if (change_of_delay1hour.length === 0) {
        try {
            change_of_delay1hour = require(`${path}${type}_1hour.json`);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(change_of_delay1hour)
    res.send(change_of_delay1hour);
});

router.get("/3hours", async (req, res) => {
    if (change_of_delay3hours.length === 0) {
        try {
            change_of_delay3hours = require(`${path}${type}_3hours.json`);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(change_of_delay3hours)
    res.send(change_of_delay3hours);
});

router.get("/5-9", async (req, res) => {
    if (change_of_delay59.length === 0) {
        try {
            change_of_delay59 = require(`${path}${type}_5-9.json`);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(change_of_delay59)
    res.send(change_of_delay59);
});

router.get("/14-18", async (req, res) => {
    if (change_of_delay1418.length === 0){
        try {
            change_of_delay1418 = require(`${path}${type}_14-18.json`);
        } catch (error) {
            console.log(error)
        }
    }
        
    console.log(change_of_delay1418)
    res.send(change_of_delay1418);
});

router.get("/1day", async (req, res) => {
    if (change_of_delay1day.length === 0){
        try {
            change_of_delay1day = require(`${path}${type}_1day.json`);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(change_of_delay1day)
    res.send(change_of_delay1day);
});

router.get("/1week", async (req, res) => {
    if (change_of_delay1week.length === 0){
        try {
            change_of_delay1week = require(`${path}${type}_1week.json`);
        } catch (error) {
            console.log(error)
        }
    }  
    console.log(change_of_delay1week)
    res.send(change_of_delay1week);
});

router.get("/1month", async (req, res) => {
    if (change_of_delay1month.length === 0){
        try {
            change_of_delay1month = require(`${path}${type}_1month.json`);
        } catch (error) {
            console.log(error)
        }
    }     
    console.log(change_of_delay1month)
    res.send(change_of_delay1month);
});


module.exports = router;