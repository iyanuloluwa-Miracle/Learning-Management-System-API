// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Hashed password
  
});

module.exports = mongoose.model('User', userSchema);
