const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))

const PORT = process.env.PORT || 41001

app.listen(PORT, () => {
  if (PORT === 41001) {
    console.log(`>>> .env file is not set correctly.`)
  }
  console.log(`>>> todoapp is running on http://localhost:${PORT}`)
})