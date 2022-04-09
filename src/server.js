require('dotenv').config({path: './env/.env'});
const { PORT } = process.env;

const app = require('./app');

const http = require('http');

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});