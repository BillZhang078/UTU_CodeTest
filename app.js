const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const currencyRouter = require('./routes/currencyRoutes');

app.use(express.json());
app.use(morgan('dev'));

//Routes
console.log('there');
app.use('/api/v1/currencies', currencyRouter);

app.use('*', (req, res, next) => {
  const error = new Error(`Can't find the ${req.originalUrl} one this server`);
  error.status = 'fail';
  error.statusCode = 400;
  next(error);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
module.exports = app;
