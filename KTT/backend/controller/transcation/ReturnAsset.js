const Transcation = require("../../models/TranscationModel");

exports.createReturnAsset = async (req, res) => {
    try {
      const { assetId,userId } = req?.body;
      const returnAsset = await Transcation.create({
        assetId,
        userId,
        remarks:req?.body?.remarks ?req?.body?.remarks :"",
        status:"return"
      });
      res.status(200).json({
        status: "success",
        data: returnAsset,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  };