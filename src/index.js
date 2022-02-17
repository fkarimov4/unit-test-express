const express = require('express')
const app = express()

app.use(express.json())

const port = 8001

app.get('/', (req, res) => {
    res.send('Hello')
})

module.exports = app;