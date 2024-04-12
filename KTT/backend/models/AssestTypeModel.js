const mongoose = require("mongoose");

const assetCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "name is Required"],
  },
});
const AssetCategory = mongoose.model("AssetCategory", assetCategorySchema);

module.exports = AssetCategory;
