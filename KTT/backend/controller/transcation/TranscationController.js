const Asset = require("../../models/AssestModel");
const Employee = require("../../models/EmployeeModel");
const Transcation = require("../../models/TranscationModel");

exports.getTranscationHistory=async(req,res,next)=>{
    try{
        const transcations=await Transcation.aggregate([{ $sort: { createdAt: 1 } }, 
        {
          $lookup: {
            from: 'assets', 
            localField: 'assetId',
            foreignField: '_id',
            as: 'asset',
            pipeline:[{ $lookup: {
                from: "assetcategories", 
        localField: 'assetTypeId',
        foreignField: '_id',
        as: 'assetType',
              },}]
          },
        },        
        {
          $lookup: {
            from: 'employees', 
            localField: 'userId',
            foreignField: '_id',
            as: 'employee',
          },
        },])
        res.status(200).json({
            status: "success",
            data: transcations,
          });
    }catch(err){
        res.status(400).json({
            status: "error",
            message: err.message,
          });
    }
}