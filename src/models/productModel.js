const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String, 
    category: String, 
  price: {type:String,
        require:true  },})


module.exports = mongoose.model('productdocument', productSchema) //users
