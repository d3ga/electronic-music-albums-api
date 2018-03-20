const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => res.send('Hello World Of Berlin!!'))

app.listen((process.env.PORT || 8800), () => console.log(`Useless FActs API listening on port ${process.env.PORT}!`))
