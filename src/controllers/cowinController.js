let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp



///////////////////////////////////////////////////////////////
/////////////////////////////////////1

let getany = async function (req, res) {
    try {
        let distikid = req.query.district
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${distikid}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}





///////////////////////////////////////////////////////////////
/////////////////////////////////////2

let whether = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
          let b=await axios(options)
        
          let data = b.data
          res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.whether=whether
module.exports.getany=getany
/////3
let getlondon = async function (req, res) {
    try {
        let city = "London"
        let appid = "59f1222eb37a6eb4ec6db6ff757e34a2"
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
          let b=await axios(options)
        
          let data = b.data.main.temp
          res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getlondon=getlondon



////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////4


let getsort = async function (req, res) {
    try {
        const arr=[]
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = "59f1222eb37a6eb4ec6db6ff757e34a2"
        for(i in city){

        
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${appid}`
        }
          let b=await axios(options)
    
          let data = b.data.main.temp
          arr.push({city:city[i],temp:data})}
          const arry=arr.sort((x,y)=>x.temp-y.temp)
          res.status(200).send({ msg: arry, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getsort=getsort
//////////////////////////////////////////////////
///////////////////////////////////////////////////5
let getmemeid = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getmemeid=getmemeid
/////////////////
//////6
let getmemeres= async function (req, res) {

    try {
        const {template_id,text0,text1,text3,username,password}=req.query
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&text3=${text3}&username=chewie12345&password=meme@123`
        }
        let result = await axios(options);
  
        let newdata = result.data
        res.status(200).send({ msg: newdata, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ msg: err.message })
    }
}
module.exports.getmemeres=getmemeres