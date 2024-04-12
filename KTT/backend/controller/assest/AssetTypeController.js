const AssetCategory = require("../../models/AssestTypeModel");

exports.createAssetType = async (req, res) => {
  try {
    const newAssetCategory = await AssetCategory.create({
      name: req?.body?.name,
    });
    res.status(200).json({
      status: "success",
      data: newAssetCategory,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAssetType = async (req, res) => {
  try {
    const category = await AssetCategory.find();
    res.status(200).json({
      status: "success",
      data: { content: category },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
