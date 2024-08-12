/* Méthodes pour la création, lecture, modification, suppression de l'objet reservation */

const Catway = require("../models/catway");
const User = require("../models/user");
const Reservation = require("../models/reservation");

module.exports.add = async (req, res, next) => {
  const catwayId = req.params.id;
  const catway = await Catway.findById(catwayId);
  if (!catway) {
    throw new Error("Catway not found");
  }

  const userId = req.body.user;
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const temp = {
    catwayNumber: catway.catwayNumber,
    clientName: user.name,
    boatName: req.body.boatName,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
  };

  try {
    let reservation = new Reservation(temp);
    await reservation.save();
    return res.status(201).json(reservation);
  } catch (error) {
    console.error("Error adding reservation:", error);
    return res.status(501).json(error);
  }
};

exports.getOneReservation = async (req, res, next) => {
  const catwayId = req.params.id;
  const idReservation = req.params.idReservation;

  try {
    let catway = await Catway.findById(catwayId);
    let reservation = await Reservation.findById(idReservation);
    if (catway.catwayNumber === reservation.catwayNumber) {
      if (reservation) {
        return res.status(200).json(reservation);
      }
      return res.status(404).json("reservation_not_found");
    }
    return res
      .status(404)
      .json(
        "Erreur lors de l'affichage de la réservation. Assurez vous que la réservation correspond bien au catway sélectionné."
      );
  } catch (error) {
    console.error("Error fetching reservation by ID:", error);
    return res.status(501).json(error);
  }
};

exports.getAllReservations = async (req, res, next) => {
  const catwayId = req.params.id;
  let catway = await Catway.findById(catwayId);
  const reservation = await Reservation.find();

  try {
    if (catway.catwayNumber === reservation.catwayNumber) {
      for (let i = 0; i < reservation.length; i++) {
        if (reservation) {
          return res.status(200).json(reservation);
        }
      }
      return res.status(404).json("reservation_not_found");
    }

    return res.status(404).json("");
  } catch (error) {
    console.error("Error fetching reservations", error);
    return res.status(501).json(error);
  }
};

exports.deleteReservation = async (req, res, next) => {
  const id = req.params.idReservation;
  try {
    await Reservation.deleteOne({ _id: id });
    return res.status(200).json("delete_ok");
  } catch (error) {
    console.error("Error deleting reservation:", error);
    return res.status(501).json(error);
  }
};
