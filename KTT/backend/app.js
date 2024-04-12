const express = require("express");
const app = express();
const cors = require("cors");
const appRouter = require("./routes/appRouter");

app.use(cors());

app.use(express.json());

app.use("/api", appRouter);

module.exports = app;
