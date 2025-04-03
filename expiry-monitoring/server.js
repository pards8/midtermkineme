const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const medicineRoutes = require('./routes/medicineRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/medicines', medicineRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});