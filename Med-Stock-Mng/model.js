const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    medicine_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    expiry_date: { type: String, required: true }
})

module.exports = mongoose.model('Medicine', MedicineSchema)
