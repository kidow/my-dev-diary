const express = require('express')
const router = express.Router()
const Todos = require('../models/Todos')

router.get('/post', (req, res, next) => {
  Todos
    .find({})
    .exec()
    .then(todo => {
      res.json(todo)
      console.log(todo)
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
})

module.exports = router