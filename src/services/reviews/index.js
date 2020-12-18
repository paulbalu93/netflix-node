const express = require('express')
const path = require("path")
const { writeDB, readDB } = require('../../utils')
const {readJSON,writeJSON} = require("fs-extra")
const router = express.Router()
const uniqid = require('uniqid')
const reviewsPath = path.join(__dirname,'reviews.json')

router.route('/').get( async (req,res,next)=>

{
try {

    let reviews = await readDB(reviewsPath)
    res.send(reviews)
    
} catch (error) {
    console.log(error)
}

})

router.route('/').post (async (req,res,next) =>
{
    try {
        const reviews = await readDB(reviewsPath);
        const newReview = {...req.body, id:uniqid()}
    
        reviews.push(newReview)
        await writeDB(reviewsPath, newReview)
        res.send(newReview)
        


        
    } catch (error) {
        console.log(error)
    }
})



module.exports = router; 