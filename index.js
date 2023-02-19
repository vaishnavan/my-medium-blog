/* eslint-disable no-undef */
const express = require("express")
const { db } = require("./db")
const cors = require('cors');
const auth = require('./middleware/auth')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api/v1', require('./routes/auth.routes'))

app.get('/api/v1/getTest', auth, (req, res) => {
    res.json({message: "json token test"})
})

app.listen((PORT), () => {
    console.log(`server up and running on port ${PORT}`)
})

db();