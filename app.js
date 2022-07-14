// setup app
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const PORT = process.env.PORT

app.use(bodyParser.json())

// connect to database
mongoose.connect(process.env.DB_CONNECTION_STRING)

// create posts route
const postsRoute = require('./routes/Posts')

// set app to use route as middleware
app.use('/posts', postsRoute)

app.listen(PORT || 5000)
