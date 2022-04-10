const Users = require('../models/users');

const bcrypt = require('bcrypt');

const postUser = async (req, res) => {
    const { username, password, email, firstName, lastName, phone, address, city, state, pincode, country } = req.body;
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
        country
    });
    try {
        await user.save();
        res.status(201).send({
            message: 'User created successfully'
        });
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { postUser };