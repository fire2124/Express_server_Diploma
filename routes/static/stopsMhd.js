const express = require("express");
const router = express.Router();
const stops = require('../../Data/mhd_Stops.json')

router.get("/", async (req, res) => {
  res.send(stops.features);
});

module.exports = router;
