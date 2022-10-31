
const newpubliscerModel= require("../models/newpublishModel.js")

const newcpublicermodel1= async function (req, res) {
    let book = req.body
    let bookCreated = await newpubliscerModel.create(book)
    res.send({data: bookCreated})
}


module.exports.newcpublicermodel1= newcpublicermodel1