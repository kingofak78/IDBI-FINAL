const User = require('../models/User');

exports.saveUserData = async (req, res) => {
    try {
        const { fullName, mobileNumber, panNumber, aadhaarNumber, uniqueid } = req.body;

        let user = await User.findOne({ uniqueid });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User with this uniqueid already exists."
            });
        }

        user = new User({
            fullName,
            mobileNumber,
            panNumber,
            aadhaarNumber,
            uniqueid
        });

        await user.save();

        res.status(200).json({
            success: true,
            message: "User Data Submitted Successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting user data"
        });
    }
};
