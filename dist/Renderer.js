
class Renderer {
    constructor(){
        this.template = Handlebars.compile($("#recipe-template").html())
        this.filters =  Handlebars.compile($("#allergies-template").html())
        
    }
    render(data){
        console.log(data);
        $(".recipe-grid").empty()
        $(".recipe-grid").append(this.template({
            filteredResults: data,
            totalRecipes: data.length
          }));    }
    renderAlergies(allergies) {
        $(".allergies-container").empty()
        $(".allergies-container").append(this.filters({allergies}))

    }
}