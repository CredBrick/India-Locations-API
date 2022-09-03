const express = require("express");

const router = express.Router();

const data = require("../data/data.json");

router.get("/state", (req, res) => {
  try {
    let states = [];
    data.states.map((obj, i) => {
      states.push(obj.state);
    });
    res
      .json({
        states: states,
      })
      .send();
  } catch (e) {
    console.log(e);
  }
});

router.get("/district_list/:state", (req, res) => {
  try {
    data.states.map((obj, i) => {
      if (req.params.state === obj.state.replace(/ +/g, "")) {
        res
          .json({
            data: obj,
          })
          .send();
      }
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/district_list/:state/:district", (req, res) => {
  try {
    data.states.map((obj, i) => {
      if (req.params.state === obj.state.replace(/ +/g, "")) {
        {
          obj.districts.map((x) => {
            if (req.params.district === x.district) {
              res
                .json({
                  data: x,
                })
                .send();
            }
          });
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
