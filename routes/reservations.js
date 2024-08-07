const express = require("express");
const router = express.Router();
const service = require("../services/reservations");
//const private = require("../middlewares/private");

//router.get("/:id", private.checkJWT, service.getById);
//router.get("/", service.getAllReservations);
//router.delete("/:idReservation", private.checkJWT, service.delete);
//router.post("/", service.addReservation);

module.exports = router;
