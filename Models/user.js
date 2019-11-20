const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: String,
    lastname: String,
    password: String,
    email: String,
    admin: Boolean
})

const user = mongoose.model("user", userModel);
module.exports = user;