const mongoose = require('mongoose');

const netBankingSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true },
  customerId: { type: String, required: true },
  accountNumber: { type: String, required: true }
});

module.exports = mongoose.model('NetBanking', netBankingSchema);
