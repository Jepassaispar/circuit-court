const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

router.get("/manage-businesses", (req, res, next) => {
    businessModel
        .find()
        .then(dbRes => {
            const businesses = dbRes;
            res.render('manage-businesses', {
                css: ["baseStyle", "mainPage", "manage-businesses"],
                businesses: businesses
            })
        })
})

module.exports = router;

router.post("/create-product", (req, res) => {
    const createdBusiness = {
        name: req.body.name,
        business: req.body.category,
        bio: req.body.bio.checked,
        lieu: {
            adress: req.body.adress,
            zipcode: req.body.zipcode
        },
        phone: req.body.phone,
        infos: req.body.info,
        site: req.body.site,
        mail: req.body.mail,
        ouverture: {
            lundi: req.body.lundi,
            mardi: req.body.mardi,
            mercredi: req.body.mercredi,
            jeudi: req.body.jeudi,
            vendredi: req.body.vendredi,
            samedi: req.body.samedi,
            dimanche: req.body.dimanche
        },
        image: req.body.image
    }
    businessModel
        .create(createdBusiness)
        .then(dbRes => {
            console.log("data well entered in database")
            res.redirect("/mainPage")
        })
        .catch(err => console.log(err))
})