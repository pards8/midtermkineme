const mongoose = require('mongoose')

const Schema = mongoose.Schema

const medicineSchema = new Schema({
    medicine_id: {
        type: String,
        required: true,
        unique: true // Ensure the medicine_id is unique
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    expiry_date: {
        type: Date,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Medicine', medicineSchema)
