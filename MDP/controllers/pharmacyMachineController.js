const PharmacyMachine = require('../models/pharmacyMachineModel');
const getPharmacyMachines = async (req, res) => {
  try {
    const { name } = req.query;
    
    let query = {};
    if (name) {
      query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    }

    const machines = await PharmacyMachine.find(query).select('name price stock -_id');
    
    res.status(200).json({
      success: true,
      count: machines.length,
      data: machines
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

module.exports = {
  getPharmacyMachines
};