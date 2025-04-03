const Medicine = require('../models/Medicine');

exports.getAllMedicines = async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
};

exports.getExpiringMedicines = async (req, res) => {
    const today = new Date();
    const threshold = new Date();
    threshold.setDate(today.getDate() + 30);
    const expiringMedicines = await Medicine.find({ expiry_date: { $lte: threshold } });
    res.json(expiringMedicines);
};

exports.addMedicine = async (req, res) => {
    const { name, medicine_id, expiry_date } = req.body;
    const newMedicine = new Medicine({ name, medicine_id, expiry_date });
    await newMedicine.save();
    res.json({ message: 'Medicine added successfully' });
};