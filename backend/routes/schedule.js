const express = require('express');
const { createSchedule, getSchedules } = require('../controllers/scheduleController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/', authenticate, createSchedule);
router.get('/', authenticate, getSchedules);

module.exports = router;
