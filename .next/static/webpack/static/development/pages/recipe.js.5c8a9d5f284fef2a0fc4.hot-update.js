webpackHotUpdate("static\\development\\pages\\recipe.js",{

/***/ "./static/RecipeData.js":
/*!******************************!*\
  !*** ./static/RecipeData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientData */ "./static/ingredientData.js");


var recipes = {
  '1': {
    title: 'BBQ Pork Mac & Cheese',
    ingredients: [{
      ingredient: '1',
      measurement: 'oz',
      amount: 10
    }, {
      ingredient: '2',
      measurement: 'oz',
      amount: 20
    }, {
      ingredient: '3',
      measurement: 'oz',
      amount: 4
    }, {
      ingredient: '4',
      measurement: 'oz',
      amount: 6
    }, {
      ingredient: '5',
      measurement: 'oz',
      amount: 6
    }]
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
};
var sortedRecipes = [];

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(recipes).forEach(function (key) {
  recipes.id = key;
  sortedRecipes.push(recipes[key]);
});

sortedRecipes.sort(function (a, b) {
  if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;else return -1;
});
console.log(recipes);
var RecipeData = {
  recipes: recipes,
  sortedRecipes: sortedRecipes
};
/* harmony default export */ __webpack_exports__["default"] = (RecipeData);

/***/ })

})
//# sourceMappingURL=recipe.js.5c8a9d5f284fef2a0fc4.hot-update.js.map