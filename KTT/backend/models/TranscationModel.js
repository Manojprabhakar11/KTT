const mongoose = require("mongoose");

const TranscationSchema = new mongoose.Schema({
    assetId: {
        type: mongoose.Schema.ObjectId,
        ref:"Asset",
        required: [true, "Asset is required"],
      },
      userId: {
        type: mongoose.Schema.ObjectId,
        ref:"Employee",
        required: [true, "Employee is required"],
      },
  status: { type: String, enum: ["issue", "return","scrap"] },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  remarks:String
});

const Transcation = mongoose.model("Transcation", TranscationSchema);

module.exports = Transcation;
