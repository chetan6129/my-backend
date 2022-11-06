const jwt=require('jsonwebtoken')
const {isValidObjectId}=require('mongoose')






const authenticate = function(req, res, next) {
    let token = req.headers["x-auth-token"]
  
    if (!token) {
        res.send("not")
    }
     next()
     }
   
    



const authorise = function(req, res, next) {
    const userid=req.params.userId
    if(!userid){
        res.send("send th userid")
    }else if(!isValidObjectId(userid)){
        res.send("not vaild id")
    }
   
    next()
}
module.exports.authorise=authorise
module.exports.authenticate=authenticate