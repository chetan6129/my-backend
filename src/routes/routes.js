const express = require('express')
const router=express.Router()
const createcustomer=require('../controller/customercontroller')
const card=require('../controller/cardcontroller')

///cutomer
router.post("/createcutomer",createcustomer.createcustomer)
router.delete('/deletecutomer/:customerId',createcustomer.deleteCustomer)
router.get('/getcutomer',createcustomer.getCustomer)



//card
router.post("/createcard",card.createcard)
router.get("/getcard",card.getcard)






module.exports = router