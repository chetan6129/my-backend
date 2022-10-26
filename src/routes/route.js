const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
//question 6

router.get("/randombook",BookController.randombooks)
//question 5
router.get("/getxinrbooks",BookController.getxinrkbooks)
//question 4
router.post("/getparticular",BookController.getparticularbooks)
//question 3
router.post("/getbookinyear",BookController.bookbyyear)
// question 2
router.post("/createBook", BookController.createBook  )
//question 1
router.get("/getBooksData", BookController.getBooksData)

module.exports = router;