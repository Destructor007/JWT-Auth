const User = require("../models/users");

const bcrypt = require("bcrypt");
const { generateToken } = require("../middleware/token");

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
    const token = generateToken(user);
    res.cookie("userToken", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      }).status(200).json({
        message: "Login successful"
    });
}

module.exports = { login };