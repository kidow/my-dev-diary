const mongoose = require('mongoose')

const Todos = new mongoose.Schema({
  text: {
    type: String
  },
  learned: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todos', Todos)