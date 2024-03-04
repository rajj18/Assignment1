const express = require('express')
const router = express.Router()
const authRoute = require('./authRoute')
const userRoute = require('./userRoute')
const reviewRoute = require('./reviewRoute')
const restaurantRoute = require('./restaurantRoute')
const {authenticateToken, adminCheck, businessOwnerCheck, userCheck} = require('../middlewares/authmid')


router.use('/auth', authRoute)
router.use('/user',authenticateToken, userRoute)
router.use('/review',authenticateToken, reviewRoute)
router.use('/restaurant',authenticateToken, restaurantRoute)

module.exports = router