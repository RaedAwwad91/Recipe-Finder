const express = require('express')
const {faker} = require('@faker-js/faker')
const app = express()
const axios = require('axios')
const path = require('path')
app.use(express.static(path.join(__dirname ,'dist')))
app.use(express.static(path.join(__dirname ,'node_modules')))
app.use(express.json())





app.get('/recipe/:ingredientName' , function(req ,res){
    const ingredient = req.params.ingredientName
    try {
        axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`)
        .then(({data}) => {
            const results = data.results
            const filteredResults = results.map(recipe => {
                return {
                    idMeal : recipe.idMeal,
                    ingredients : recipe.ingredients,
                    title : recipe.title,
                    thumbnail : recipe.thumbnail ,
                    href : recipe.href,
                }
            })
            res.status(200).send(filteredResults)
    
        })
        
    } catch (error) {
        res.status(400).json({error})
    }
})

const port = 3000
app.listen(port , function(){
    console.log(`Server is Running at ${port}`)
})