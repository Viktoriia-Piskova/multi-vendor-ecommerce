const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utilities/tokenCreator");

class AuthControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          });
          responseReturn(res, 200, { token, message: "Login success" });
        } else {
          responseReturn(res, 401, { error: "Password is wrong" });
        }
      } else {
        responseReturn(res, 401, { error: "Email not found" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getUser = async (req, res) => {
    const { role, id } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
        console.log(user);
      } else {
        console.log("Seller user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new AuthControllers();
