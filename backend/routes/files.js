const express = require('express');
const router = express.Router();

// Placeholder route
router.get('/', (req, res) => {
  res.send('File route is working!');
});

module.exports = router;
