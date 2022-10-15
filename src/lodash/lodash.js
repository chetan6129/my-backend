const ldash=require('lodash')
let y=function(){
    const month=['jan','feb','march','apr','may','june','july','aug','sep','oct','nub','dec']
    console.log(ldash.chunk(month,4))
    const odd = [21,3,5,7,9,11,13,15,17,18]
    console.log(ldash.tail(odd))

    
    console.log(ldash.union([1,2,3,4],[10,20,30],[9,6,14,1]))


    const ver = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(ldash.fromPairs(ver))


    return "done"
}


 module.exports.ye=y