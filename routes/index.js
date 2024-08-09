var express = require("express");
var router = express.Router();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });

const catwayRoute = require("../routes/catways");
const reservationRoute = require("../routes/reservations");

router.get("/", async function (req, res, next) {
  res.render("accueil", {
    title: "Accueil",
  });
});

router.use("/catways", catwayRoute);
router.use("/catways/:id/reservations", reservationRoute);

module.exports = router;
