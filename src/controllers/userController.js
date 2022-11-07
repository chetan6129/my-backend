const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")
//1
const createUser = async function (req, res) {
    try{
  let data = req.body;
  let savedData = await userModel.create(data);
  
  res.status(201).send({ status:true,msg: savedData });
    }catch(eroor){
        res.status(501).send({status:false,message:eroor.message})
    }
};
//2
const loginUser = async function (req, res) {

    try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "not a user",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "lithium",
      organisation: "FunctionUp",
    },
    "functionup-lithium-very-very-secret-key"
  );
  res.status(201).setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
}
catch(error){
    res.status(501).send({status:false,message:error.message})
}
}
///3

const getUserData = async function (req, res) {
    try{
  let token = req.headers["x-Auth-token"];

  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

  console.log(token);
  

  let decodedToken = jwt.verify(token, "functionup-lithium-very-very-secret-key");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(201).send({ status: true, data: userDetails });
    } catch (error){
        res.status(501).send({status:true,message:error.message})
    }
}

//4

const updateUser = async function (req, res) {
    try{
 
  //let token = req.headers["x-Auth-token"];

 //if (!token) token = req.headers["x-auth-token"];

// if  (!token) return res.status(400).send({ status: false, msg: "bina token ke nhi hoga" });

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
   if(!user){
  
    return res.status(400).send("No such user exists");
  }

  let userData =  req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });
;}catch(error){
    res.status(501).send({status:false,message:error.message})
}
}

///5
const no=async function(req, res){
try{
  let token = req.headers["x-Auth-token"];

  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.status(400).send({ status: false, msg: "bina token ke nhi hoga" });
         const user=req.params.userId
         const del=await userModel.findById(user)
         del.isdeleted=true
         del.save()
     
     
         console.log(del)
         res.status(201).send({msg:del})

}catch(error){
    res.status(500).send({status:false,message:error.message})
}
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.no=no

const chetan=async function(req,res,next){
    try{
        let token = req.headers["x-Auth-token"];

        if (!token) token = req.headers["x-auth-token"];
      
        if (!token) return res.status(400).send({ status: false, msg: "bina token ke nhi hoga" });


    }
    catch(error){
        res.send(500).send({status:false,message:error.message})
    }
    next()
}
module.exports.chetan=chetan
