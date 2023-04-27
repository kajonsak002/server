const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
// const verifyJWT = require('../middleware/verifyJWT')



// const {customersData } = require ('../data/mockup')
// const Customer = require ('../models/Customer')
// Customer.insertMany(customersData)



router
  .route('/') //verifyJWT,
  .get(productController.getAllProducts)
  .post(productController.createNewProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct)

router.route('/:id').get(productController.getAllProducts)

module.exports = router
