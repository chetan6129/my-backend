const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midile=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.creatuser)

router.post("/login", userController.login)


router.get("/users/:userId", userController.getUserData)
//router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId",midile.authenticate, userController.update)
router.delete('/users/:userId', userController.DeleteData)

module.exports = router;