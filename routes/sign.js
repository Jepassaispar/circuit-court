const express = require("express");
const router = express();
const userModel = require("./../models/user");
const uploader = require("../config/cloudinary");
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

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

router.post("/signup", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt)
    userModel
        .findOne({
            email: req.body.email
        })
        .then(dbRes => {
            if (dbRes) {
                res.render("signUp", {
                    css: ["baseStyle", "sign"],
                    errorMessage: "Email already taken"
                });
            } else {
                userModel
                    .create({
                        firstname,
                        lastname,
                        email,
                        password: hashPass
                    })
                    .then(dbRes => {
                        res.redirect("/");
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
});

router.post('/logIn', (req, res) => {
    const inputEmail = req.body.email;
    const inputPassword = req.body.password;
    if (inputEmail === "" || inputPassword === "") {
        res.render('logIn', {
            errorMessage: "Please enter both, email and password to sign up",
            css: ["baseStyle", "sign", "mainPage"],
            js: "sign"
        })
        return;
    }
    userModel
        .findOne({
            "email": inputEmail
        })
        .then(dbRes => {
            if (!dbRes) {
                res.render('logIn', {
                    errorMessage: "Email not registered yet",
                    css: ["baseStyle", "sign", "mainPage"],
                    js: "sign"
                })
            }
            if (bcrypt.compareSync(inputPassword, dbRes.password)) {
                req.session.currentUser = dbRes;
                console.log(req.session.currentUser)
                res.redirect('/');
            } else {
                res.render('logIn', {
                    errorMessage: "Wrong password",
                    css: ["baseStyle", "sign", "mainPage"],
                    js: "sign"
                });
            }
        })
        .catch(err => (console.log(err)))
})

router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        res.locals.isLoggedIn = undefined;
        res.redirect("/login");
    });
});

module.exports = router;