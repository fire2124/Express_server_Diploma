const express = require("express");
const router = express.Router();
const schedule = require('node-schedule');
const path  = `../../../Data/queryResult/DELAY_`
const type = "SAD"

let delay59 = [];
let delay1418 = [];
let delay15 = [];
let delay1hour = [];
let delay3hours = [];
let delay1day = [];
let delay1week = [];
let delay1month = [];


//Scheduling loading jsons---------------------------
// 15 min 
setInterval(() => {
    delay15 = require(`${path}${type}_15minutes.json`);
    console.log(`done_${type}_delay15`)
},
    900000);

// 1hour
schedule.scheduleJob('0 3 * * * *', function () {
    delay1hour = require(`${path}${type}_1hour.json`);
    console.log(`done_${type}_delay1hour`)
});

// 3hours
setInterval(() => {
    delay3hours = require(`${path}${type}_3hours.json`);
    console.log(`done_${type}_delay3hours`)
},
    10800000);

//5-9
schedule.scheduleJob('0 3 9 * * *', function () {
    delay59 = require(`${path}${type}_5-9.json`);
    console.log(`done_${type}_delay59`)
});

//14-18
schedule.scheduleJob('0 3 18 * * *', function () {
    delay1418 = require(`${path}${type}_14-18.json`);
    console.log(`done_${type}_delay1418`)
});

//1day
schedule.scheduleJob('0 2 2 * * *', function () {
    delay1day = require(`${path}${type}_1day.json`);
    console.log(`done_${type}_delay1day`)
});

//1week
schedule.scheduleJob('* 30 23 * * 7', function () {
    delay1week = require(`${path}${type}_1week.json`);
    console.log(`done_${type}_delay1week`)
});

//1month
schedule.scheduleJob('* 5 2 1 * *', function () {
    delay1month = require(`${path}${type}_1month.json`);
    console.log(`done_${type}_delay1month`)
  });

router.get("/15min", async (req, res) => {
    if (delay15.length < 0)
        delay15 = require(`${path}${type}_15minutes.json`);
    console.log(delay15)
    res.send(delay15);
});

router.get("/1hour", async (req, res) => {
    if (delay1hour.length < 0)
        delay1hour = require(`${path}${type}_1hour.json`);
    console.log(delay1hour)
    res.send(delay1hour);
});

router.get("/3hours", async (req, res) => {
    if (delay3hours.length < 0)
        delay3hours = require(`${path}${type}_3hours.json`);
    console.log(delay3hours)
    res.send(delay3hours);
});

router.get("/5-9", async (req, res) => {
    if (delay59.length < 0)
        delay59 = require(`${path}${type}_5-9.json`);
    console.log(delay59)
    res.send(delay59);
});

router.get("/14-18", async (req, res) => {
    if (delay1418.length < 0)
        delay1418 = require(`${path}${type}_14-18.json`);
    console.log(delay1418)
    res.send(delay1418);
});

router.get("/1day", async (req, res) => {
    if (delay1day.length < 0)
        delay1day = require(`${path}${type}_1day.json`);
    console.log(delay1day)
    res.send(delay1day);
});

router.get("/1week", async (req, res) => {
    if (delay1week.length < 0)
        delay1week = require(`${path}${type}_1week.json`);
    console.log(delay1week)
    res.send(delay1week);
});

router.get("/1month", async (req, res) => {
    if (delay1month.length < 0)
        delay1month = require(`${path}${type}_1month.json`);
    console.log(delay1month)
    res.send(delay1month);
});


module.exports = router;
