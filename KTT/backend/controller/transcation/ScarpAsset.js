const Transcation = require("../../models/TranscationModel");

exports.createScrapAsset = async (req, res) => {
    try {
      const { assetId,userId } = req?.body;
      const scrapAsset = await Transcation.create({
        assetId,
        userId,
        remarks:req?.body?.remarks ?req?.body?.remarks :"",
        status:"scrap"
      });
      res.status(200).json({
        status: "success",
        data: scrapAsset,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  };