// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Hashed password
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
