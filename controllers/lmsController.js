require('../models/db')
const Course = require('../models/Course')
const Enrollment = require('../models/Enrollment')
const Student = require('../models/Student')
const { generateUniqueId } = require('../utils/generateId')
exports.Course = async (req, res) => {
  try {
    const courseId = generateUniqueId(); // Generate a unique ID for the course
    const course = await Course.create({ ...req.body, _id: courseId }); // Use the generated ID
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create course' });
  }
};

exports.Enrollment = async (req, res) => {
  try {
    const { studentEmail, courseId } = req.body;

    // Generate a unique ID for the student
    const studentId = generateUniqueId();
    const student = await Student.create({ _id: studentId, email: studentEmail });

    // Create the enrollment with the generated student and course IDs
    const enrollment = await Enrollment.create({ student: studentId, course: courseId });
    res.status(201).json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to enroll student' });
  }
};


exports.RegisterStudent = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Generate a unique ID for the student
    const studentId = generateUniqueId();

    // Create the student record with the generated ID
    const student = await Student.create({ _id: studentId, name, email });

    res.status(201).json({ message: 'Student registered successfully', student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Student registration failed' });
  }
};