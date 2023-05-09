const router = require('express').Router()
const orderModel = require('../models/orderModel')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, orderModel.createOrder)

router.get('/:id', authMiddleware, orderModel.getOrder)

module.exports = router