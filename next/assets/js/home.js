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

/***/ "./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section-copy.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section-copy.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_decorate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/decorate */ \"./node_modules/@babel/runtime/helpers/esm/decorate.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _internal_vendor_carbon_ibmdotcom_utilities_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings.js\");\n/* harmony import */ var _content_section_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ././content-section.css.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section.css.js\");\n/* harmony import */ var _globals_mixins_stable_selector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/mixins/stable-selector.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/globals/mixins/stable-selector.js\");\n/* harmony import */ var _markdown_markdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../markdown/markdown.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/markdown/markdown.js\");\n/* harmony import */ var _internal_vendor_carbon_web_components_globals_decorators_carbon_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/internal/vendor/@carbon/web-components/globals/decorators/carbon-element.js\");\n\nlet _ = t => t,\n  _t;\n/**\n * @license\n *\n * Copyright IBM Corp. 2020, 2023\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\n\n\n\nconst {\n  stablePrefix: c4dPrefix\n} = _internal_vendor_carbon_ibmdotcom_utilities_utilities_settings_settings_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n/**\n * Copy content in content section.\n *\n * @element c4d-content-section-copy\n */\nlet C4DContentSectionCopy = (0,_babel_runtime_helpers_esm_decorate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([(0,_internal_vendor_carbon_web_components_globals_decorators_carbon_element_js__WEBPACK_IMPORTED_MODULE_7__.carbonElement)(`${c4dPrefix}-content-section-copy`)], function (_initialize, _StableSelectorMixin) {\n  class C4DContentSectionCopy extends _StableSelectorMixin {\n    constructor(...args) {\n      super(...args);\n      _initialize(this);\n    }\n  }\n  return {\n    F: C4DContentSectionCopy,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({\n        reflect: true\n      })],\n      key: \"slot\",\n      value() {\n        return 'copy';\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)(_t || (_t = _` <slot></slot> `));\n      }\n    }, {\n      kind: \"method\",\n      key: \"firstUpdated\",\n      value: function firstUpdated() {\n        var _this$querySelector;\n        (_this$querySelector = this.querySelector('p')) === null || _this$querySelector === void 0 || _this$querySelector.setAttribute('style', 'all:unset;');\n        this.childNodes.forEach(node => {\n          if (node.nodeType === Node.TEXT_NODE) {\n            this.removeChild(node);\n          }\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"stableSelector\",\n      value: function () {\n        return `${c4dPrefix}--content-section-copy`;\n      }\n    }, {\n      kind: \"field\",\n      static: true,\n      key: \"styles\",\n      value() {\n        return _content_section_css_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n      }\n    }]\n  };\n}, (0,_globals_mixins_stable_selector_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\n/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (C4DContentSectionCopy);\n//# sourceMappingURL=content-section-copy.js.map\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section-copy.js?");

/***/ }),

/***/ "./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-section.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section.js\");\n/* harmony import */ var _content_section_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-section-heading.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section-heading.js\");\n/* harmony import */ var _content_section_copy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-section-copy.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/content-section-copy.js\");\n/**\n * @license\n *\n * Copyright IBM Corp. 2020, 2021\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */ /**\n     * @license\n     *\n     * Copyright IBM Corp. 2020, 2021\n     *\n     * This source code is licensed under the Apache-2.0 license found in the\n     * LICENSE file in the root directory of this source tree.\n     */\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/index.js?");

/***/ }),

/***/ "./src/pages/global.js":
/*!*****************************!*\
  !*** ./src/pages/global.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_dotcom_shell_dotcom_shell_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/dotcom-shell/dotcom-shell-container.js */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/dotcom-shell/dotcom-shell-container.js\");\n/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/scss/app.scss */ \"./src/assets/scss/app.scss\");\n/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_button_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/button-group */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/button-group/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_section_simple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card-section-simple */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-section-simple/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_card_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/card-group */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/card-group/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group-cards */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group-cards/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_group_pictograms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-group-pictograms */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-group-pictograms/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-item */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-item/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_item_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-item-row */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-item-row/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_cta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/cta */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/cta/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_feature_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/feature-card */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/feature-card/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_horizontal_rule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/horizontal-rule */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/horizontal-rule/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/image */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/image/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_link_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/link-list */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/link-list/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_link_with_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/link-with-icon */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/link-with-icon/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_pictogram_item__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/pictogram-item */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/pictogram-item/index.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_video_player__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/video-player */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/video-player/index.js\");\n\n\n\n// Button Group\n\n\n// Card\n\n\n\n// Card Group\n\n\n// Content Group Cards\n\n\n\n\n// Content Item\n\n\n\n// CTA\n\n\n// Feature Card\n\n\n// Horizontal Rule\n\n\n// Image\n\n\n// Link List\n\n\n// Link with Icon\n\n\n// Pictogram Item\n\n\n// Vieo Player\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./src/pages/global.js?");

