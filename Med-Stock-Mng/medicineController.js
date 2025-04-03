// medicineController.js
const addMedicine = (req, res) => {
    // Check if req.body is undefined or not
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is required' });
    }
  
    const { medicine_id, name, quantity, price, expiry_date } = req.body;
  
    if (!medicine_id || !name || !quantity || !price || !expiry_date) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const newMedicine = {
      medicine_id,
      name,
      quantity,
      price,
      expiry_date
    };
  
    return res.status(201).json({ message: 'Medicine added successfully', medicine: newMedicine });
  };
  
  module.exports = {
    addMedicine
  };
  