const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  medicine_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  }
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);