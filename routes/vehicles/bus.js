const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentMhdPoBusses/firstJSON/1"
const mhd = require('../../Data/currentMocups/mhd.json')


router.get("/", async (req, res) => {
  //let response = await axios.get(firstJsonUrl);
  //response = response.data;
  //res.send(response);
  res.send(mhd);
});


module.exports = router;
