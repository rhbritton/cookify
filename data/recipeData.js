import IngredientData from './ingredientData'

var recipes = {
  '1': {
    title: 'BBQ Pork Mac & Cheese',
    ingredients: [
      {
        ingredient: '1',
        measurement: 'oz',
        amount: 10
      },
      {
        ingredient: '2',
        measurement: 'oz',
        amount: 20
      },
      {
        ingredient: '3',
        measurement: 'oz',
        amount: 4
      },
      {
        ingredient: '4',
        measurement: 'oz',
        amount: 6
      },
      {
        ingredient: '5',
        measurement: 'oz',
        amount: 6
      }
    ]
  },
  '2': {
    title: 'Chili'
  },
  '3': {
    title: 'German Potato Soup'
  },
  '4': {
    title: 'Salmon with Tomato & Lemon'
  },
  '5': {
    title: 'Sausage & Peppers'
  },
  '6': {
    title: 'Southwestern Quesadilla'
  }
}

var sortedRecipes = []
Object.keys(recipes).forEach(function(key) {
  recipes[key].id = key;
  sortedRecipes.push(recipes[key])
})

sortedRecipes.sort(function(a, b) {
  if (a.title.toLowerCase() > b.title.toLowerCase())
    return 1;
  else
    return -1;
})

const RecipeData = {
  recipes: recipes,
  sortedRecipes: sortedRecipes
}

export default RecipeData;