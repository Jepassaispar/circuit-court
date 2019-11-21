const express = require("express");
const router = express();
const businessModel = require("../Models/business");
const uploader = require("../config/cloudinary");

router.get("/manage-businesses", (req, res, next) => {
  businessModel.find().then(dbRes => {
    const businesses = dbRes;
    res.render("manage-businesses", {
      css: ["baseStyle", "mainPage", "manage-businesses"],
      businesses: businesses
    });
  });
});

module.exports = router;

router.post("/create-product", uploader.single("image"), (req, res) => {
  const createdBusiness = {
    name: req.body.name,
    business: req.body.category,
<<<<<<< HEAD
    bio: req.body.bio,
=======
    bio: req.body.bio ? true : false,
>>>>>>> e5d8f09def57c06636764e7d39b3d2f403984b96
    lieu: {
      adress: req.body.adress,
      zipcode: req.body.zipcode
    },
    phone: req.body.phone,
    infos: req.body.info,
    site: req.body.site,
    mail: req.body.mail,
    ouverture: {
      Lundi: req.body.lundi,
      Mardi: req.body.mardi,
      Mercredi: req.body.mercredi,
      Jeudi: req.body.jeudi,
      Vendredi: req.body.vendredi,
      Samedi: req.body.samedi,
      Dimanche: req.body.dimanche
    }
  };

  if (req.file) createdBusiness.image = req.file.secure_url

  businessModel
    .create(createdBusiness)
    .then(dbRes => {
      console.log(req.body.name);
      console.log("data well entered in database");
      res.redirect("/mainPage");
    })
    .catch(err => console.log(err));
});

router.post("/product-delete/:id", (req, res) => {
  businessModel
    .findByIdAndDelete(req.params.id)
    .then(res.redirect("/manage-businesses"));
});

router.get("/product-edit/:id", (req, res, next) => {
  Promise.all([businessModel.findById(req.params.id)])
    .then(dbRes => {
      const business = dbRes[0];
      console.log(business)
      res.render("product_edit", {
        business,
        js: ["app", "filter", "script"],
        css: ["baseStyle", "mainPage"]
      });
    })
    .catch(err => console.log(err));
});

router.post("/product-edit/:id", uploader.single("image"), (req, res) => {
  const editedBusiness = {
    name: req.body.name,
    business: req.body.category,
    bio: req.body.bio ? true : false,
    lieu: {
      adress: req.body.adress,
      zipcode: req.body.zipcode
    },
    phone: req.body.phone,
    infos: req.body.info,
    site: req.body.site,
    mail: req.body.mail,
    ouverture: {
      Lundi: req.body.lundi,
      Mardi: req.body.mardi,
      Mercredi: req.body.mercredi,
      Jeudi: req.body.jeudi,
      Vendredi: req.body.vendredi,
      Samedi: req.body.samedi,
      Dimanche: req.body.dimanche
    },
  };
  if (req.file) createdBusiness.image = req.file.secure_url
  else {
    businessModel
      .findByIdAndUpdate(req.params.id, editedBusiness)
      .then(dbRes => {
        console.log("Salut c'est la dbres" + dbRes)
        res.redirect("/mainPage");
      });
  }
});