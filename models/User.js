// Imports
const mongoose = require('mongoose')

// User Schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
})

// Exports
module.exports = mongoose.model('user', UserSchema) // Model is called 'user'. Collection name will be the plural version 'users'.
