// medicineRoutes.js
const express = require('express');
const router = express.Router();
const medicineController = require('./medicineController');

router.post('/add-medicine', medicineController.addMedicine);

module.exports = router;
