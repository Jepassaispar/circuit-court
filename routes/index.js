const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.render("index", {
    css: ["baseStyle", "index"]
  });
});

router.get("/mainPage", (req, res) => {
  res.render("mainPage", {
    js: "app",
    css: ["baseStyle", "index"]
  });
});

module.exports = router;
