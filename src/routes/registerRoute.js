const { postUser } = require('../controllers/registerController');

const express = require('express')
const router = express.Router()

router.post('/register', postUser)

module.exports = router