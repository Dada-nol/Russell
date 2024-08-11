const express = require("express");
const router = express.Router();
const service = require("../services/users");
const views = require("../services/views");
const private = require("../middlewares/private");

router.get("/add", views.add_user);
router.get("/update/:id", views.update_user);
router.get("/delete/:id", views.delete_user);
router.get("/read/:id", views.read_user);
router.get("/login", views.login);

router.get("/:id", private.checkJWT, service.getById);
router.get("/", private.checkJWT, service.getAllUsers);
router.post("/", private.checkJWT, service.add);
router.patch("/:id", private.checkJWT, service.update);
router.delete("/:id", private.checkJWT, service.delete);
router.post("/tableau_de_bord", service.authenticate, private.checkJWT);

module.exports = router;
