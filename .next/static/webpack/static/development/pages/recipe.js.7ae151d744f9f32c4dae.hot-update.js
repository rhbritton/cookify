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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_RecipeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/RecipeData */ "./data/RecipeData.js");
/* harmony import */ var _data_IngredientData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/IngredientData */ "./data/IngredientData.js");
/* harmony import */ var _components_BaseContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BaseContainer */ "./components/BaseContainer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");


var _jsxFileName = "C:\\Users\\Ryan\\Documents\\projects\\cookify\\pages\\recipe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var PrevStepLinkStyle = {
  display: 'inline-block',
  marginRight: 50,
  fontSize: '1.5em',
  width: '30%'
};
var PrevStepLinksStyle = {
  paddingBottom: '0.5em',
  paddingTop: '0.5em',
  height: '1.5em',
  textAlign: 'center',
  bottom: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  backgroundColor: 'white'
};

var PrevStep = function PrevStep(props) {
  if (props.page) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/recipe?id=".concat(props.id, "&page=").concat(props.page),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("a", {
      style: PrevStepLinkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Previous"));
  } else {
    return __jsx("div", {
      style: PrevStepLinkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  }
};

var NextStep = function NextStep(props) {
  if (props.recipe && props.recipe.steps && props.page <= props.recipe.steps.length + 1) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/recipe?id=".concat(props.id, "&page=").concat(props.page),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      style: PrevStepLinkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Next"));
  } else {
    return __jsx("div", {
      style: PrevStepLinkStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
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
        lineNumber: 57
      },
      __self: this
    }, props.ingredient.amount, " ", props.ingredient.measurement, " ", props.ingredient.ingredient.name);
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  }
};

var StepsDisplay = function StepsDisplay(props) {
  if (props.page == 1) {
    return __jsx("div", {
      key: props.page,
      className: "ingredientsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Ingredients:"), __jsx("div", {
      className: "ingredients",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, props.ingredients.map(function (ingredient, i) {
      return __jsx(IngredientListed, {
        key: i,
        ingredient: ingredient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      });
    })));
  } else {
    var step_obj = {};
    var step = 0;
    var title = '';
    var sub_steps = [];

    if (props.page >= 2) {
      step = props.page - 2;
      step_obj = props.recipe.steps[step];
      title = step_obj.title;
      sub_steps = step_obj.sub_steps;
    }

    return __jsx("div", {
      key: props.page,
      className: "stepsContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Step (", title, "):"), __jsx("div", {
      className: "step",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, sub_steps.map(function (sub_step, i) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, sub_step.title);
    })));
  }
};

function RecipeView() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  if (!router.query.id) return __jsx(next_error__WEBPACK_IMPORTED_MODULE_3___default.a, {
    status: 404,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  });
  var page = router.query.page;
  if (!page) page = 1;
  page = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(page);
  var prev_page;
  if (page > 1) prev_page = page - 1;
  var recipe = _data_RecipeData__WEBPACK_IMPORTED_MODULE_6__["default"].recipes[router.query.id];
  var title = recipe.title;
  var ingredients = [];
  recipe.ingredients && recipe.ingredients.forEach(function (ingredient) {
    var ing = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, ingredient);

    ing.ingredient = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _data_IngredientData__WEBPACK_IMPORTED_MODULE_7__["default"][ingredient.ingredient]);
    ingredients.push(ing);
  });
  ingredients && ingredients.sort(function (a, b) {
    if (!a.ingredient) return -1;
    if (!b.ingredient) return 1;
    if (a.ingredient.name.toLowerCase() > b.ingredient.name.toLowerCase()) return 1;else return -1;
  });
  return __jsx(_components_BaseContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, title), __jsx(StepsDisplay, {
    recipe: recipe,
    ingredients: ingredients,
    page: page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("div", {
    style: PrevStepLinksStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(PrevStep, {
    id: router.query.id,
    page: prev_page,
    recipe: recipe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(NextStep, {
    id: router.query.id,
    page: page + 1,
    recipe: recipe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=recipe.js.7ae151d744f9f32c4dae.hot-update.js.map