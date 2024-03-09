const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/UsersController')
const ProductsController = require('./controllers/ProductsController')
const PaymentController = require('./controllers/PaymentController')

router.get('/users', UsersController.getUsers)
router.post('/users/auth', UsersController.authUser)
router.get('/products', ProductsController.getProducts)
router.post('/sale', ProductsController.postSales)
router.get('/payment', PaymentController.getPaymentMethod)

module.exports = router;