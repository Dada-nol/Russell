const express = require("express");
const router = express.Router();
const service = require("../services/reservations");

router.get("/");
router.get("/:id/reservations/:idReservation", service.getOneReservation);
router.post("/:id/reservations/", service.add);
router.delete("/:id");

module.exports = router;
