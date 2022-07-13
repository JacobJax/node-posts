const mongoose = require('mongoose')

// create posts schema
const PostSchema = mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   date_created: {
      type: Date,
      default: Date.now
   }
})

module.exports = mongoose.model('Posts', PostSchema)