const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const check1=require("../controllers/userController")












router.get("/basicRoute", UserController.basicCode)

router.get("/check",check1.check2)






module.exports = router;