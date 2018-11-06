const express = require('express')
const router = express.Router()
const Todos = require('../models/Todos')

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todos.find({})
    res.json(todos)
  } catch (e) {
    console.log(e)
    res.status(500)
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  const { text } = req.body
  const todo = new Todos(text)
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