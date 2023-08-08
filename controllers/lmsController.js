require('../models/db')
const Course = require('../models/Course')
const Enrollment = require('../models/Enrollment')
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');



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
    
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    
        res.json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed' });
    }
   
}




exports.Course = async(req,res)=>{
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create course' });
      }
}


exports.Enrollment = async(req,res)=>{
    try {
        const enrollment = await Enrollment.create(req.body);
        res.status(201).json(enrollment);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to enroll student' });
    }
}

