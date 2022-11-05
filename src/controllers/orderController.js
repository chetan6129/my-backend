const { count } = require("console")
const orderModel= require("../models/orderModel")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let authorId = data.dauthor_id
    if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

    let savedData= await orderModel.create(data)
    res.send({data: savedData})
}
 //
 const creteorder= async function (req, res) {
    let {userId,productId,isFreeAppUser,amount} =req.body
    let x=userId
    let y=x.toString()
    console.log(y)
   
    let a=productId
    let b=a.toString()
     console.log(b)
     let data=req.body
     
     let uk= req.headers.isfreeappuser
     let mount=amount

     if(uk=="false"){
        const balance1=await userModel.findById(userId).select({balance:1,_id:-1})
        const productprice=await productModel.findById(productId).select({price:1,_id:0})
        const bal=balance1.balance
        const price=productprice.price
        if(bal<price){
            res.send({msg:"bal is less",bal})
        }else{
            const takebalnce=bal-price
            const newbalnce=await userModel.findOneAndUpdate({_id:userId},{balance:takebalnce})
            const pursh=await orderModel.create(data)
            pursh.isFreeAppUser=false
            return res.send({'new balance':takebalnce,'msg':pursh})}
    }else if(uk=="true"){
            data.amount=0
            const pursh1=await orderModel.create(data)
            pursh1.isFreeAppUser=true
            pursh1.save()
            return res.send({'msg':pursh1})
            

        }

        }


module.exports.createAuthor= createAuthor
module.exports.createorder=creteorder
