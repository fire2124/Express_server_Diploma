const express = require("express");
const router = express.Router();
const axios = require("axios");
const firstJsonUrl = "http://localhost:9500/api/v1/currentSadPoBusses/firstJSON/1"

router.get("/", async (req, res) => {
 // try {
    let response = await axios.get(firstJsonUrl);
    response = response.data;
  //   finalResponse = []
  //   response.map(e=>{
  //     let obj ={}
  //     obj.type = e.type;
  //     obj.geometry = e.geometry;
  //     let properties ={}
  //     properties.ROUTE_NUMBER = e.properties.ROUTE_NUMBER
  //     properties.DELAY = e.properties.DELAY
  //     properties.From = e.properties.From
  //     properties.Via = e.properties.Via
  //     properties.To = e.properties.To
  //     obj.properties = properties;
  //     finalResponse.push(obj)
  //   })
  // } catch (err) {
  // }
  res.send(response);
});

module.exports = router;
