class AuthControllers {
  admin_login = async (req, res) => {
    console.log(req.body);
  };
}

module.exports = new AuthControllers();
