const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DB;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((connection) => {
    // console.log(connection);
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`${port}`);
});
