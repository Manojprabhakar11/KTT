const mongoose = require("mongoose");
const validator = require("validator");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is Required"],
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "please provide validate email"],
    required: [true, "email is Required"],
  },
  status: { type: String, default: "active", enum: ["active", "inActive"] },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
