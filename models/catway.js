const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const Catway = new Schema(
  {
    catwayNumber: {
      type: Number,
      trim: true,
      required: [true, "Le catwayNumber est requis"],
      unique: true, //index unique
    },
    type: {
      type: String,
      trim: true,
      required: [true, "Le type est requis"],
    },
    catwayState: {
      type: String,
      trim: true,
      required: [true, "Le catwayState est requis"],
    },
  },
  {
    //ajoute 2 champs au document createdAt et updateAt
    timestamps: true,
  }
);

// Hash le mot de passe quand il est modifié
User.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);

  next();
});

module.exports = mongoose.model("Catway", Catway);
