const express = require('express');
const app = express();

const db = require('./config/dbConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

module.exports = app;