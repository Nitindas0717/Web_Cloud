const jwt = require('jsonwebtoken');
<<<<<<< HEAD
const users = require('../../data/users');

const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = users.find(user => user.id === decoded.id);

      next();
    } catch (error) {
      console.error('Token verification failed:', error);
=======

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, 'your_jwt_secret'); // same secret as in generateToken.js

      req.user = decoded;
      next();
    } catch (error) {
>>>>>>> origin/master
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
