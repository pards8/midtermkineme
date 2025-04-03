const Medicine = require('../models/Medicine');

exports.getExpiringMedicines = async (req, res) => {
  try {
    const { medicine_id, expiry_date } = req.query;
    let query = {};
    
    if (medicine_id) query.medicine_id = medicine_id;
    if (expiry_date) query.expiry_date = { $lte: new Date(expiry_date) };
    
    const medicines = await Medicine.find(query).sort({ expiry_date: 1 });
    
    res.json({
      success: true,
      count: medicines.length,
      data: medicines
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};