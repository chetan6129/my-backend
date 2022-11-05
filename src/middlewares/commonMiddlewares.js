const { isValidObjectId } = require("mongoose")


const myMiddleware = function(req, res, next){
    req.month = "November"
    console.log('I am inside a middleware!')
    next()
}
//ans
const checkpoint=function(req,res,next){
    let check= req.headers["isfreeappuser"]
    if(!check){
         return res.send("error")
    
    }else{
        next()
    }
}

const vId=function(req,res,next){
     const data=req.body
     const uid=data.userId
     const pid=data.productId
     const uidisvaild=isValidObjectId(uid)
     const pidisvaild=isValidObjectId(pid)
     if(!uidisvaild && !pidisvaild){
       return res.send("check your id's")
     }else{
        next()
     }
}


module.exports.myMiddleware = myMiddleware
module.exports.vId=vId

module.exports.checkpoint=checkpoint
