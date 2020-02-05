const recipes = {
  '1': {
    id: '1',
    title: 'BBQ Pork Mac & Cheese'
  },
  '2': {
    id: '2',
    title: 'Chili'
  },
  '3': {
    id: '3',
    title: 'German Potato Soup'
  },
  '4': {
    id: '4',
    title: 'Salmon with Tomato & Lemon'
  },
  '5': {
    id: '5',
    title: 'Sausage & Peppers'
  },
  '6': {
    id: '6',
    title: 'Southwestern Quesadilla'
  }
}

var sortedRecipes = []
Object.keys(recipes).forEach(function(key) {
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