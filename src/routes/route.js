const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});
//problem 1 print get/movies
router.get('/get/movies', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let getmovies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   
    res.send(getmovies)
})


    //problem 2 GET /movies/:indexNumber
    router.get('/getmovies/:indexNumber', function(req, res){
        let getmovies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
        
     const index=req.params.indexNumber
    res.send( getmovies[index])
})
     

// promblem 3 handle edege case for path params
router.get('/getmovies/:index', function(req, res){
    let getmovies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   const index=req.params.index
   
   if(index>getmovies.length){
    res.send('please use vaild intex')
   }res.send(getmovies[index])})
   
//problem 4 
router.get('/get/films',function(req,res){
    const films=[ {
        id: 1,
        name: 'The Shini'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       res.send(films)
       
})

//problem 5

router.get('/films/:filmid',(req,res)=>{

    const films=[ {
        id: 1,
        name: 'The Shini'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
    
    let filmid = req.params.filmid
    if (filmid>films.length){
        res.send('Please use a valid index')
    }
    else{
        res.send(films[filmid-1])
    }
})




module.exports = router;