var IngredientData = {
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

Object.keys(IngredientData).forEach(function(key) {
  IngredientData[key].id = key;
})

export default IngredientData;