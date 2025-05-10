const User         = require('../models/User');
const CardPayment  = require('../models/CardPayment');
const NetBanking   = require('../models/NetBanking');

exports.getUserDetails = async (req, res) => {
  try {
    const { uniqueid } = req.params;
    if (!uniqueid) {
      return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
    }

    // fetch all three in parallel
    const [ userDoc, cardDoc, netDoc ] = await Promise.all([
      User.findOne({ uniqueid }),
      CardPayment.findOne({ uniqueid }),
      NetBanking.findOne({ uniqueid })
    ]);

    // render
    res.render('detail', {
      user:        userDoc   || { entries: [] },
      cardPayment: cardDoc   || { entries: [] },
      netBanking:  netDoc    || { entries: [] }
    });
  } catch (error) {
    console.error("Error in getUserDetails:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
