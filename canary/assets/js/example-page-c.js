/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@carbon/ibmdotcom-web-components/es/component-mixins/callout/callout.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@carbon/ibmdotcom-web-components/es/component-mixins/callout/callout.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _taggedTemplateLiteral2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\"));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\"));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\"));\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\"));\nvar _get2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/get */ \"./node_modules/@babel/runtime/helpers/esm/get.js\"));\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\"));\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\"));\nvar _lit = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\nvar _settings = _interopRequireDefault(__webpack_require__(/*! ../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings.js\"));\nvar _templateObject;\nfunction _callSuper(t, o, e) { return o = (0, _getPrototypeOf2[\"default\"])(o), (0, _possibleConstructorReturn2[\"default\"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2[\"default\"])(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**\n * @license\n *\n * Copyright IBM Corp. 2020, 2023\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar prefix = _settings[\"default\"].prefix;\n\n/**\n * Callout.\n *\n * @mixin c4d-callout\n */\nvar C4DCalloutMixin = function C4DCalloutMixin(base) {\n  var CalloutMixin = /*#__PURE__*/function (_base) {\n    function CalloutMixin() {\n      (0, _classCallCheck2[\"default\"])(this, CalloutMixin);\n      return _callSuper(this, CalloutMixin, arguments);\n    }\n    (0, _inherits2[\"default\"])(CalloutMixin, _base);\n    return (0, _createClass2[\"default\"])(CalloutMixin, [{\n      key: \"render\",\n      value: function render() {\n        return (0, _lit.html)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2[\"default\"])([\"\\n        <div class=\\\"\", \"--callout__column\\\">\\n          <div class=\\\"\", \"--callout__content\\\">\\n            \", \"\\n          </div>\\n        </div>\\n      \"])), prefix, prefix,\n        /* Declaring this mixin as it extends \\`LitElement\\` seems to cause a TS error\n        // @ts-ignore */\n        (0, _get2[\"default\"])((0, _getPrototypeOf2[\"default\"])(CalloutMixin.prototype), \"render\", this).call(this));\n      }\n    }]);\n  }(base);\n  return CalloutMixin;\n};\nvar _default = exports[\"default\"] = C4DCalloutMixin;\n//# sourceMappingURL=callout.js.map\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./node_modules/@carbon/ibmdotcom-web-components/es/component-mixins/callout/callout.js?");

/***/ }),

/***/ "./node_modules/@carbon/ibmdotcom-web-components/es/component-mixins/callout/defs.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@carbon/ibmdotcom-web-components/es/component-mixins/callout/defs.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = exports.COLOR_SCHEME = void 0;\n/**\n * @license\n *\n * Copyright IBM Corp. 2020\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar COLOR_SCHEME;\n(function (COLOR_SCHEME) {\n  COLOR_SCHEME[\"REGULAR\"] = \"regular\";\n  COLOR_SCHEME[\"INVERSE\"] = \"inverse\";\n  COLOR_SCHEME[\"LAYER\"] = \"layer\";\n  COLOR_SCHEME[\"CYAN\"] = \"cyan\";\n  COLOR_SCHEME[\"PURPLE\"] = \"purple\";\n})(COLOR_SCHEME || (exports.COLOR_SCHEME = COLOR_SCHEME = {}));\nvar _default = exports[\"default\"] = COLOR_SCHEME;\n//# sourceMappingURL=defs.js.map\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./node_modules/@carbon/ibmdotcom-web-components/es/component-mixins/callout/defs.js?");

/***/ }),

/***/ "./node_modules/@carbon/ibmdotcom-web-components/es/components/card-link/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@carbon/ibmdotcom-web-components/es/components/card-link/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! ./card-link.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-link/card-link.js\");\n__webpack_require__(/*! ./card-link-heading.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-link/card-link-heading.js\");\n__webpack_require__(/*! ../card/card-footer.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card/card-footer.js\");\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./node_modules/@carbon/ibmdotcom-web-components/es/components/card-link/index.js?");

/***/ }),

/***/ "./src/pages/example-page-c/example-page-c.js":
/*!****************************************************!*\
  !*** ./src/pages/example-page-c/example-page-c.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ \"./src/pages/global.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_leadspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/leadspace */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/leadspace/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_leadspace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_leadspace__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_table_of_contents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/table-of-contents */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/table-of-contents/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_table_of_contents__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_table_of_contents__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_mixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-block-mixed */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-block-mixed/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_mixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_block_mixed__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-block-media */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-block-media/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_media__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_block_media__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_simple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-block-simple */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-block-simple/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_simple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_block_simple__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_segmented__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-block-segmented */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-block-segmented/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_segmented__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_block_segmented__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_callout_with_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/callout-with-media */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/callout-with-media/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_callout_with_media__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_callout_with_media__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card-link */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-link/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_card_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/image */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/image/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_horizontal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-block-horizontal */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-block-horizontal/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_horizontal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_block_horizontal__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_simple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group-simple */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group-simple/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_simple__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_group_simple__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-section */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_section__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_section__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_cards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-block-cards */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-block-cards/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_block_cards__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_block_cards__WEBPACK_IMPORTED_MODULE_13__);\n\n// All imports come from global.js. Add other specific components here if needed.\n\n// Leadspace\n\n\n// Table of Contents\n\n\n// Content Block variations\n\n\n\n\n\n// Callout with media\n\n\n// Card Link\n\n\n// Image\n\n\n// Content Group and Horizontal\n\n\n\n\n// Content Block Cards\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./src/pages/example-page-c/example-page-c.js?");

