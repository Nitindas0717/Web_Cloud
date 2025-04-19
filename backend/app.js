const express = require('express');
const cors = require('cors');
const fileRoutes = require('./src/routes/files');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/files', fileRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to WebCloud Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
