const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const cardschema = new mongoose.Schema({
    cardNumber: {
        type: String,
        trim: true

    }, cardType: {
        type: String,
        trim: true,
        enum: ["REGULAR", "SPECIAL"]

    }, customerName: {
        type: String,
        trim: true
    },
    status:
    {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default:"ACTIVE",
        trim: true
    }, vision:
    {
        type: String,
         trim: true

    }, customerID: {
        type: ObjectId,
        ref: "customer"
    }




}, { timestamps: true })

module.exports = mongoose.model('card', cardschema)













//     cardNumber string Auto_increment e.g: C001
// cardType String[REGULAR / SPECIAL]
// customerName string
// status string[ACTIVE / INACTIVE] Default: ACTIVE
// vision string
// customerID string Reference from customer
// table