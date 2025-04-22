const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://127.0.0.1:27017/webcloud')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
