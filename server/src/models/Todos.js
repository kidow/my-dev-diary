const mongoose = require('mongoose')

const Todos = new mongoose.Schema({
  text: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Todos', Todos)