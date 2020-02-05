import IngredientData from './ingredientData'

var ingredients = {
  '1': {
    name: 'Pork Roast'
  },
  '2': {
    name: 'Elbow Macaroni'
  },
  '3': {
    name: 'Dried Jalepeno Flakes'
  },
  '4': {
    name: 'BBQ Sauce'
  },
  '5': {
    name: 'Cheese'
  }
}

Object.keys(ingredients).forEach(function(key) {
  ingredients[key].id = key;
})

export default ingredients;