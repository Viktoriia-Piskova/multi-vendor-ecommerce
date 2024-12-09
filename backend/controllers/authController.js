const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const sellerToCustomerModel = require("../models/chat/sellerToCustomerModel");
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

  seller_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const seller = await sellerModel.findOne({ email }).select("+password");
      if (seller) {
        const match = await bcrypt.compare(password, seller.password);
        if (match) {
          const token = await createToken({
            id: seller.id,
            role: seller.role,
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
      console.log(error);
      responseReturn(res, 500, { error: error.message });
    }
  };

  seller_register = async (req, res) => {
    console.log(req.body);
    const { email, name, password } = req.body;
    try {
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        responseReturn(res, 404, { error: "Email already exists" });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: "manual",
        });
        await sellerToCustomerModel.create({
          id: seller.id,
        });

        const token = await createToken({
          id: seller.id,
          role: seller.role,
        });
        res.cookie("sellerAccessToken", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        });
        responseReturn(res, 201, {
          token,
          message: "Successfull seller registration",
        });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  getUser = async (req, res) => {
    const { role, id } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log("Seller user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new AuthControllers();
