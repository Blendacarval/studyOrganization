const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    studentId: mongoose.Schema.Types.ObjectId,
    subject: String,
    topic: String,
    date: Date,
    time: String
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
