

const mongoose = require("mongoose")


const crypto = new mongoose.Schema({

    symbol: {
        type: String,
        unique: true,

        trim: true
    },
    marketCapUsd: {
        type: String,

    },
    priceUsd: {
        type: String,

    }, name: {
        type: String,
        unique: true,

        trim: true
    },


})

module.exports = mongoose.model("cry", crypto)