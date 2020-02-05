webpackHotUpdate("static\\development\\pages\\recipe.js",{

/***/ "./data/IngredientData.js":
/*!********************************!*\
  !*** ./data/IngredientData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientData */ "./data/ingredientData.js");


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
};

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(ingredients).forEach(function (key) {
  ingredients[key].id = key;
});

/* harmony default export */ __webpack_exports__["default"] = (ingredients);

/***/ }),

/***/ "./data/RecipeData.js":
/*!****************************!*\
  !*** ./data/RecipeData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientData */ "./data/ingredientData.js");


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
  recipes[key].id = key;
  sortedRecipes.push(recipes[key]);
});

sortedRecipes.sort(function (a, b) {
  if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;else return -1;
});
var RecipeData = {
  recipes: recipes,
  sortedRecipes: sortedRecipes
};
/* harmony default export */ __webpack_exports__["default"] = (RecipeData);

/***/ }),

/***/ "./data/ingredientData.js":
/*!********************************!*\
  !*** ./data/ingredientData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientData */ "./data/ingredientData.js");


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
};

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(ingredients).forEach(function (key) {
  ingredients[key].id = key;
});

/* harmony default export */ __webpack_exports__["default"] = (ingredients);

/***/ }),

/***/ "./pages/recipe.js":
/*!*************************!*\
  !*** ./pages/recipe.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recipe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_RecipeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/RecipeData */ "./data/RecipeData.js");
/* harmony import */ var _data_IngredientData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/IngredientData */ "./data/IngredientData.js");
/* harmony import */ var _components_BaseContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BaseContainer */ "./components/BaseContainer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\Ryan\\Documents\\projects\\cookify\\pages\\recipe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Ingredient = function Ingredient(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.ingredient.amount, " ", props.ingredient.measurement, " ", props.ingredient.ingredient.name);
};

function Recipe() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  if (!router.query.id) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
    status: 404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  });
  var recipe = _data_RecipeData__WEBPACK_IMPORTED_MODULE_4__["default"].recipes[router.query.id];
  var title = recipe.title;
  var ingredients = recipe.ingredients;
  ingredients.forEach(function (ingredient, i) {
    ingredients[i].ingredient = _data_IngredientData__WEBPACK_IMPORTED_MODULE_5__["default"][ingredient.ingredient];
  });
  ingredients.sort(function (a, b) {
    if (a.ingredient.name.toLowerCase() > b.ingredient.name.toLowerCase()) return 1;else return -1;
  });
  return __jsx(_components_BaseContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Ingredients:"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, ingredients.map(function (ingredient) {
    return __jsx(Ingredient, {
      ingredient: ingredient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    });
  })), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Next"));
}

/***/ }),

/***/ "./static/IngredientData.js":
false,

/***/ "./static/RecipeData.js":
false,

/***/ "./static/ingredientData.js":
false

})
//# sourceMappingURL=recipe.js.25c88f6a35a18a888048.hot-update.js.map