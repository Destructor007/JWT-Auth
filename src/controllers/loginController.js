const User = require("../models/users");

const bcrypt = require("bcrypt");
const { generateToken, verifyToken } = require("../middleware/token");

const login = async (req, res) => {
  const { uname, psw } = req.body;
  const user = await User.findOne({ username: uname });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const isMatch = await bcrypt.compare(psw, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Incorrect password",
    });
  }
  const hasToken = req.cookies.userToken;
  if (hasToken) {
    await verifyToken(req, res);
    return res.redirect("/");
  } else {
    const token = generateToken(user);
    res.cookie("userToken", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return res.status(200).json({
      message: "User logged in successfully",
    });
  }
};

module.exports = { login };
