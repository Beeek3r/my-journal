// Imports
const mongoose = require('mongoose')

// User Schema
const JournalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    default: true
  },
  body: {
    type: String,
    require: ''
  },
  date: {
    type: Date,
    default: new Date()
  },
  favourite: {
    type: Boolean,
    default: false
  },
  mood: {
    type: String,
    default: 'neutral'
  }
})

// Export
module.exports = mongoose.model('journal', JournalSchema)
