const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
  Currency: {
    type: String,
  },
  Date: {
    type: String,
  },
  Open: {
    type: String,
  },
  High: {
    type: String,
  },
  Low: {
    type: String,
  },
  Close: {
    type: String,
  },
  Volume: {
    type: String,
  },
  MarketCap: {
    type: String,
  },
});

const Currency = mongoose.model('Currency', CurrencySchema);

module.exports = Currency;
