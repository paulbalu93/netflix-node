const express = require('express')
const path = require("path")
const { writeDB, readDB } = require('../../utils')
const {readJSON,writeJSON} = require("fs-extra")
const router = express.Router()
const uniqid = require('uniqid')
const filmsPath = path.join(__dirname,'films.json')

router.route('/').get( async (req,res,next)=>

{
try {

    let films = await readDB(filmsPath)
    res.send(films)
    
} catch (error) {
    console.log(error)
}

})

router.route('/').post (async (req,res,next) =>
{
    try {
        const films = await readDB(filmsPath);
        const newFilm = {...req.body, id:uniqid()}
    
        films.push(newFilm)
        await writeDB(filmsPath, newFilm)
        res.send(newFilm)
        


        
    } catch (error) {
        console.log(error)
    }
})



module.exports = router; 