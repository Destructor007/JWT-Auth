const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const db = require('./config/dbConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use('/api/users', require('./routes/registerRoute'));
app.use('/api/users', require('./routes/loginRoute'));

module.exports = app;