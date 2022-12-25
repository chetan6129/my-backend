const mongoose=require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const customerschema= new mongoose.Schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    mobileNumber:
    {
        type:String,
        trim:true
    },
    date:{type:String,
    trim:true},
    emailID:{
        type:String,
        trim:true
    },address:{
        type:String,
        trim:true
    },customerID:{
        type:String,
        trim:true
    },status:
    {
        type:String,
        enum:["ACTIVE","INACTIVE"],
        default:"ACTIVE",
        trim: true
    }

},{timestamps:true})

module.exports=mongoose.model('customer',customerschema)




