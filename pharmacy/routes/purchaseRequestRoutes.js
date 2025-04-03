const express = require('express');
const router = express.Router();
const {
  createPurchaseRequest
} = require('../controllers/purchaseRequestController');

// POST /pharmacy/request-stock
router.post('/request-stock', createPurchaseRequest);

module.exports = router;