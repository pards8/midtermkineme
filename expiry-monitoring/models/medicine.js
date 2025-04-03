const mongoose = require('mongoose');
const medicineSchema = new mongoose.Schema({
    name: String,
    medicine_id: String,
    expiry_date: Date,
});
module.exports = mongoose.model('Medicine', medicineSchema);
