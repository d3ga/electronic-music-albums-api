const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const factsSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  text: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  } 
})

module.exports = mongoose.model('Facts', factsSchema)