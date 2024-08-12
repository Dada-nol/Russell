/* Méthodes pour la création, lecture, modification, suppression de l'objet catway */

const Catway = require("../models/catway");

exports.createCatway = async (req, res, next) => {
  const temp = {
    catwayNumber: req.body.catwayNumber,
    type: req.body.type,
    catwayState: req.body.catwayState,
  };

  try {
    let catway = await Catway.create(temp);
    return res.status(201).json(catway);
  } catch (error) {
    console.error("Error adding catway:", error);
    return res.status(501).json(error);
  }
};

exports.getAllCatways = async (req, res, next) => {
  const catways = await Catway.find();

  try {
    for (let i = 0; i < catways.length; i++) {
      if (catways) {
        return res.status(200).json(catways);
      }
    }

    return res.status(404).json("catway_not_found");
  } catch (error) {
    console.error("Error fetching catway", error);
    return res.status(501).json(error);
  }
};

exports.getOneCatway = async (req, res, next) => {
  const id = req.params.id;

  try {
    let catway = await Catway.findById(id);

    if (catway) {
      return res.status(200).json(catway);
    }

    return res.status(404).json("catway_not_found");
  } catch (error) {
    console.error("Error fetching catway by ID:", error);
    return res.status(501).json(error);
  }
};

exports.updateCatway = async (req, res, next) => {
  const id = req.params.id;
  const temp = {
    catwayNumber: req.body.catwayNumber,
    type: req.body.type,
    catwayState: req.body.catwayState,
  };

  try {
    let catway = await Catway.findOne({ _id: id });

    if (catway) {
      Object.keys(temp).forEach((key) => {
        if (!!temp[key]) {
          catway[key] = temp[key];
        }
      });

      await catway.save();
      return res.status(201).json(catway);
    }

    return res.status(404).json("catway_not_found");
  } catch (error) {
    console.error("Error updating catway:", error);
    return res.status(501).json(error);
  }
};

exports.deleteCatway = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Catway.deleteOne({ _id: id });
    return res.status(200).json("delete_ok");
  } catch (error) {
    console.error("Error deleting catway:", error);
    return res.status(501).json(error);
  }
};
