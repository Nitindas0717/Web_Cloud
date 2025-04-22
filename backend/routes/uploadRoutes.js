const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
<<<<<<< HEAD
const { protect } = require('../src/middleware/authMiddleware');
const files = require('../data/files');

// Set up multer storage
=======

// Set up storage engine
>>>>>>> origin/master
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

<<<<<<< HEAD
const upload = multer({ storage });

// @route   POST /api/upload
// @desc    Upload a file
// @access  Private
router.post('/', protect, upload.single('file'), (req, res) => {
  const fileRecord = {
    userId: req.user.id,
    originalName: req.file.originalname,
    storedName: req.file.filename,
    path: `/uploads/${req.file.filename}`,
    uploadedAt: new Date(),
  };

  files.push(fileRecord);

  res.status(200).json({
    message: 'File uploaded successfully',
    filePath: fileRecord.path,
  });
});

// @route   GET /api/upload/myfiles
// @desc    Get all files uploaded by user
// @access  Private
router.get('/myfiles', protect, (req, res) => {
  const userFiles = files.filter(file => file.userId === req.user.id);

  res.status(200).json({
    message: 'Fetched user files',
    files: userFiles,
=======
// File upload middleware
const upload = multer({ storage });

// POST /api/upload
router.post('/', upload.single('file'), (req, res) => {
  res.status(200).json({
    message: 'File uploaded successfully',
    filePath: `/uploads/${req.file.filename}`,
>>>>>>> origin/master
  });
});

module.exports = router;
