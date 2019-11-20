const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

router.get("/logIn", (req, res) => {
    res.render("logIn", {
        css: ["baseStyle", "sign", "mainPage"],
        js: "sign"
    });
});

router.get("/signUp", (req, res) => {
    res.render("signUp", {
        css: ["baseStyle", "sign"]
    });
});

module.exports = router;