
////////////////////////////////////////////////////////////////////////////////
const user = require("../models/userModel")
const jwt = require("jsonwebtoken")



// -  1 Write a **POST api /users** to register a user from the user details in request body.//

const creatuser = async function (req, res) {

    let data = req.body



    let savedData = await user.create(data)
    res.send({ msg: savedData })
}

//==================================================================================================//



// -2 Write a POST api to login a user that takes user details like email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it both in response body.




const login = async function (req, res) {

    let userName = req.body.emailId
    let password = req.body.password


    try {


        if( userName || password){

            let USER =  await user.findOne({ emailId: userName, password: password  })
            
            if(USER){
                
                let payload = {_id : USER._id , mobile : USER.mobile}
                let token = await jwt.sign(payload, "waah")
                res.header("x-auth-token" , token)

                res.status(200).send({status: true})    

            }else{
                res.status(301).send({status: false , msg : "invalid userName or passward"})
                 }
                               
        }else{
            res.status(400).send({status: false , msg : "Request body must contant userName as well passward"})
             }
    }catch(error){
        res.status(500).send({status: false , msg : error.message})
                }
}

//=================================================================================================//

// /-3 Write a GET api to fetch user details. Pass the userId as path param in the url. Check that request must contain x-auth-token header. If absent, return a suitable error.
// If present, check that the token is valid.



const getUserData = async function (req, res) {


    try{

               let USER = await user.findOne({_id:req.params.userId})
                 
                if(USER){
                    res.status(200).send({status:true , data : USER})

                }else{
                    res.status(404).send({ status: false, msg: "no such user" })
                     }    


                     

   
        }catch(error){
            res.status(800).send({status: false , msg : error.message}) 
            
                 }
}    



//4 Write a PUT api to update user details. Pass the userId as path param in the url and update the attributes received in the reauest body. Check that request must contain x-auth-token header. If absent, return a suitable error




const update = async function (req, res) {




    try{
         let USER = await user.findOne({_id:req.params.userId})
          
         if(USER){
            let Data = req.body
        
                      let firstName =Data.firstName
                            let newName = await user.updateOne({_id:req.params.userId},
                                {$set: { firstName: firstName }
                                                                           })
        
        
        
        
                    let Update = await user.findOne({_id:req.params.userId})
                    res.status(150).send({status : "successfully Updated" , msg : Update})
        
        

         }else{
             res.status(565).send({ status: false, msg: "no such user" })
              }    

 
}catch(error){
     res.status(600).send({status: false , msg : error.message}) 
     
          }
}    
 
// //========================================================================================//
// 5  Write a DELETE api that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain x-auth-token header. If absent, return a suitable error.that request must contain **x-auth-token** header. If absent, return a suitable error.



 const DeleteData = async function (req, res) {

    try{
         let USER = await user.findOne({_id:req.params.userId})
          
         if(USER){



            let isDeleted = req.headers["isdeleted"]

            if (isDeleted === "true") {
                let DELETE = await user.updateOne({_id:req.params.userId},
                  {$set: { isDeleted: true }
                })
       
                let UpdateData = await user.find({_id:req.params.userId})
                res.status(616).send({status : "successfully Deleted" , msg:UpdateData})

            } else {
                res.send({msg : "user not deleted"})
            }
             





         }else{
             res.status(404).send({ status: false, msg: "no such user" })
              }    

 
}catch(error){
     res.status(500).send({status: false , msg : error.message}) 
     
          }


 }


module.exports.creatuser = creatuser
module.exports.login = login

module.exports.getUserData = getUserData

module.exports.update = update

module.exports.DeleteData = DeleteData
