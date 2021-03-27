const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentTraffic/firstJSON/1";
const traffic = require("../../Data/currentMocups/traffic.json");

router.get("/", async (req, res) => {
  // let response = await axios.get(firstJsonUrl);
  // response = response.data;
  let responseFinal = [];
  traffic.map((e) => {
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
