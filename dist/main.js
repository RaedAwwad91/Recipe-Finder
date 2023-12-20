const apiManager = new APIManager()
const renderer = new Renderer()


function getResults(){
    const ingredient = $("#recipe-search").val()
    apiManager.loadData(ingredient)
    .then(filteredRecipes => renderer.render(filteredRecipes))
}