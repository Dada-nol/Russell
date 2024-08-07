var express = require("express");
var router = express.Router();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });

const catwayRoute = require("../routes/catways");
const reservationRoute = require("../routes/reservations");

router.get("/", async function (req, res, next) {
  res.status(200).json({
    name: process.env.APP_NAME,
    version: "1.0",
    status: 200,
    message: "Bienvenue sur l'API ! ",
  });
});

router.use("/catways", catwayRoute);
router.use("/catways/:id/reservations", reservationRoute);

module.exports = router;
