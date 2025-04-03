// server.js
const express = require('express');
const bodyParser = require('body-parser');
const medicineRoutes = require('./medicineRoutes');

const app = express();
const PORT = process.env.PORT || 3010;

// Middleware to parse JSON
app.use(bodyParser.json());

// Mounting medicine routes
app.use('/pharmacy', medicineRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
