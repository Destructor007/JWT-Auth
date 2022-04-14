require('dotenv').config({ path: '../env/.env' });
const { ACCESS_TOKEN_SECRET } = process.env;

const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {

        username: user.username,
    },
    options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, options);
};
module.exports = { generateToken };