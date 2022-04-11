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
    //Function here
}

module.exports = { login };