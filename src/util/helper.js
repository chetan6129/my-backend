


const today=new Date()

const getbatchinfo={
    Batch:"lithium",
    week:"w3",
    day:"d6",
    topic:"nodejs Module system"

}
let getinfo=function(){
    console.log(today)
    console.log(getbatchinfo.Batch)
    console.log(getbatchinfo.week)
    console.log(getbatchinfo.day)
    console.log(getbatchinfo.topic)
    
}
module.exports.help=getinfo
