const express = require("express");
const router = express.Router();
const service = require("../services/users");
const User = require("../models/user");
const private = require("../middlewares/private");

router.get("/add", async (req, res, next) => {
  res.render("user/create_user", {
    title: "Create",
  });
});

router.get("/update/:id", async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/update_user", {
    title: "Update",
    user: user,
  });
});

router.get("/delete/:id", async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/delete_user", {
    title: "Delete",
    user: user,
  });
});

router.get("/read/:id", async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/read_user", {
    title: "Read",
    user: user,
  });
});

router.get("/:id", service.getById);
router.get("/", service.getAllUsers);
router.post("/", service.add);
router.patch("/:id", service.update);
router.delete("/:id", service.delete);
router.post("/authenticate", service.authenticate);

module.exports = router;
