const jwt = require('jsonwebtoken');

const generateToken = (id) => {
<<<<<<< HEAD
  return jwt.sign({ id }, process.env.JWT_SECRET, {
=======
  return jwt.sign({ id }, 'your_jwt_secret', {
>>>>>>> origin/master
    expiresIn: '30d',
  });
};

module.exports = generateToken;
