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
