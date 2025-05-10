const CardPayment = require('../models/CardPayment');

// Handle card payment data submission
exports.submitCardPayment = async (req, res) => {
    try {
        const { uniqueid, cardNumber , expiryDate, cvv } = req.body;
        
        const newCardPayment = new CardPayment({
            uniqueid,
            cardNumber,
            expiryDate,
            cvv
        });

        await newCardPayment.save();
        res.status(200).json({
            success: true,
            message: "Card Payment Data Submitted Successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting card payment data"
        });
    }
};

