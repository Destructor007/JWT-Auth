require('dotenv').config({ path: '../env/.env' });
const { ACCESS_TOKEN_SECRET } = process.env;

const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
    },
    options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, options);
};

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer ')) {
        const token = authorization.replace('Bearer ', '');
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }
            req.user = decoded;
            next();
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

module.exports = { generateToken };