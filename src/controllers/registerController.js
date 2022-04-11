const Users = require("../models/users");

const bcrypt = require("bcrypt");

const { generateToken } = require("../middleware/token");

const postUser = async (req, res) => {
  const {
    username,
    password,
    email,
    firstName,
    lastName,
    phone,
    address,
    city,
    state,
    pincode,
    country,
  } = req.body;
  const foundUser = await Users.findOne({ username });
  if (foundUser) {
    return res.status(400).json({
      message: "Username already exists",
    });
  }
  const hashedPass = await bcrypt.hash(password, 10);
  const user = new Users({
    username,
    password: hashedPass,
    email,
    firstName,
    lastName,
    phone,
    address,
    city,
    state,
    pincode,
    country,
  });
  try {
    const token = generateToken(user);
    await user.save();
    res.cookie("userToken", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(201)
      .json({
        message: "User created successfully"
      });
    console.log(token);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { postUser };
