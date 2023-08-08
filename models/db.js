require('dotenv').config();
const mongoose = require('mongoose');

// Load the URI from the environment variables defined in the .env file
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code that depends on the database connection should go here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
});


//Models
require('./User')
require('./Course')
require('./Enrollment')
require('./Student')
require('')
