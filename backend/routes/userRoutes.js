const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const generateToken = require('../utils/generateToken');
const users = require('../data/users'); // shared array
const { protect } = require('../src/middleware/authMiddleware'); // ✅ Correct import

console.log('typeof protect:', typeof protect);

// @desc    Test Route
// @route   GET /api/users/test
// @access  Public
router.get('/test', (req, res) => {
  res.send('User route working!');
});

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password, // You can hash this later
  };

  users.push(newUser);

  res.status(201).json({
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    token: generateToken(newUser.id),
  });
});

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get('/profile', protect, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({
    message: 'Profile fetched successfully',
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
});

module.exports = router;
