const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).send('User registered');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET);
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
};
