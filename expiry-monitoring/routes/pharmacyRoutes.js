const express = require('express');
const router = express.Router();
const { getExpiringMedicines } = require('../controllers/pharmacyController');

router.get('/expiring', getExpiringMedicines);

module.exports = router;