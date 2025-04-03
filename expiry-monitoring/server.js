const express = require('express'); 
const mongoose = require('mongoose');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

const app = express();

// Middleware
app.use(express.json());

// Database Connection - Updated to remove deprecated options
mongoose.connect('mongodb://localhost:27017/pharmacy_db')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/pharmacy', pharmacyRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});