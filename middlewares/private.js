/* Script permttant de bloquer les chemins d'accès en fonction de s'il y a un token ou non en cookie */

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
        return res.redirect("/users/login");
      } else {
        next();
      }
    });
  } else {
    return (
      res.redirect("/users/login"),
      console.error("Vous devez être connecté pour effectuer cette action")
    );
  }
};
