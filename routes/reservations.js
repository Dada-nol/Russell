const express = require("express");
const router = express.Router();
const service = require("../services/reservations");

router.get("/:id/reservations/", service.getAllReservations);
router.get("/:id/reservations/:idReservation", service.getOneReservation);
router.post("/:id/reservations/", service.add);
router.delete("/:id/reservations/:idReservation", service.deleteReservation);

module.exports = router;
