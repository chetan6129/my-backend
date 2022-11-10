const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/bydis",CowinController.getany)
//2
router.get("/getwhether/no",CowinController.whether)
////3
router.get("/getlondon",CowinController.getlondon)
///4
router.get("/sort",CowinController.getsort)
//////////////
router.get("/memeid",CowinController.getmemeid)
////5
router.post("/new",CowinController.getmemeres)


module.exports = router;