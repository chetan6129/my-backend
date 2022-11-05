const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {type:ObjectId,ref:"userdoucemnt"},
    productId: {type:ObjectId,ref:"productdocument"},
    amount: Number,
    isFreeAppUser:{
        type:Boolean
    },
    date:String

    

}, );

module.exports = mongoose.model('orderdoucment', orderSchema)
