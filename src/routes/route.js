const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//
const newauthorController= require("../controllers/newauthorcontroller.js")
const newbook=require("../controllers/newbookcontrolller.js");
const publicer=require("../controllers/newpublishController.js")
const { newcpublicermodel1 } = require('../controllers/newpublishController');
const neww=require("../controllers/newbookcontrolller.js");
//
const ne=require("../controllers/newbookcontrolller.js");

router.get("/test-m8", function (req, res) {
    res.send("My first ever api!")
})
//assaigment
router.post("/newcreateAuthor", newauthorController.newcreateAuthor  )
router.post("/newcreatbook",newbook.newcreateBook)
router.post("/nwepublisher",publicer.newcpublicermodel1)
router.get("/api",neww.getBooksData)
//
router.put("/testnk",ne.testk)



module.exports = router;