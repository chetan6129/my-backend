const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    address:String,
    age:String,
    
    balance: {
        type: String,
        default: 100
       
    },
   
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    isFreeAppUser:{type:String,
    default:false}

       
    
  
}, );

module.exports = mongoose.model('userdoucemnt', userSchema) 


