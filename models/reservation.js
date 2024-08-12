/* Model Reservation pour la base de données mongodb */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reservation = new Schema({
  catwayNumber: {
    type: Number,
  },
  clientName: {
    type: String,
  },
  boatName: {
    type: String,
    trim: true,
    required: [true, "Le nom du bateau est requis"],
  },
  checkIn: {
    type: Date,
    trim: true,
    required: [true, "La date de début de réservation est requise est requise"],
  },
  checkOut: {
    type: Date,
    trim: true,
    required: [true, "La date de fin de réservation est requise est requise"],
  },
});

module.exports = mongoose.model("Reservation", Reservation);
