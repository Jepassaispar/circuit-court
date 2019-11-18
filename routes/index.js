const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.render("index", {
<<<<<<< HEAD
    js: "app",
    css: ["baseStyle", "index"]
=======
    css: "homeStyle"
>>>>>>> f481aefcdf6bf091b9c0a19ee026c97ef8cdc5be
  });
});

router.get("/mainPage", (req, res) => {
  res.render("mainPage", {
    js: "app"
  });
});

module.exports = router;
