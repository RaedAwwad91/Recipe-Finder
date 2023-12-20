class APIManager{
    constructor() {
        this.data = {}

    }
    loadData(ingredient){
       return $.get(`http://localhost:3000/recipe/${ingredient}`)
    }
}