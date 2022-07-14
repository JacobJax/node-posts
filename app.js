// setup app
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const PORT = process.env.PORT

app.use(bodyParser.json())

// connect to database
const dbConnect = async () => {
   try {
      await mongoose.connect(process.env.DB_CONNECTION_STRING)
      console.log('connected to DB')
   } catch (error) {
      console.log(error)
   }
}

// create get route
app.get('/', (req, res) => {
   dbConnect()
   res.status(200)
})

// create posts route
const postsRoute = require('./routes/Posts')

// set app to use route as middleware
app.use('/posts', postsRoute)


app.listen(PORT || 5000)
