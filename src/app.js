const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use('/', (req, res) => {
  res.status(200).send('hello word')
})

app.use(require('./routes'))

module.exports = app