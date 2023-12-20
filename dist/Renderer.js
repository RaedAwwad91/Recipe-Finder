class Renderer {
    constructor(){
        this.template = Handlebars.compile($("#recipe-template").html())
    }
    render(data){
        $(".recipe-grid").empty()
        $(".recipe-grid").append(this.template({filteredResults:data}))
    }
}