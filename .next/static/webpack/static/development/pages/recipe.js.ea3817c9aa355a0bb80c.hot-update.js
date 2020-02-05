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
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_RecipeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/RecipeData */ "./static/RecipeData.js");
/* harmony import */ var _static_IngredientData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/IngredientData */ "./static/IngredientData.js");
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
  }, props.ingredient.ingredient.name);
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
  var recipe = _static_RecipeData__WEBPACK_IMPORTED_MODULE_4__["default"].recipes[router.query.id];
  var title = recipe.title;
  var ingredients = recipe.ingredients;
  ingredients.forEach(function (ingredient, i) {
    ingredients[i].ingredient = _static_IngredientData__WEBPACK_IMPORTED_MODULE_5__["default"][ingredient.ingredient];
  });
  ingredients.sort(function (a, b) {
    if (a.ingredient.name.toLowerCase() > b.ingredient.name.toLowerCase()) return -1;else return 1;
  });
  console.log('ingredients', ingredients);
  return __jsx(_components_BaseContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Ingredients:"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, ingredients.map(function (ingredient) {
    return __jsx(Ingredient, {
      ingredient: ingredient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  })), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Next"));
}

/***/ })

})
//# sourceMappingURL=recipe.js.ea3817c9aa355a0bb80c.hot-update.js.map