const express = require('express');
const { getAllMedicines, getExpiringMedicines, addMedicine } = require('../controllers/medicineController');
const router = express.Router();

router.get('/', getAllMedicines);
router.get('/expiring', getExpiringMedicines);
router.post('/', addMedicine);

module.exports = router;
