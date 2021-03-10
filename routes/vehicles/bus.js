const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentMhdPoBusses/firstJSON/1"

router.get("/", async (req, res) => {
  if(req)res.send("Not Today")
  try {
    let response = await axios.get(firstJsonUrl);
    response = response.data;
   
  } catch (err) {
  }
  res.send(response);
});


module.exports = router;
