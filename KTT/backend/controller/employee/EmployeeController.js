const Employee = require("../../models/EmployeeModel");

exports.getEmployees = async (req, res, next) => {
  try {
    let searchQuery = {};
    if (req?.query?.search) {
      searchQuery = {
        $or: [
          { name: { $regex: req?.query?.search, $options: "i" } },
          { email: { $regex: req?.query?.search, $options: "i" } },
          { status: { $regex: req?.query?.search, $options: "i" } },
        ],
      };
    }
    const employees = await Employee.find(searchQuery)?.select("-__v");
    res.status(200).json({
      status: "success",
      data: {
        content: employees,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err?.message,
    });
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const newUser = await Employee.create({
      name: req.body.name,
      email: req.body.email,
      status: req.body?.status,
    });
    res.status(200).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const updateEmployee = await Employee.findByIdAndUpdate(
      req?.params?.id,
      {
        name: req.body?.name,
        email: req.body?.email,
        status: req.body?.status,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: updateEmployee,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      error: err.message,
    });
  }
};
