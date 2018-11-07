const express = require('express')
const router = express.Router()
const Todos = require('../models/Todos')

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todos.find({}).sort({ _id: -1 })
    res.json(todos)
  } catch (e) {
    console.log(e)
    res.status(500)
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const { text, learned } = req.body
  const todo = new Todos({text, learned})
  try {
    await todo.save()
    res.json(todo)
  } catch (e) {
    console.log(e)
    res.status(500)
    next(e)
  }
})

module.exports = router