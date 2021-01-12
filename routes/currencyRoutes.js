const express = require('express');
const router = express.Router();

const currencyControllers = require('../controllers/currencyController');

router.route('/').get(currencyControllers.getAllCurrency);

module.exports = router;
