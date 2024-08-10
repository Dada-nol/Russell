const express = require("express");
const router = express.Router();
const service = require("../services/catways");
const Catway = require("../models/catway");

router.get("/add", async (req, res, next) => {
  res.render("catway/createCatway", {
    title: "Create",
  });
});

router.get("/update/:id", async (req, res, next) => {
  const id = req.params.id;
  let catway = await Catway.findById(id);
  res.render("catway/updateCatway", {
    title: "Update",
    catway: catway,
  });
});

router.get("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  let catway = await Catway.findById(id);
  res.render("catway/deleteCatway", {
    title: "Delete",
    catway: catway,
  });
});

router.get("/read/:id", async (req, res, next) => {
  const id = req.params.id;
  let catway = await Catway.findById(id);
  res.render("catway/readCatway", {
    title: "Read",
    catway: catway,
  });
});

router.post("/", service.createCatway);
router.get("/", service.getAllCatways);
router.get("/:id", service.getOneCatway);
router.put("/:id", service.updateCatway);
router.delete("/:id", service.deleteCatway);

module.exports = router;
