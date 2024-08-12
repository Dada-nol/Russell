const express = require("express");
const router = express.Router();
const service = require("../services/catways");
const views = require("../services/views");
const private = require("../middlewares/private");

router.get("/add", views.add_catway);
router.get("/update/:id", views.update_catway);

router.post("/", service.createCatway);
router.get("/", private.checkJWT, service.getAllCatways);
router.get("/:id", private.checkJWT, service.getOneCatway);
router.put("/:id", private.checkJWT, service.updateCatway);
router.delete("/:id", private.checkJWT, service.deleteCatway);

module.exports = router;
