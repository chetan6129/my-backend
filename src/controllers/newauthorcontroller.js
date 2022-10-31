const newAuthorModel= require("../models/newauthormodel.js")

const newcreateAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.newcreateAuthor= newcreateAuthor