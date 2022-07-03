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

router.get("/district_list/:state", (req, res) => {
    data.states.map((obj,i) => {
        if(req.params.state === obj.state){
            res.json({
                districts: obj.districts
            })
            .send()
        }
    })
});

module.exports = router;
