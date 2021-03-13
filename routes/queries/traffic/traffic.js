const express = require("express");
const router = express.Router();
const schedule = require('node-schedule');
const path  = `../../../Data/queryResult/Traffic`

let traffic59 = [];
let traffic1418 = [];
let traffic15 = [];
let traffic1hour = [];
let traffic3hours = [];
let traffic1day = [];
let traffic1week = [];
let traffic1month = [];

//Scheduling loading jsons---------------------------
// 15 min 
setInterval(() => {
    traffic15 = require(`${path}_15minutes.json`);
    console.log(`done__traffic15`)
},
    900000);

// 1hour
schedule.scheduleJob('0 3 * * * *', function () {
    traffic1hour = require(`${path}_1hour.json`);
    console.log(`done__traffic1hour`)
});

// 3hours
setInterval(() => {
    traffic3hours = require(`${path}_3hours.json`);
    console.log(`done__traffic3hours`)
},
    10800000);

//5-9
schedule.scheduleJob('0 3 9 * * *', function () {
    traffic59 = require(`${path}_5-9.json`);
    console.log(`done__traffic59`)
});

//14-18
schedule.scheduleJob('0 3 18 * * *', function () {
    traffic1418 = require(`${path}_14-18.json`);
    console.log(`done__traffic1418`)
});

//1day
schedule.scheduleJob('0 2 2 * * *', function () {
    traffic1day = require(`${path}_1day.json`);
    console.log(`done__traffic1day`)
});

//1week
schedule.scheduleJob('* 30 23 * * 7', function () {
    traffic1week = require(`${path}_1week.json`);
    console.log(`done__traffic1week`)
});

//1month
schedule.scheduleJob('* 5 2 1 * *', function () {
    traffic1month = require(`${path}_1month.json`);
    console.log(`done__traffic1month`)
  });

router.get("/15min", async (req, res) => {
    if (traffic15.length === 0)
        traffic15 = require(`${path}_15minutes.json`);
    console.log(traffic15)
    res.send(traffic15);
});

router.get("/1hour", async (req, res) => {
    if (traffic1hour.length === 0)
        traffic1hour = require(`${path}_1hour.json`);
    console.log(traffic1hour)
    res.send(traffic1hour);
});

router.get("/3hours", async (req, res) => {
    if (traffic3hours.length === 0)
        traffic3hours = require(`${path}_3hours.json`);
    console.log(traffic3hours)
    res.send(traffic3hours);
});

router.get("/5-9", async (req, res) => {
    if (traffic59.length === 0)
        traffic59 = require(`${path}_5-9.json`);
    console.log(traffic59)
    res.send(traffic59);
});

router.get("/14-18", async (req, res) => {
    if (traffic1418.length === 0)
        traffic1418 = require(`${path}_14-18.json`);
    console.log(traffic1418)
    res.send(traffic1418);
});

router.get("/1day", async (req, res) => {
    if (traffic1day.length === 0)
        traffic1day = require(`${path}_1day.json`);
    console.log(traffic1day)
    res.send(traffic1day);
});

router.get("/1week", async (req, res) => {
    if (traffic1week.length === 0)
        traffic1week = require(`${path}_1week.json`);
    console.log(traffic1week)
    res.send(traffic1week);
});

router.get("/1month", async (req, res) => {
    if (traffic1month.length === 0)
        traffic1month = require(`${path}_1month.json`);
    console.log(traffic1month)
    res.send(traffic1month);
});


module.exports = router;