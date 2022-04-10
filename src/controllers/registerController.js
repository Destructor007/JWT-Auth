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
    res.status(201).send({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { postUser };