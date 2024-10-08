/* Fichier central de l'application Russell */

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const methodOverride = require("method-override");
const helmet = require("helmet");

const indexRouter = require("./routes/index");

const mongodb = require("./db/mongo");

mongodb.initClientDbConnection();

const app = express();

app.use(methodOverride("_method"));
app.use(helmet());

app.use(
  cors({
    exposedHeaders: ["Authorizations"],
    origin: "*",
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ name: "API ", version: "1.0", status: 404, message: "not_found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur serveur !");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

module.exports = app;
