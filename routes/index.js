const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.render("index", {
    css: "homeStyle"
  });
});

router.get("/mainPage", (req, res) => {
  res.render("mainPage", {
    js: "app"
  });
});

module.exports = router;
