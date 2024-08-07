const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../env/.env") });

const clientOptions = {
  dbName: "Russell",
};

exports.initClientDbConnection = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGO, clientOptions);
    console.log("Et c'est partit ! Mongo connected !!!");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
