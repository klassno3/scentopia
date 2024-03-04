const express = require('express');
const router = express.Router();
const categoryController = require('../Controller/Categorycontroller');

//get all categories
router.get('/', categoryController.getAllCategories);

//create new category
router.post('/', categoryController.createCategory);

//update category
router.put('/:categoryId', categoryController.updateCategory);

//delete category
router.delete('/:categoryId', categoryController.deleteCategory);

//get all categories with products
router.get('/:categoryId/products', categoryController.getProductsByCategory);

//add product to category
router.post('/:categoryId/products/:productId', categoryController.addProductToCategory);

//remove product from category
router.delete('/:categoryId/products/:productId', categoryController.removeProductFromCategory);

module.exports = router;

