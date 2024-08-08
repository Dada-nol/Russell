const express = require("express");
const router = express.Router();
const service = require("../services/catways");

router.get("/create", async (req, res, next) => {
  res.render("createCatway", {
    title: "Create",
  });
});

router.post("/", service.createCatway);
router.get("/", service.getAllCatways);
router.get("/:id", service.getOneCatway);
router.put("/:id", service.updateCatway);
router.delete("/:id", service.deleteCatway);

module.exports = router;
