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

const appRouter = express.Router();

appRouter.route("/employee").get(getEmployees).post(createEmployee);
appRouter.put("/employee/:id", updateEmployee);

appRouter.route("/asset").get(getAssets).post(createAsset);
appRouter.put("/asset/:id", updateAsset);

appRouter.route("/asset-type").get(getAssetType).post(createAssetType);

module.exports = appRouter;
