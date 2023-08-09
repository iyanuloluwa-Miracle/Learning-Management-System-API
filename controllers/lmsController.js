require('../models/db')
const Course = require('../models/Course')
const Enrollment = require('../models/Enrollment')
const Student = require('../models/Student')

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

exports.RegisterStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    // Create a new student document
    const student = await Student.create({ name, email });

    res.status(201).json({ message: 'Student registration successful', studentId: student._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Student registration failed' });
  }
};