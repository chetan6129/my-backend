const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")
const product=require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/////////////////
////////assaiment


router.post("/createUser", commonMW.checkpoint, UserController.createu)

router.post("/createproduct", productController.createpro)
router.post("/creteorder",commonMW.checkpoint,commonMW.vId,product.createorder)


module.exports = router;