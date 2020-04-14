const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const meals = require('./router/meals')
const orders = require('./router/orders')
const auth = require('./router/auth')
const dotenv = require("dotenv");
dotenv.config();
const app = express()
app.use(bodyParser.json())
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

module.exports = app
