const express = require('express')
const server = express()
const filmsRoute = require('./services/films')
const reviewsRoute = require('./services/reviews')
require('dotenv').config();
const cors = require('cors')
server.use(cors());


server.use(express.json());
server.use("/films",filmsRoute)
server.use("/reviews",reviewsRoute)
server.listen(process.env.PORT, () => {
console.log('running on port '+ process.env.PORT)}
);



