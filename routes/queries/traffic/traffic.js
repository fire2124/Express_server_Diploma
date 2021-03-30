const express = require("express");
const router = express.Router();
const schedule = require("node-schedule");
const path = `../../../Data/queryResult/Traffic`;

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
  console.log(`done__traffic15`);
}, 900000);

// 1hour
schedule.scheduleJob("0 3 * * * *", function () {
  traffic1hour = require(`${path}_1hour.json`);
  console.log(`done__traffic1hour`);
});

// 3hours
setInterval(() => {
  traffic3hours = require(`${path}_3hours.json`);
  console.log(`done__traffic3hours`);
}, 10800000);

//5-9
schedule.scheduleJob("0 3 9 * * *", function () {
  traffic59 = require(`${path}_5-9.json`);
  console.log(`done__traffic59`);
});

//14-18
schedule.scheduleJob("0 3 18 * * *", function () {
  traffic1418 = require(`${path}_14-18.json`);
  console.log(`done__traffic1418`);
});

//1day
schedule.scheduleJob("0 2 2 * * *", function () {
  traffic1day = require(`${path}_1day.json`);
  console.log(`done__traffic1day`);
});

//1week
schedule.scheduleJob("* 30 23 * * 7", function () {
  traffic1week = require(`${path}_1week.json`);
  console.log(`done__traffic1week`);
});

//1month
schedule.scheduleJob("* 5 2 1 * *", function () {
  traffic1month = require(`${path}_1month.json`);
  console.log(`done__traffic1month`);
});

router.get("/15min", async (req, res) => {
  if (traffic15.length === 0) traffic15 = require(`${path}_15minutes.json`);
  console.log(traffic15);
  let responseFinal = [];
  traffic15.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/1hour", async (req, res) => {
  if (traffic1hour.length === 0) traffic1hour = require(`${path}_1hour.json`);
  console.log(traffic1hour);
  let responseFinal = [];
  traffic15.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/3hours", async (req, res) => {
  if (traffic3hours.length === 0)
    traffic3hours = require(`${path}_3hours.json`);
  console.log(traffic3hours);
  let responseFinal = [];
  traffic3hours.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/5-9", async (req, res) => {
  if (traffic59.length === 0) traffic59 = require(`${path}_5-9.json`);
  console.log(traffic59);
  let responseFinal = [];
  traffic59.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/14-18", async (req, res) => {
  if (traffic1418.length === 0) traffic1418 = require(`${path}_14-18.json`);
  console.log(traffic1418);
  let responseFinal = [];
  traffic1418.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/1day", async (req, res) => {
  if (traffic1day.length === 0) traffic1day = require(`${path}_1day.json`);
  console.log(traffic1day);
  let responseFinal = [];
  traffic1day.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/1week", async (req, res) => {
  if (traffic1week.length === 0) traffic1week = require(`${path}_1week.json`);
  console.log(traffic1week);
  let responseFinal = [];
  traffic1week.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

router.get("/1month", async (req, res) => {
  if (traffic1month.length === 0)
    traffic1month = require(`${path}_1month.json`);
  console.log(traffic1month);
  let responseFinal = [];
  traffic1month.features.map((e) => {
    if (
      e.geometry &&
      (e.geometry.type === "LineString" || e.geometry.type === "Point")
    ) {
      let obj = {};
      obj.type = e.type;
      let geometry = {};
      geometry.type = e.geometry.type;
      let coordinates = [];
      if (e.geometry.type === "LineString") {
        e.geometry.coordinates.map((x) => {
          let array = [];
          array.push(x[1], x[0]);
          coordinates.push(array);
        });
      } else if (e.geometry.type === "Point") {
        coordinates.push(e.geometry.coordinates[1], e.geometry.coordinates[0]);
      }
      geometry.coordinates = coordinates;
      obj.geometry = geometry;
      obj.properties = e.properties;
      responseFinal.push(obj);
    }
  });
  res.send(responseFinal);
});

module.exports = router;
