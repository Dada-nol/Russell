const express = require("express");
const router = express.Router();
const service = require("../services/reservations");
const views = require("../services/views");

router.get("/:id/reservations/add", views.add_reservation);
router.get("/:id/reservations/delete/:idReservation", views.delete_reservation);
router.get("/:id/reservations/read/:idReservation", views.read_reservation);

router.get("/:id/reservations/", service.getAllReservations);
router.get("/:id/reservations/:idReservation", service.getOneReservation);
router.post("/:id/reservations/add", service.add);
router.delete("/:id/reservations/:idReservation", service.deleteReservation);

module.exports = router;
