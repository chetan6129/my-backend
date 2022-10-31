const authorModel = require("../models/newauthormodel.js")
const newbookModel= require("../models/newbookmodel.js")

const newcreateBook= async function (req, res) {
    let {publishe_id,author_id}=req.body
  
    let x=author_id
    let y=x.toString()
    if (!author_id){
        res.send("author_id required")
    }
    if(!publishe_id){
        res.send("publicerid requiredd")
    }
    let a=publishe_id
    let b=a.publishe_id

    
    let book = req.body
    let bookCreated = await newbookModel.create(book)
    res.send({data: bookCreated})}


const getBooksData= async function (req, res) {
        let books = await newbookModel.find().populate('publishe_id').populate('author_id')
        res.send({data: books})}


const testk=async function(req,res){
    let bo=await newbookModel.find().populate('publishe_id').populate('author_id')
    let filtera=bo.filter(x=>(x.name=="my"))
     filtera.forEach(x=>x.ishardcover=true)
     res.send({data:filtera})
}
module.exports.newcreateBook= newcreateBook
module.exports.getBooksData=getBooksData
module.exports.testk=testk