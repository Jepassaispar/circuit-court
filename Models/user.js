const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
})

const user = mongoose.model("user", userModel);
module.exports = user;