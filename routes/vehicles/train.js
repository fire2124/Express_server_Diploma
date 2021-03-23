const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentTrains/firstJSON/1"
const train = require('../../Data/currentMocups/train.json')

router.get("/", async (req, res) => {
  // let response = await axios.get(firstJsonUrl);
  // response = response.data;
  res.send(train);
});


module.exports = router;
