const fs = require('fs');
const Currency = require('./models/currencyModel');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const url = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(url, () => {
  console.log('Database is connecting');
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/currency.json`));

async function createCurrencies() {
  await Currency.create(tours);
}

createCurrencies();
