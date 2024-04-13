const express = require("express");
const {
  getAssets,
  createAsset,
  updateAsset,
} = require("../controller/assest/AssestController");
const {
  getAssetType,
  createAssetType,
} = require("../controller/assest/AssetTypeController");
const {
  getEmployees,
  createEmployee,
  updateEmployee,
} = require("../controller/employee/EmployeeController");
const { createIssue } = require("../controller/transcation/IssueAsset");
const { createReturnAsset } = require("../controller/transcation/ReturnAsset");
const { createScrapAsset } = require("../controller/transcation/ScarpAsset");
const { getTranscationHistory } = require("../controller/transcation/TranscationController");

const appRouter = express.Router();

appRouter.route("/employee").get(getEmployees).post(createEmployee);
appRouter.put("/employee/:id", updateEmployee);

appRouter.route("/asset").get(getAssets).post(createAsset);
appRouter.put("/asset/:id", updateAsset);

appRouter.route("/asset-type").get(getAssetType).post(createAssetType);

appRouter.route("/issue-asset").post(createIssue);
appRouter.route("/return-asset").post(createReturnAsset);
appRouter.route("/scrap-asset").post(createScrapAsset);
appRouter.route("/asset-history").get(getTranscationHistory)

module.exports = appRouter;
