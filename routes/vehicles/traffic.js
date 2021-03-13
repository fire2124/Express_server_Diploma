const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentTraffic/firstJSON/1"

router.get("/", async (req, res) => {
  let response = await axios.get(firstJsonUrl);
  response = response.data;
  let responseFinal = []
  response.map(e=>{
    if(e.geometry)
    responseFinal.push(e)
  })
  res.send(responseFinal);
});

module.exports = router;
