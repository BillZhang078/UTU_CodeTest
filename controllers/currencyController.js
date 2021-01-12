const Currecy = require('../models/currencyModel');

exports.getAllCurrency = async (req, res) => {
  try {
    const currencies = await Currecy.find({}).sort({ marketCap: -1 });
    return res.status(200).json({
      status: 'success',
      data: {
        currencies,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};
