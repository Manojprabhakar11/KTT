const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  assetType: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, "give assest type or create one"],
  },
  make: {
    type: String,
    required: [true, "make is Required"],
  },
  model: {
    type: String,
    required: [true, "model is Required"],
  },
  serialNumber: {
    type: String,
    unique: true,
    required: [true, "serial number is required"],
  },
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
