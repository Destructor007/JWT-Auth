require("dotenv").config({ path: "../env/.env" });
const { ACCESS_TOKEN_SECRET } = process.env;

const User = require("../models/users");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/token");

const login = async (req, res, next) => {
  const { uname, psw } = req.body;
  try {
    const user = await User.findOne({ username: uname });
    const isMatch = await bcrypt.compare(psw, user.password);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    } else if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    } else {
      const token = req.cookies.userToken;
      if (token) {
        const verifyToken = jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
          if (err) {
            return res.status(400).json({
              message: "Invalid token",
            });
          } else {
            res.json({message: 'User logged in successfully with old token'})
          }
      })
      } else {
        const newToken = generateToken(user);
        res.cookie("userToken", newToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
          }).send("Logged in with new token");
        console.log(newToken);
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { login };