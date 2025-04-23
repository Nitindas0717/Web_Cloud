const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

// ✅ CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from frontend
  credentials: true                // Allow cookies, authorization headers, etc.
}));

// ✅ Middleware
app.use(express.json());

// ✅ Static files for uploaded content
app.use('/uploads', express.static('uploads'));

// ✅ API routes
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/webcloud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
