webpackHotUpdate("static\\development\\pages\\recipe.js",{

/***/ "./pages/recipe.js":
/*!*************************!*\
  !*** ./pages/recipe.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeView; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_RecipeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/RecipeData */ "./data/RecipeData.js");
/* harmony import */ var _data_IngredientData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/IngredientData */ "./data/IngredientData.js");
/* harmony import */ var _components_BaseContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BaseContainer */ "./components/BaseContainer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");

var _jsxFileName = "C:\\Users\\Ryan\\Documents\\projects\\cookify\\pages\\recipe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var PrevStep = function PrevStep(props) {
  if (props.page) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/recipe?id=".concat(props.id, "&page=").concat(props.page),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Previous"));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }
};

var NextStep = function NextStep(props) {
  if (props.recipe && props.recipe.steps && props.page <= props.recipe.steps.length) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/recipe?id=".concat(props.id, "&page=").concat(props.page),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Next"));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
  }
};

var IngredientListed = function IngredientListed(props) {
  if (props.ingredient && props.ingredient.ingredient) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, props.ingredient.amount, " ", props.ingredient.measurement, " ", props.ingredient.ingredient.name);
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    });
  }
};

var StepsDisplay = function StepsDisplay(props) {
  console.log(props.page);

  if (props.page == 1) {
    return __jsx("div", {
      key: props.page,
      className: "ingredientsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Ingredients:"), __jsx("div", {
      className: "ingredients",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, props.ingredients.map(function (ingredient, i) {
      return __jsx(IngredientListed, {
        key: i,
        ingredient: ingredient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      });
    })));
  } else {
    return __jsx("div", {
      key: props.page,
      className: "stepsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Step:"), __jsx("div", {
      className: "step",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, props.ingredients.map(function (ingredient, i) {
      return __jsx(IngredientListed, {
        key: i,
        ingredient: ingredient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      });
    })));
  }
};

function RecipeView() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  if (!router.query.id) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
    status: 404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  });
  var page = router.query.page;
  if (!page) page = 1;
  page = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(page);
  var prev_page;
  if (page > 1) prev_page = page - 1;
  var recipe = _data_RecipeData__WEBPACK_IMPORTED_MODULE_5__["default"].recipes[router.query.id];
  var title = recipe.title;
  var ingredients = recipe.ingredients;
  ingredients && ingredients.forEach(function (ingredient, i) {
    ingredients[i].ingredient = _data_IngredientData__WEBPACK_IMPORTED_MODULE_6__["default"][ingredient.ingredient];
  });
  ingredients && ingredients.sort(function (a, b) {
    if (!a.ingredient) return -1;
    if (!b.ingredient) return 1;
    if (a.ingredient.name.toLowerCase() > b.ingredient.name.toLowerCase()) return 1;else return -1;
  });
  return __jsx(_components_BaseContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, title), __jsx(StepsDisplay, {
    ingredients: ingredients,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(PrevStep, {
    id: router.query.id,
    page: prev_page,
    recipe: recipe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx(NextStep, {
    id: router.query.id,
    page: page + 1,
    recipe: recipe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=recipe.js.7953566549e0086e8fc1.hot-update.js.map