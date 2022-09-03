const express = require("express");

const router = express.Router();

const dataEN = require("../data/dataEN.json");
const dataHI = require("../data/dataEN.json");

router.get("/state", (req, res) => {
  let data = [];
  if (req.query.lang === "en") {
    data = dataEN;
  } else {
    data = dataHI;
  }
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
  let data = [];
  if (req.query.lang === "en") {
    data = dataEN;
  } else {
    data = dataHI;
  }
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
  let data = [];
  if (req.query.lang === "en") {
    data = dataEN;
  } else {
    data = dataHI;
  }
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
