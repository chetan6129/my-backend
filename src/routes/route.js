const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//1
router.post("/sign", userController.createUser  )
//2
router.post("/login", userController.loginUser)

//3
router.get("/login/:userId", userController.getUserData)

//4
router.put("/users/:userId", userController.updateUser)
//5
router.delete("/users/:userId", userController.no)

module.exports = router;