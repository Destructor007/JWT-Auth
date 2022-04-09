require('dotenv').config({path: './env/.env'});
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const mongoose = require('mongoose');

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to Database');
});

db.on('error', (err) => {
    console.log(err);
});

module.exports = db;