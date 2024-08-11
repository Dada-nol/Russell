const express = require("express");
const router = express.Router();
const service = require("../services/catways");
const views = require("../services/views");

router.get("/add", views.add_catway);
router.get("/update/:id", views.update_catway);
router.get("/delete/:id", views.delete_catway);
router.get("/read/:id", views.read_catway);

router.post("/", service.createCatway);
router.get("/", service.getAllCatways);
router.get("/:id", service.getOneCatway);
router.put("/:id", service.updateCatway);
router.delete("/:id", service.deleteCatway);

module.exports = router;
