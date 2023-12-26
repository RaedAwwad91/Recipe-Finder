const apiManager = new APIManager();
const renderer = new Renderer();

//this line renders allergies checkboxes
renderer.renderAlergies(allergies);

//this line adds an event listener to the chekboxes available
$(".allergies-container").on(
  "click",
  "input[type='checkbox']",
  handleCheckboxClick
);

//this function triggers upon hitting the button Search Recipe
function getResults() {
  //this line grabs the valuefrom the search input field
  const ingredient = $("#recipe-search").val();
  if (!ingredient) alert("please insert Ingredient");
  //this line calls the load data method from the apimanager instance
  apiManager.loadData(ingredient).then((recipies) => {
    const filtered =
      Object.keys(checkedAllergy).length === 0
        ? recipies
        : recipies.filter(
            (recipe) =>
              !recipe.ingredients.some((recipeIngredient) =>
                checkedAllergy.content.includes(recipeIngredient.toLowerCase())
              )
          );

    renderer.render(filtered);
  });
}
