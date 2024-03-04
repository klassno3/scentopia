const express = require('express');
const router = express.Router();
const productController = require('../Controller/ProductController');

//get all products
router.get('/', productController.getProducts);
//get product by id
router.get('/:productId', productController.getProductById);
//create new product
router.post('/', productController.createProduct);
//update product
router.put('/:productId', productController.updateProduct);
//delete product
router.delete('/:productId', productController.deleteProduct);

//get products by category
router.get('/category/:categoryId', productController.getProductsByCategory);
//get products by category and search
router.get('/category/:categoryId/search/:searchTerm', productController.getProductsByCategoryAndSearch);
//get products by search
router.get('/search/:searchTerm', productController.getProductsBySearch);

module.exports = router;


