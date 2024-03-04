
const authMiddleware = require('../Middleware/AuthenticationMiddleware');
const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');
const User = require('./Model/User.js');

router.route.post('api/register', userController.registerUser);
router.route.post('api/login', userController.loginUser);
router.route.post('api/forgot-password', userController.forgotPassword);
router.route.post('api/reset-password', userController.resetPassword);
router.route.get('api/:id', authMiddleware, userController.getUserById);
router.route.put('api/:id', authMiddleware, userController.updateUser);
router.route.delete('api/:id', authMiddleware, userController.deleteUser);



module.exports = router;

