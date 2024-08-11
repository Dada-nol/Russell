const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });
const SECRET_KEY = process.env.SECRET_KEY;

exports.checkJWT = async (req, res, next) => {
  /* Fonction servant à privatiser les routes en fonction de si un utilisateur est connecté ou non*/
  let token = req.cookies.token;

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log(err.message);
        return res.redirect("/users/loggin");
      } else {
        console.log(decoded);
        next();
      }
    });
  } else {
    return res.redirect("/users/loggin");
  }
};
