const express = require("express");
const router = express.Router();
const service = require("../services/reservations");

router.get("/");
router.get("/:idReservation");
router.post("/");
router.delete("/:idReservation");

module.exports = router;
