const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");

class AuthControllers {
  admin_login = async (req, res) => {
    //console.log(req.body);
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
    //   console.log(admin);
    if (admin) {
        responseReturn(res, 200, {error: "Email not found"})
    } else {
        responseReturn(res, 401, {error: "Email not found"})
    }
    } catch (error) {
      responseReturn(res, 500, {error: error.message})
    }
  };
}

module.exports = new AuthControllers();
