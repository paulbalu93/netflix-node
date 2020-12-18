const express = require('express')
const server = express()
require('dotenv').config();

server.listen(process.env.PORT, () => {
console.log('running on port '+ process.env.PORT)}
);

