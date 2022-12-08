const express = require('express');
var bodyParser = require('body-parser');
const mongoose=require('mongoose')

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://chetan:7000724002@cluster0.8cp68gw.mongodb.net/blockchainchetan", {
    useNewUrlParser: true
},mongoose.set('strictQuery', false))
.then(() => console.log("MongoDb is connected"), err => console.log(err))
app.use(bodyParser.urlencoded({ extended: true }));

 app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
