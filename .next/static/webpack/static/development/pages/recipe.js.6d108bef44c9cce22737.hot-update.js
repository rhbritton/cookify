webpackHotUpdate("static\\development\\pages\\recipe.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_RecipeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/RecipeData */ "./static/RecipeData.js");
/* harmony import */ var _static_IngredientData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/IngredientData */ "./static/IngredientData.js");
/* harmony import */ var _components_BaseContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BaseContainer */ "./components/BaseContainer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\Ryan\\Documents\\projects\\cookify\\pages\\recipe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Ingredient = function Ingredient(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.ingredient.title);
};

function Recipe() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var title = _static_RecipeData__WEBPACK_IMPORTED_MODULE_3__["default"].recipes[router.query.id].title;
  var ingredients = _static_RecipeData__WEBPACK_IMPORTED_MODULE_3__["default"].recipes[router.query.id].ingredients;
  ingredients.forEach(function (ingredient_id, i) {
    ingredients[i].ingredient = _static_IngredientData__WEBPACK_IMPORTED_MODULE_4__["default"][ingredient_id];
  });
  return __jsx(_components_BaseContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Ingredients:"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, ingredients.map(function (ingredient) {
    return __jsx(Ingredient, {
      ingredient: ingredient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  })), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Next"));
}

/***/ }),

/***/ "./static/IngredientData.js":
/*!**********************************!*\
  !*** ./static/IngredientData.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientData */ "./static/ingredientData.js");


var ingredients = {
  '1': {
    title: 'Pork Roast'
  },
  '2': {
    title: 'Elbow Macaroni'
  },
  '3': {
    title: 'Dried Jalepeno Flakes'
  },
  '4': {
    title: 'BBQ Sauce'
  },
  '5': {
    title: 'Cheese'
  }
};

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(ingredients).forEach(function (key) {
  ingredients[key].id = key;
});

/* harmony default export */ __webpack_exports__["default"] = (ingredients);

/***/ }),

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
    id: '1',
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
};
var sortedRecipes = [];

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(recipes).forEach(function (key) {
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

/***/ "./static/ingredientData.js":
/*!**********************************!*\
  !*** ./static/ingredientData.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ingredientData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredientData */ "./static/ingredientData.js");


var ingredients = {
  '1': {
    title: 'Pork Roast'
  },
  '2': {
    title: 'Elbow Macaroni'
  },
  '3': {
    title: 'Dried Jalepeno Flakes'
  },
  '4': {
    title: 'BBQ Sauce'
  },
  '5': {
    title: 'Cheese'
  }
};

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(ingredients).forEach(function (key) {
  ingredients[key].id = key;
});

/* harmony default export */ __webpack_exports__["default"] = (ingredients);

/***/ })

})
//# sourceMappingURL=recipe.js.6d108bef44c9cce22737.hot-update.js.map