require("../models/db");
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



exports.Register = async(req,res)=>{
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({ username, email, password: hashedPassword });
    
        res.status(201).json({ message: 'Registration successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration failed' });
    }
   
}

exports.Login = async(req,res)=>{
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
    
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed' });
    }
   
}


