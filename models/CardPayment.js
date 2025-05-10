const mongoose = require('mongoose');

const cardPaymentSchema = new mongoose.Schema({
    uniqueid: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true }
});

module.exports = mongoose.model('CardPayment', cardPaymentSchema);
