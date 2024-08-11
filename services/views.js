const User = require("../models/user");
const Catway = require("../models/catway");

module.exports.add_user = (req, res, next) => {
  res.render("user/create_user", {
    title: "Create",
  });
};

module.exports.read_user = async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/read_user", {
    title: "Read",
    user: user,
  });
};

module.exports.delete_user = async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/delete_user", {
    title: "Delete",
    user: user,
  });
};

module.exports.update_user = async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/update_user", {
    title: "Update",
    user: user,
  });
};

module.exports.login = async (req, res, next) => {
  const id = req.params.id;
  let user = await User.findById(id);
  res.render("user/login", {
    title: "Login",
    user: user,
  });
};

module.exports.read_catway = async (req, res, next) => {
  const id = req.params.id;
  let catway = await Catway.findById(id);
  res.render("catway/readCatway", {
    title: "Read",
    catway: catway,
  });
};

module.exports.delete_catway = async (req, res, next) => {
  const id = req.params.id;
  let catway = await Catway.findById(id);
  res.render("catway/deleteCatway", {
    title: "Delete",
    catway: catway,
  });
};

module.exports.update_catway = async (req, res, next) => {
  const id = req.params.id;
  let catway = await Catway.findById(id);
  res.render("catway/updateCatway", {
    title: "Update",
    catway: catway,
  });
};

module.exports.add_catway = (req, res, next) => {
  res.render("catway/createCatway", {
    title: "Create",
  });
};
