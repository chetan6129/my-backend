const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
//question 1
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const aurtor= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//question 2
const s=async function(req,res){
    let ta=await BookModel.findOne({author_name:"ravi Bhagat"})
    let c=ta.author_id
    let ma=await BookModel.find({author_id:c})
    res.send({msg:ma})
}
//question 3
const v=async function(req,res){

    let k=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}})
    let c=k.author_id
    let a=await BookModel.findOne({author_id:c})
    res.send({price:k,author_name:a.author_name})
}
//question 4
const y=async function(req,res){
    let data=await BookModel.find({price:{$gte:50,$lte:100}})
    let fe=data.map((x)=>x.author_id)
    let n=await BookModel.find({author_id:fe}).select({author_name:1,})
    res.send({msg:n})}
   



const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.aurtor=aurtor
module.exports.s=s
module.exports.v=v
module.exports.y=y

