const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amapSchema = new Schema({
  name: String,
  location: { type: { type: String }, coordinates: [Number] },
  bio: Boolean,
  lieu: {
    adress: String,
    zipcode: Number
  },
  phone: String,
  infos: String,
  site: String,
  mail: String,
  ouverture: {
    Lundi: String,
    Mardi: String,
    Mercredi: String,
    Jeudi: String,
    Vendredi: String,
    Samedi: String,
    Dimanche: String
  },
  image: {
    type: String,
    default: ""
  }
});

amapSchema.index({ location: "2dsphere" });
const Amap = mongoose.model("Amap", amapSchema);
module.exports = Amap;
