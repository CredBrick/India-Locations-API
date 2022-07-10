const express = require("express");

const router = express.Router();

const data = require("../data/data.json");

router.get("/state", (req, res) => {
  let states = []
  data.states.map((obj, i) => {
    states.push(obj.state)
  });
  res
    .json({
      states: states,
    })
    .send();
});

router.post("/district_list", (req, res) => {
    const { state } = req.body
    
    data.states.forEach((obj,i) => {
        if(state === obj.state){
            res.json({
                districts: obj.districts
            })
            .send()
        }
    })
});

module.exports = router;
