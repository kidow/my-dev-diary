const express = require('express')
const router = express.Router()
const Todos = require('../models/Todos')

router.post('/', (req, res, next) => {
  const { text } = req.body
  const todo = new Todos({ text })
  todo
    .save()
    .then(result => res.status(201).json(result))
    .catch(err => {
      console.log(err)
      next(err)
    })
})

module.exports = router