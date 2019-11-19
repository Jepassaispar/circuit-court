const express = require("express");
const router = express();
const amapModel = require("../Models/amap");
const gardenModel = require("../Models/jardin");
const marketModel = require("../Models/marche");

router.get("/", (req, res) => {
  res.render("index", {
    js: "app",
    css: ["baseStyle", "index"]
  });
});

router.post("/")

router.get("/mainPage", (req, res) => {
  const gardens = "";
  const amaps = "";
  const markets = "";
  gardenModel.find().then(
    dbRes => {
      gardens = dbRes;
      amapModel.find().then(dbRes2 => {
        amaps = dbRes2;
        marketModel.find().then(
          dbRes3 => {
            markets = dbRes3;
            res.render("mainPage", {
              js: "app",
              css: ["baseStyle", "mainPage"],
              gardens: gardens,
              amaps: amaps,
              markets: markets
            });
          }
        ).catch(err => console.log(err))
      }).catch(err => console.log(err))
    }
  ).catch(err => console.log(err))



});

module.exports = router;