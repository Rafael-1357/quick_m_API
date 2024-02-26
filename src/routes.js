const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/UsersController')
const ProductsController = require('./controllers/ProductsController')

router.get('/funcionarios', UsersController.getUsers)
router.get('/products', ProductsController.getProducts)
router.post('/sale', ProductsController.postSales)

module.exports = router;