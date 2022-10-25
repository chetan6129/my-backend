const UserModel= require("../models/userModel")

const createnewbook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getnewbook= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createnewbook= createnewbook
module.exports.getnewbook= getnewbook