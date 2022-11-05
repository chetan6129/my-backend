const UserModel= require("../models/userModel")







//create
const createu= async function (req, res) {
    let data= req.body

    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}




module.exports.createu=createu