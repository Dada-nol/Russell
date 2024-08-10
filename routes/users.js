const express = require("express");
const router = express.Router();
const service = require("../services/users");

router.get("/:id", service.getById);
router.get("/", service.getAllUsers);
router.put("/add", service.add);
router.patch("/:id", service.update);
router.delete("/:id", service.delete);

module.exports = router;
