const Asset = require("../../models/AssestModel");
const AssetCategory = require("../../models/AssestTypeModel");

exports.createAsset = async (req, res) => {
  try {
    const { assetType, make, model, serialNumber } = req?.body;
    const assetCategory = await AssetCategory.findById(assetType);
    if (!assetCategory) throw new Error("invalid assest type id");
    const newAsset = await Asset.create({
      assetType: assetCategory,
      make,
      model,
      serialNumber,
    });
    res.status(200).json({
      status: "success",
      data: newAsset,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAssets = async (req, res) => {
  try {
    let searchQuery = {};
    if (req?.query?.search) {
      searchQuery = {
        $or: [
          { make: { $regex: req?.query?.search, $options: "i" } },
          { model: { $regex: req?.query?.search, $options: "i" } },
          { serialNumber: { $regex: req?.query?.search, $options: "i" } },
        ],
      };
    }
    const assets = await Asset.find(searchQuery);
    res.status(200).json({
      status: "success",
      data: {
        content: assets,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err?.message,
    });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const { make, model, serialNumber } = req.body;
    const updatedAsset = await Asset.findByIdAndUpdate(
      req.params?.id,
      {
        make,
        model,
        serialNumber,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: updatedAsset,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
