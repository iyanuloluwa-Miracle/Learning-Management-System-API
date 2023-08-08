// models/Enrollment.js
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
