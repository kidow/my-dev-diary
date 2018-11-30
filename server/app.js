require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 8000

const todosRouter = require('./src/routes/todos')

const app = express()

mongoose.Promise = Promise
mongoose.connect(process.env.MONGO_URI, { dbName: 'mydevdiary', useNewUrlParser: true }, err => {
  if (err) {
    console.log('몽고디비 연결 에러', err)
  } else {
    console.log('몽고디비 연결 성공')
  }
})

app.use(express.json())
app.use(cors())

app.use('/api/todos', todosRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});