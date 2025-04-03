const mongoose = require('mongoose');

const pharmacyMachineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
pharmacyMachineSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const PharmacyMachine = mongoose.model('PharmacyMachine', pharmacyMachineSchema);

module.exports = PharmacyMachine;