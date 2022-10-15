const express = require('express');
const router = express.Router();///test-you
//importing a custom module

const xyz = require('../logger')
const X=require('../validator/formate.js')
const y=require('../util/helper')
const z=require('../lodash/lodash.js')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.welcomeFunction()) 
    console.log("The value of the constant is ",xyz.myUrl)
    console.log("hari",y.help())
    console.log("the",X.t())
    console.log("why",z.ye())
    
    
    
    
    //Trying to use an external package called underscore

    
    
    

    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

