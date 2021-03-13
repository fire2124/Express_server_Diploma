const express = require("express");
const router = express.Router();
const stops = require('../../Data/Zas_SAD_10km.json')

router.get("/", async (req, res) => {
  res.send(stops);
});

module.exports = router;
