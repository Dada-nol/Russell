const Catway = require("../models/catway");
const User = require("../models/user");
const Reservation = require("../models/reservation");

module.exports.add = async (req, res, next) => {
  const catwayId = req.params.id;
  const catway = await Catway.findById(catwayId);
  if (!catway) {
    throw new Error("Catway not found");
  }

  const temp = {
    catwayNumber: catway.catwayNumber,
    clientName: req.body.clientName,
    boatName: req.body.boatName,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
  };

  try {
    let reservation = new Reservation(temp);
    await reservation.save();
    return res.status(201).json(reservation);
  } catch (error) {
    console.error("Error adding user:", error); // Log the error
    return res.status(501).json(error);
  }
};

exports.getOneReservation = async (req, res, next) => {
  const id = req.params.idReservation;

  try {
    let reservation = await Reservation.findById(id);

    if (reservation) {
      return res.status(200).json(reservation);
    }

    return res.status(404).json("reservation_not_found");
  } catch (error) {
    console.error("Error fetching catway by ID:", error);
    return res.status(501).json(error);
  }
};
