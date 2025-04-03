const PurchaseRequest = require('../models/PurchaseRequest');

exports.createPurchaseRequest = async (req, res) => {
  try {
    const { medicine_id, quantity } = req.body;
    
    // Basic validation
    if (!medicine_id || !quantity) {
      return res.status(400).json({ error: 'medicine_id and quantity are required' });
    }

    const newRequest = await PurchaseRequest.create({
      medicine_id,
      quantity
    });

    res.status(201).json({
      message: 'Purchase request created',
      data: newRequest
    });

  } catch (error) {
    res.status(500).json({ 
      error: 'Server error',
      details: error.message 
    });
  }
};