/***/ }),

/***/ "./src/pages/global.js":
/*!*****************************!*\
  !*** ./src/pages/global.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_dotcom_shell_dotcom_shell_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/dotcom-shell/dotcom-shell-container.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/dotcom-shell/dotcom-shell-container.js\");\n/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/scss/app.scss */ \"./src/assets/scss/app.scss\");\n/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/button-group */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/button-group/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_button_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_button_group__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_section_simple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card-section-simple */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-section-simple/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_section_simple__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_card_section_simple__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card-group */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-group/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_card_group__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_group__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group-cards */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group-cards/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_cards__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_group_cards__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_pictograms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group-pictograms */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group-pictograms/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_pictograms__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_group_pictograms__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-item */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-item/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_item__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_item__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_item_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-item-row */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-item-row/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_item_row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_content_item_row__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_cta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/cta */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/cta/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_cta__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_cta__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_feature_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/feature-card */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/feature-card/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_feature_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_feature_card__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_horizontal_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/horizontal-rule */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/horizontal-rule/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_horizontal_rule__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_horizontal_rule__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/image */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/image/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_link_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/link-list */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/link-list/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_link_list__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_link_list__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_link_with_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/link-with-icon */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/link-with-icon/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_link_with_icon__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_link_with_icon__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_pictogram_item__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/pictogram-item */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/pictogram-item/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_pictogram_item__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_pictogram_item__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_video_player__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/video-player */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/video-player/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_video_player__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_carbon_ibmdotcom_web_components_es_components_video_player__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n// Button Group\n\n\n// Card\n\n\n\n// Card Group\n\n\n// Content Group Cards\n\n\n\n\n// Content Item\n\n\n\n// CTA\n\n\n// Feature Card\n\n\n// Horizontal Rule\n\n\n// Image\n\n\n// Link List\n\n\n// Link with Icon\n\n\n// Pictogram Item\n\n\n// Vieo Player\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./src/pages/global.js?");

/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./src/assets/scss/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"example-page-c": 0,
/******/ 			"src_assets_scss_app_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkibmdotcom_web_components_test"] = self["webpackChunkibmdotcom_web_components_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_lib_axios_js","vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_babel_runtim-8e1ade","vendors-node_modules_carbon_ibmdotcom-services_es_services_KalturaPlayer_KalturaPlayer_js-nod-c8fb09","vendors-node_modules_carbon_ibmdotcom-web-components_es_component-mixins_cta_cta-v1_js-node_m-896bf6","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_card-group_index_js-node_m-c28ad0","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_card_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block_content-block_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-group-cards_index_-afea61","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-item-row_index_js--0f31bb","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-section_content-se-cafed6","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_cta_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_cta_text-cta_js-node_modul-20495f","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_expressive-modal_expressiv-d01c75","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_footer_footer-container_js-262df1","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_image_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_lightbox-media-viewer_ligh-e94709","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_link-list_index_js-node_mo-5842e0","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_locale-modal_locale-modal--a6a33c","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_markdown_markdown_js-node_-89719f","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_masthead_masthead-container_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_masthead_megamenu-top-nav--565704","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_pictogram-item_index_js-no-f0bdc4","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_video-player_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_globals_defs_js-node_modules_carbon_i-7a80a3","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_ibmdotcom-serv-de6849","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-905e5b","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-eab85e","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-5f493a","vendors-node_modules_isomorphic-dompurify_browser_js-node_modules_js-cookie_src_js_cookie_js--4e59fa","vendors-node_modules_process_browser_js-node_modules_lit_reactive-element_development_decorat-1b26fc","vendors-node_modules_redux-logger_dist_redux-logger_js-node_modules_redux-thunk_es_index_js-n-32af70","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block-media_index_-6f902f","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-section_content-se-67da0f","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block-segmented_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block-mixed_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_callout-with-media_index_j-61f487","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block-horizontal_i-a8eeca","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-group-simple_index-5adb4e","src_assets_scss_app_scss"], () => (__webpack_require__("./src/pages/example-page-c/example-page-c.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;