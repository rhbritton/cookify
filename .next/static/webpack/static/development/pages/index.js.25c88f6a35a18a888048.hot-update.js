webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Recipes.js":
/*!*******************************!*\
  !*** ./components/Recipes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recipes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_RecipeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/RecipeData */ "./data/RecipeData.js");
var _jsxFileName = "C:\\Users\\Ryan\\Documents\\projects\\cookify\\components\\Recipes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var recipeContainer = {
  display: 'inline-block',
  margin: '0.25%',
  padding: '0.25%',
  width: '32%',
  height: '10em',
  border: '1px solid black',
  'border-radius': '0.25em'
};

var Recipe = function Recipe(props) {
  return __jsx("div", {
    style: recipeContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.recipe.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/recipe?id=".concat(props.recipe.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "View")));
};

function Recipes() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data_RecipeData__WEBPACK_IMPORTED_MODULE_2__["default"].sortedRecipes.map(function (recipe) {
    return __jsx(Recipe, {
      recipe: recipe,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }));
}
;

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

/***/ "./static/RecipeData.js":
false,

/***/ "./static/ingredientData.js":
false

})
//# sourceMappingURL=index.js.25c88f6a35a18a888048.hot-update.js.map