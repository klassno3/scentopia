const express = require('express');
const router = express.Router();
const paymentController = require('../Controller/PaymentController');

//get all payments
router.get('/', paymentController.getPayments);
//get payment by payment id
router.get('/:paymentId', paymentController.getPaymentById);
//create a payment
router.post('/', paymentController.createPayment);
//update a payment
router.put('/:paymentId', paymentController.updatePayment);
//delete a payment
router.delete('/:paymentId', paymentController.deletePayment);


module.exports = router;


