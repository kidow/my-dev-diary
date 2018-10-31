require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const indexRouter = require('./src/routes')
const postRouter = require('./src/routes/post')

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

app.use('/', indexRouter)
app.use('/api/post', postRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(8000, () => {
  console.log('App listening on port 8000!');
});