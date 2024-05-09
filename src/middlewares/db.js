const mongoose = require('mongoose')

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.TODOAPP_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('>>> MongoDB Connection is established successfully...')
  } catch (error) {
    console.error('!!! ERROR WHILE CONNECTING TO MONGODB: ', error)
  }
}

module.exports = connectToMongoDb