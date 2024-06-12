const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const scheduleRoutes = require('./routes/schedule');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/schedules', scheduleRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
