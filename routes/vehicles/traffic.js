const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentTraffic/firstJSON/1"
const traffic = require('../../Data/currentMocups/traffic.json')

router.get("/", async (req, res) => {
  // let response = await axios.get(firstJsonUrl);
  // response = response.data;
  let responseFinal = []
  traffic.map(e=>{
    if(e.geometry)
    responseFinal.push(e)
  })
  res.send(responseFinal);
});

module.exports = router;
