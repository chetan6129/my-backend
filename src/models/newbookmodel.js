const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    publishe_id:{
        type:ObjectId,
        ref:"newpublicers"},
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Authors"
    }, 
    price: Number,
    ratings: Number,
    ishardcover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBooks', bookSchema)