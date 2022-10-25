const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: String,
    year: String,
    
    category: String,
   

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array