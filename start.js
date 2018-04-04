const mongoose = require('mongoose')

// Import environmental variables from our variables.env file
require('dotenv').config({ path: '.env' })

// Connect to our Database and handle any bad connections
let mongooseOptions = {}

mongoose.Promise = global.Promise
mongoose.connect(
  `mongodb://${process.env.DATABASE_HOST || localhost}:${process.env.DATABASE_PORT || 27017}/${process.env.DATABASE_NAME || 'useless-facts-api'}`,
  mongooseOptions
)
  .catch((error) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${error.message}`)
    process.exit(1)
  })

// Import all of our models
require('./models/Facts')

// Start our app!
const app = require('./app')
app.set('port', process.env.PORT || 8800)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`)
})