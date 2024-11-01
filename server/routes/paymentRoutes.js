const express = require('express');
const { confirmPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/confirm-payment', confirmPayment);
module.exports = router;
