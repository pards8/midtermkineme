const express = require('express');
const router = express.Router();
const { getPharmacyMachines } = require('../controllers/pharmacyMachineController');

// GET /pharmacy/modules-name
router.get('/modules-name', getPharmacyMachines);

module.exports = router;