require('dotenv').config({ path: '../env/.env' });
const { ACCESS_TOKEN_SECRET } = process.env;

const jwt = require('jsonwebtoken');

const createToken = async () => {
    const token = await jwt.sign({id: ''}, ACCESS_TOKEN_SECRET);
}