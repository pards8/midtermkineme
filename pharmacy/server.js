require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const purchaseRoutes = require('./routes/purchaseRequestRoutes');

const app = express();

// Modern MongoDB connection (v4.0.0+)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB')) 
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/pharmacy', purchaseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);