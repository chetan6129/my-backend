const express = require('express');
const router = express.Router()
const userController = require('../controller/cryptocontroller.js')

router.get('/getcoin', userController.getcoins)
module.exports=router