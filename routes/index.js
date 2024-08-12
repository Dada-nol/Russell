var express = require("express");
var router = express.Router();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });

const User = require("../models/user");
const Catway = require("../models/catway");
const Reservation = require("../models/reservation");
const private = require("../middlewares/private");

const catwayRoute = require("../routes/catways");
const userRoute = require("../routes/users");
const reservationRoute = require("../routes/reservations");

router.get("/", async function (req, res, next) {
  res.render("accueil", {
    title: "Accueil",
  });
});

const tdb = router.get(
  "/tableau_de_bord",
  private.checkJWT,
  async (req, res, next) => {
    let catways = await Catway.find();
    let users = await User.find();
    let reservations = await Reservation.find();
    res.render("tdb", {
      title: "Tableau de bord",
      users: users,
      catways: catways,
      reservations: reservations,
    });
  }
);

router.use("/catways", catwayRoute);
router.use("/users", userRoute);
router.use("/catways", reservationRoute);
router.use(tdb);

module.exports = router;