/***/ }),

/***/ "./src/pages/home/home.js":
/*!********************************!*\
  !*** ./src/pages/home/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ \"./src/pages/global.js\");\n/* harmony import */ var _carbon_ibmdotcom_web_components_es_components_content_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/ibmdotcom-web-components/es/components/content-section */ \"./node_modules/@carbon/ibmdotcom-web-components/es/components/content-section/index.js\");\n\n\n\n//# sourceURL=webpack://ibmdotcom-web-components-test/./src/pages/home/home.js?");

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "./assets/js/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if ({"vendors-node_modules_axios_lib_axios_js":1,"vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-edba87":1,"vendors-node_modules_carbon_ibmdotcom-services_es_services_KalturaPlayer_KalturaPlayer_js-nod-c8fb09":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_component-mixins_cta_cta-v1_js-node_m-ce6ad6":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_card-group_index_js-node_m-c28ad0":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_card_index_js":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block_content-block_js":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-group-cards_index_-fe4c81":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-section_content-se-cafed6":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_cta_index_js":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_cta_text-cta_js-node_modul-20495f":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_expressive-modal_expressiv-d01c75":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_footer_footer-container_js-262df1":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_image_index_js":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_lightbox-media-viewer_ligh-e94709":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_link-list_index_js-node_mo-5842e0":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_locale-modal_locale-modal--a6a33c":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_markdown_markdown_js-node_-c67e73":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_masthead_megamenu-heading_-70cf3a":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_pictogram-item_index_js-no-927073":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_components_video-player_index_js":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_globals_defs_js-node_modules_carbon_i-7a80a3":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_ibmdotcom-serv-de6849":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-b7c0d7":1,"vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-32ba68":1,"vendors-node_modules_isomorphic-dompurify_browser_js":1,"vendors-node_modules_js-cookie_src_js_cookie_js-node_modules_lit-element_development_lit-elem-780cd7":1,"vendors-node_modules_process_browser_js-node_modules_lit_reactive-element_development_decorat-1b26fc":1,"vendors-node_modules_redux-logger_dist_redux-logger_js-node_modules_redux-thunk_es_index_js-n-32af70":1,"src_assets_scss_app_scss":1}[chunkId]) return "./assets/css/" + chunkId + ".css";
/******/ 			if (chunkId === "home") return "./assets/css/home.css";
/******/ 			// return url for filenames based on template
/******/ 			return "./assets/css/" + chunkId + ".css";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ibmdotcom-web-components-test:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
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
/******/ 			"home": 0,
/******/ 			"src_assets_scss_app_scss": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("src_assets_scss_app_scss" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_lib_axios_js","vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-edba87","vendors-node_modules_carbon_ibmdotcom-services_es_services_KalturaPlayer_KalturaPlayer_js-nod-c8fb09","vendors-node_modules_carbon_ibmdotcom-web-components_es_component-mixins_cta_cta-v1_js-node_m-ce6ad6","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_card-group_index_js-node_m-c28ad0","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_card_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-block_content-block_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-group-cards_index_-fe4c81","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_content-section_content-se-cafed6","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_cta_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_cta_text-cta_js-node_modul-20495f","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_expressive-modal_expressiv-d01c75","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_footer_footer-container_js-262df1","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_image_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_lightbox-media-viewer_ligh-e94709","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_link-list_index_js-node_mo-5842e0","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_locale-modal_locale-modal--a6a33c","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_markdown_markdown_js-node_-c67e73","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_masthead_megamenu-heading_-70cf3a","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_pictogram-item_index_js-no-927073","vendors-node_modules_carbon_ibmdotcom-web-components_es_components_video-player_index_js","vendors-node_modules_carbon_ibmdotcom-web-components_es_globals_defs_js-node_modules_carbon_i-7a80a3","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_ibmdotcom-serv-de6849","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-b7c0d7","vendors-node_modules_carbon_ibmdotcom-web-components_es_internal_vendor_carbon_web-components-32ba68","vendors-node_modules_isomorphic-dompurify_browser_js","vendors-node_modules_js-cookie_src_js_cookie_js-node_modules_lit-element_development_lit-elem-780cd7","vendors-node_modules_process_browser_js-node_modules_lit_reactive-element_development_decorat-1b26fc","vendors-node_modules_redux-logger_dist_redux-logger_js-node_modules_redux-thunk_es_index_js-n-32af70","src_assets_scss_app_scss"], () => (__webpack_require__("./src/pages/home/home.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;