var recipesData = {
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
    ],
    steps: [
      {
        title: 'Roasting the Pork',
        sub_steps: [
          {
            title: 'Place the Pork Roast in Crock Pot (low for 8 hours or high for 3 hours)'
          },
          {
            title: 'Shred pork during any wait times'
          }
        ]
      },
      {
        title: 'Macaroni Time',
        sub_steps: [
          {
            title: 'Boil Water in Sauce Pan'
          },
          {
            title: 'Pour BBQ Sauce into a small bowl and microwave for 45 seconds on high'
          },
          {
            title: 'Add Macaroni to Boiling Water and let cook until Al Dente (~5 min)'
          }
        ]
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
Object.keys(recipesData).forEach(function(key) {
  recipesData[key].id = key;
  sortedRecipes.push(recipesData[key])
})

sortedRecipes.sort(function(a, b) {
  if (a.title.toLowerCase() > b.title.toLowerCase())
    return 1;
  else
    return -1;
})

const RecipeData = {
  recipes: recipesData,
  sortedRecipes: sortedRecipes
}

export default RecipeData;