const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
app.use(express.static(path.join(__dirname ,'dist')))
app.use(express.static(path.join(__dirname ,'node_modules')))
app.use(express.json())



//ToDo
//all parameters should be optional , except ingredients
//filter sensetives
//consts config file
// query params
// generic function for sensitivity
//error handling
//dom traversal ,alert the first ingredient when clicking on recipe

app.get('/recipe/:ingredientName' , function(req ,res){
    const ingredient = req.params.ingredientName
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
        res.send(filteredResults)

    })
    
})

const port = 3000
app.listen(port , function(){
    console.log(`Server is Running at ${port}`)
})