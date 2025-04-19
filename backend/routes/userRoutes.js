const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Test route
router.get('/test', (req, res) => {
    res.send('User route working!');
});

// @route   POST /api/users/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        });

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;
