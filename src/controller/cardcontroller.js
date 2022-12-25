const cardmodel = require("../models/cardmodel.js")


const { isValidObjectId, isValidCardNumber, isValidString } = require("../vaildator/vaild.js")

const createcard = async function (req, res) {
    try {
        let data = req.body
      
        if(Object.keys(data).length==0){
            return res.status(400).send({status:false,msg:"provide data to create"})
        }
        if(!isValidCardNumber(data.cardNumber)) return res.status(400).send({status:true,msg:"provide valid card number"})
        let oldcart=await cardmodel.findOne({cardNumber:data.cardNumber,status:"ACTIVE"})
        if(oldcart)return res.status(400).send({status:false,msg:"this card no already exist"})
      

       if(data.cardType!=="REGULAR" && data.cardType!=="SPECIAL"){
        return res.status(400).send({status:false,msg:"provide valid cardType info between REGULAR & SPECIAL"})}
    
        if(!isValidString(data.customerName)) return res.status(400).send({status:false,msg:"provide valid customerName"})
        if(data.status){
        if(data.status!=="ACTIVE" && data.status!=="INACTIVE"){
            return res.status(400).send({status:false,msg:"provide valid status info"})}
                }
         if(!isValidObjectId(data.customerID)) return res.status(400).send({status:false,msg:"provide valid cutomerId"})
                
         
        let createcust = await cardmodel.create(data)
        return res.status(201).send(createcust)
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}



const getcard = async function (req, res) {
    try {
        let card = await cardmodel.find({status:"ACTIVE"}).populate('customerID')
        return res.status(200).send({status:true,data:card})}
        catch (error) {
            return res.status(500).send({ status: false, message: error.message })
        }
    }
module.exports.createcard = createcard
module.exports.getcard = getcard
