const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
     bookName: { type: String,
        unique: true,
        required: true},
  
    authorName:String,
    totalPages:String,
    year: {type: String,
    unique: true,
    required: true},
    
    tags: [String],
    stockavailable:Boolean,
     
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
