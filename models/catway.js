/* Model Catway pour la base de données mongodb */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Catway = new Schema({
  catwayNumber: {
    type: Number,
    trim: true,
    required: [true, "Le catwayNumber est requis"],
    unique: true,
  },
  type: {
    type: String,
    trim: true,
    required: [true, "Le type est requis"],
  },
  catwayState: {
    type: String,
    trim: true,
    required: [true, "Le catwayState est requis"],
  },
});

module.exports = mongoose.model("Catway", Catway);
