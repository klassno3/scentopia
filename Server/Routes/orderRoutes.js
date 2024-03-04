const express = require('express');
const orderController = require('../Controller/OrderController');

const router = express.Router();

//get all orders by user
router.get('/user/:userId', orderController.getOrdersByUserId);

//get all orders by user and status
router.get('/user/:userId/:status', orderController.getOrdersByUserIdAndStatus);

//get all orders
router.get('/', orderController.getAllOrders);

//get all orders by status
router.get('/:status', orderController.getAllOrdersByStatus);

//create a new order
router.post('/', orderController.createOrder);

//update order status
router.put('/:orderId', orderController.updateOrderStatus);

//delete order
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;

