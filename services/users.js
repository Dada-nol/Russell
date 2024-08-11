const User = require("../models/user");
const Catway = require("../models/catway");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });

exports.getById = async (req, res, next) => {
  const id = req.params.id;

  try {
    let user = await User.findById(id);

    if (user) {
      return res.status(200).json(user);
    }

    return res.status(404).json("user_not_found");
  } catch (error) {
    console.error("Error fetching user by ID:", error); // Log the error
    return res.status(501).json(error);
  }
};

// Ici c'est le callback qui servira à renvoyer tous les users
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  try {
    for (let i = 0; i < users.length; i++) {
      if (users) {
        return res.status(200).json(users);
      }
    }

    return res.status(404).json("user_not_found");
  } catch (error) {
    console.error("Error fetching user by ID:", error); // Log the error
    return res.status(501).json(error);
  }
};

// Ici c'est le callback qui servira à ajouter un user
exports.add = async (req, res, next) => {
  const temp = {
    name: req.body.name,
    firstname: req.body.firstname,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    let user = await User.create(temp);
    return res.status(201).json(user);
  } catch (error) {
    console.error("Error adding user:", error); // Log the error
    return res.status(501).json(error);
  }
};

// Ici c'est le callback qui servira à modifier un user
exports.update = async (req, res, next) => {
  const id = req.params.id;
  const temp = {
    name: req.body.name,
    firstname: req.body.firstname,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    let user = await User.findOne({ _id: id });

    if (user) {
      Object.keys(temp).forEach((key) => {
        if (!!temp[key]) {
          user[key] = temp[key];
        }
      });

      await user.save();
      return res.status(201).json(user);
    }

    return res.status(404).json("user_not_found");
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(501).json(error);
  }
};

// Ici c'est le callback qui servira à supprimer un user
exports.delete = async (req, res, next) => {
  const id = req.params.id;
  try {
    await User.deleteOne({ _id: id });
    return res.redirect("/");
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(501).json(error);
  }
};

exports.authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let catways = await Catway.find();
    let users = await User.find();
    let user = await User.findOne({ email: email }, "-__v -createdAt");

    if (user) {
      bcrypt.compare(password, user.password, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        if (response) {
          delete user._doc.password;

          const expireIn = 24 * 60 * 60;
          const token = jwt.sign(
            {
              user: user,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: expireIn,
            }
          );
          return (
            res.cookie("token", token, { httpOnly: true }),
            res.render("tdb", {
              title: "Tableau de bord",
              users: users,
              catways: catways,
            })
          );
        }

        res.status(403).json("wrong_credentials");
      });
    } else {
      res.status(404).json("user_not_found");
    }
  } catch (error) {
    res.status(501).json(error);
  }
};
