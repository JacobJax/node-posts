// setup app
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const PORT = process.env.PORT

app.use(bodyParser.json())

// connect to database
app.get('/', async (req, res) => {
   try {
      await mongoose.connect('mongodb+srv://nommad:Tallrhino94@cluster0.wwoebgl.mongodb.net/?retryWrites=true&w=majority')
      console.log('connected to DB')
   } catch (error) {
      console.log(error)
   }
})

// create posts route
const postsRoute = require('./routes/Posts')

// set app to use route as middleware
app.use('/posts', postsRoute)


app.listen(PORT || 5000)
