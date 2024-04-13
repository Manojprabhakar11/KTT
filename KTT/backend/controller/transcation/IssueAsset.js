const Transcation = require("../../models/TranscationModel");

exports.createIssue = async (req, res) => {
    try {
      const { assetId,userId } = req?.body;
      const newIssue = await Transcation.create({
        assetId,
        userId,
        remarks:req?.body?.remarks ?req?.body?.remarks :"",
        status:"issue"
      });
      res.status(200).json({
        status: "success",
        data: newIssue,
      });
    } catch (err) {
      res.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  };