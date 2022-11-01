




const basicCode= async function(req, res) {
    res.send({ msg: "This is coming from controller (handler)"})
    }

const check2=async function(req,res){
    res.send ({msg:"test is done"})
}






module.exports.basicCode= basicCode
module.exports.check2=check2