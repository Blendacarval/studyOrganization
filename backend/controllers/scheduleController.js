const Schedule = require('../models/schedule');

exports.createSchedule = async (req, res) => {
    const { subject, topic, date, time } = req.body;
    const newSchedule = new Schedule({ studentId: req.user.userId, subject, topic, date, time });
    await newSchedule.save();
    res.status(201).send('Schedule created');
};

exports.getSchedules = async (req, res) => {
    const schedules = await Schedule.find({ studentId: req.user.userId });
    res.json(schedules);
};
