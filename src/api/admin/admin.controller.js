const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("./admin.model");
const { setError } = require("../../helpers/error/handle.error");

const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const newAdmin = new Admin(req.body);
    console.log(newAdmin);
    const adminDuplicate = await Admin.findOne({
      adminName: newAdmin.adminName,
    });
    console.log(adminDuplicate);
    if (adminDuplicate) return next("Admin already exists");

    const newAdminDB = newAdmin.save();
    return res.json({
      status: 201,
      message: "Admin registered",
      data: newAdminDB,
    });
  } catch (error) {
    return next(setError(500, "Admin registered fail"));
  }
};

const login = async (req, res, next) => {
  try {
    const adminInfo = await Admin.findOne({ adminname: req.body.adminname });
    if (bcrypt.compareSync(req.body.password, adminInfo.password)) {
      adminInfo.password = null;
      const token = jwt.sign(
        {
          id: adminInfo._id,
          adminname: adminInfo.adminname,
        },
        req.app.get("secretKey"),
        { expiresIn: "200h" }
      );
      return res.json({
        status: 200,
        message: "welcome Admin",
        admin: adminInfo,
        token: token,
      });
    } else {
      return next("Incorrect password");
    }
  } catch (error) {
    return next(setError(500, "Admin login fail"));
  }
};

module.exports = { register, login };
