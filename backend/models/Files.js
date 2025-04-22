const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
