const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uniqueid: { type: String, required: true },
    entries: [
        {
            fullName: { type: String, required: true },
            mobileNumber: { type: String, required: true },
            panNumber: { type: String, required: true },
            aadhaarNumber: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
