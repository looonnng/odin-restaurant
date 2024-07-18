/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: #242729;
  color: #fff;
}

.wrapper {
  width: 80%;
  margin: 0 auto;
}

.col {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.header {
  padding: 1rem 0;
  background-color: #494f52;
}

.nav__list {
  gap: 1rem;
  justify-content: center;
}

.nav__btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #1a1216;
  color: #fff;
}

.nav__btn:hover {
  opacity: 0.75;
}

.home-wrapper {
  padding: 2rem;
}

.home__title {
  font-size: 4.5rem;
  margin-bottom: 1rem;
}

.home__text,
.home-image-wrapper {
  flex: 1;
}


.home__paragraph {
  line-height: 1.5;
}

.home-image-wrapper {
  height: 100%;
  flex-basis: 60%;
  text-align: right;
}

.home-image {
  max-height: 75vh;
}

.contact-wrapper {
  background-color: #494f52;
  gap: 2rem;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 0.25rem;
}

.nav__list,
.content__list {
  list-style: none;
}

.contact__about,
.contact__hour,
.contact__location {
  line-height: 2;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
}

.card {
  gap: 1rem;
}

.card__image {
  text-align: center;
}

.card__title {
  margin-bottom: 1rem;
}

.menu-wrapper {
  margin: 2rem 0;
  gap: 1rem;
}

.starters,
.main-course,
.drinks {
  gap: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,OAAO;AACT;;;AAGA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;;;EAGE,SAAS;AACX","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  background-color: #242729;\n  color: #fff;\n}\n\n.wrapper {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n.header {\n  padding: 1rem 0;\n  background-color: #494f52;\n}\n\n.nav__list {\n  gap: 1rem;\n  justify-content: center;\n}\n\n.nav__btn {\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  background-color: #1a1216;\n  color: #fff;\n}\n\n.nav__btn:hover {\n  opacity: 0.75;\n}\n\n.home-wrapper {\n  padding: 2rem;\n}\n\n.home__title {\n  font-size: 4.5rem;\n  margin-bottom: 1rem;\n}\n\n.home__text,\n.home-image-wrapper {\n  flex: 1;\n}\n\n\n.home__paragraph {\n  line-height: 1.5;\n}\n\n.home-image-wrapper {\n  height: 100%;\n  flex-basis: 60%;\n  text-align: right;\n}\n\n.home-image {\n  max-height: 75vh;\n}\n\n.contact-wrapper {\n  background-color: #494f52;\n  gap: 2rem;\n  padding: 2rem;\n  margin: 2rem auto;\n  border-radius: 0.25rem;\n}\n\n.nav__list,\n.content__list {\n  list-style: none;\n}\n\n.contact__about,\n.contact__hour,\n.contact__location {\n  line-height: 2;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  justify-items: center;\n}\n\n.card {\n  gap: 1rem;\n}\n\n.card__image {\n  text-align: center;\n}\n\n.card__title {\n  margin-bottom: 1rem;\n}\n\n.menu-wrapper {\n  margin: 2rem 0;\n  gap: 1rem;\n}\n\n.starters,\n.main-course,\n.drinks {\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)
/* harmony export */ });
const loadContactPage = () => {
  const contactMapWrapper = document.createElement('div');
  contactMapWrapper.classList.add('contact__map-wrapper');
  const contactMap = document.createElement('iframe');
  contactMap.classList.add('contact__map');
  contactMap.setAttribute(
    'src',
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14936.051737239643!2d-87.0710941!3d20.6283296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e43f0e2c54f3f%3A0xe3f597227e1aaa8f!2sAnimallandia%20Maya!5e0!3m2!1sen!2sus!4v1720733205630!5m2!1sen!2sus',
  );
  contactMap.style.width = '600px';
  contactMap.style.height = '450px';

  contactMapWrapper.appendChild(contactMap);

  const contactHour = document.createElement('div');
  contactHour.classList.add('contact__hour');

  const contactHourSubtitle = document.createElement('h2');
  contactHourSubtitle.classList.add('content__subtitle');
  contactHourSubtitle.textContent = 'Hours';

  const contactHourList = document.createElement('ul');
  contactHourList.classList.add('content__list');

  const hours = [
    'Monday - Thursday: 6:00 PM - 10:00 PM',
    'Friday - Saturday: 6:00 PM - 1:00 AM',
    'Sunday: 6:00 PM - 9:00 PM',
  ];

  hours.forEach((hour) => {
    const contactHourListItem = document.createElement('li');
    contactHourListItem.classList.add('content__list-item');
    contactHourListItem.textContent = hour;
    contactHourList.appendChild(contactHourListItem);
  });

  contactHour.append(contactHourSubtitle, contactHourList);

  const contactLocation = document.createElement('div');
  contactLocation.classList.add('contact__location');

  const contactLocationSubtitle = document.createElement('h2');
  contactLocationSubtitle.classList.add('content__subtitle');
  contactLocationSubtitle.textContent = 'Location';

  const contactLocationList = document.createElement('ul');
  contactLocationList.classList.add('content__list');

  const locations = [
    'Echo Chamber Eatery',
    '456 Serenity Street,',
    'City Center, Metropolis',
  ];

  locations.forEach((location) => {
    const contactLocationListItem = document.createElement('li');
    contactLocationListItem.classList.add('content__list-item');
    contactLocationListItem.textContent = location;
    contactLocationList.appendChild(contactLocationListItem);
  });

  contactLocation.append(contactLocationSubtitle, contactLocationList);

  const contactText = document.createElement('div');
  contactText.classList.add('col');
  contactText.append(contactHour, contactLocation);

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contact-wrapper', 'row');
  contactWrapper.append(contactMapWrapper, contactText);

  return contactWrapper;
};


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _images_food_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food.png */ "./src/images/food.png");




const createHomeTitle = (title) => {
  return (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createMyElement)('h1', ['home__title'], title);
};

const createHomeParagraph = (para) => {
  return (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createMyElement)('p', ['home__paragraph'], para);
};

const loadHomePage = () => {
  const homeText = document.createElement('div');
  homeText.classList.add('home__text');
  homeText.append(
    createHomeTitle('Echo Chamber'),
    createHomeParagraph(
      'a unique dining experience that blends the deep, hypnotic sounds of dub and minimalist techno with innovative cuisine.',
    ),
  );

  const homeImageWrapper = document.createElement('div');
  homeImageWrapper.classList.add('home-image-wrapper');
  homeImageWrapper.appendChild(
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createImage)(_images_food_png__WEBPACK_IMPORTED_MODULE_1__, 'Hero Image Placeholder', ['home-image']),
  );

  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper', 'row');
  homeWrapper.append(homeText, homeImageWrapper);

  return homeWrapper;
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   createMyElement: () => (/* binding */ createMyElement),
/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)
/* harmony export */ });
/* harmony import */ var _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/placeholder.png */ "./src/images/placeholder.png");


// Utility Function
const createMyElement = (type, classNames = [], text = '', attributes = {}) => {
  const element = document.createElement(type);

  element.classList.add(...classNames);

  if (text) element.textContent = text;

  Object.keys(attributes).forEach((attr) =>
    element.setAttribute(attr, attributes[attr]),
  );

  return element;
};

const createSubtitle = (subtitle) => {
  return createMyElement('h2', ['content__subtitle'], subtitle);
};

const createCardContainer = () => {
  return createMyElement('div', ['card-container']);
};

const createCardWrapper = () => {
  return createMyElement('div', ['card', 'wrapper', 'col']);
};

const createImage = (imageSource, altText, classNames = []) => {
  
  const imageElement = new Image();
  imageElement.src = imageSource;
  imageElement.alt = altText;
  imageElement.classList.add(...classNames);

  return imageElement;
};

const createCardTitle = (cardTitle) => {
  return createMyElement('h3', ['card__title'], cardTitle);
};

const createCardText = (cardText) => {
  return createMyElement('p', ['card__text'], cardText);
};

const createCardInfo = (cardTitles = [], cardTexts = []) => {
  const cardInfo = createMyElement('div', ['card__info']);

  cardTitles.forEach((title, index) => {
    cardInfo.appendChild(createCardTitle(title));
    cardInfo.appendChild(createCardText(cardTexts[index]));
  });

  return cardInfo;
};

const createCard = (
  cardTitles = [],
  cardTexts = [],
  imageSource = '',
  altText = '',
) => {
  const cardWrapper = createCardWrapper();
  const cardImageWrapper = createMyElement('div', ['card__image']);
  
  const cardInfo = createCardInfo(cardTitles, cardTexts);
  const cardImage = createImage(imageSource, altText);

  cardImageWrapper.appendChild(cardImage);
  cardWrapper.appendChild(cardImageWrapper);
  cardWrapper.appendChild(cardInfo);

  return cardWrapper;
};

const createSection = (
  sectionClassNames = [],
  sectionSubtitle,
  cardTitles = [],
  cardTexts = [],
  imageSources = [],
  altTexts = [],
) => {
  const section = createMyElement('div', [...sectionClassNames]);

  const sectionSub = createSubtitle(sectionSubtitle);

  const cardContainer = createCardContainer();

  cardTitles.forEach((title, index) => {
    cardContainer.appendChild(
      createCard(
        [title],
        [cardTexts[index]],
        imageSources[index],
        altTexts[index],
      ),
    );
  });

  section.appendChild(sectionSub);
  section.appendChild(cardContainer);

  return section;
};

const loadMenuPage = () => {
  const menuWrapper = createMyElement('div', ['menu-wrapper', 'col']);

  const starter = createSection(
    ['starters', 'col'],
    'Starter',
    ['Minimalist Miso Soup', 'Ambient Amuse-Bouche', 'Echoed Edamame'],
    [
      'A delicate miso broth with tofu, wakame seaweed, and spring onions.',
      'A trio of small bites, featuring seasonal ingredients that set the tone for your dining experience.',
      'Steamed edamame with a touch of sea salt and a hint of lime zest.',
    ],
    [_images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__, _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__, _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__],
    ['Placeholder image', 'Placeholder image', 'Placeholder image'],
  );

  const mainCourse = createSection(
    ['main-course', 'col'],
    'Main Course',
    ['Dubbed Duck Breast', 'Sonic Mushroom Risotto', 'Subdued Sea Bass'],
    [
      'Seared duck breast with a honey-soy glaze, served with sautéed bokchoy and jasmine rice.',
      'Creamy risotto with wild mushrooms, truffle oil, and Parmesan cheese.',
      'Pan-seared sea bass with a citrus beurre blanc, accompanied by asparagus spears and fingerling potatoes.',
    ],
    [_images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__, _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__, _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__],
    ['Placeholder image', 'Placeholder image', 'Placeholder image'],
  );

  const drinks = createSection(
    ['drinks', 'col'],
    'Drinks',
    ['Deep Dub Daiquiri', 'Minimalist Martini', 'Echo Espresso'],
    [
      'A classic daiquiri with a twist of fresh basil and lime.',
      'A clean, crisp martini with premium gin and a touch of dry vermouth, garnished with an olive.',
      'A rich, smooth espresso to complement your meal.',
    ],
    [_images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__, _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__, _images_placeholder_png__WEBPACK_IMPORTED_MODULE_0__],
    ['PlaceHolder image', 'Placeholder image', 'Placeholder image'],
  );

  menuWrapper.append(starter, mainCourse, drinks);

  return menuWrapper;
};


/***/ }),

/***/ "./src/images/food.png":
/*!*****************************!*\
  !*** ./src/images/food.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff820d802d34133aca97.png";

/***/ }),

/***/ "./src/images/placeholder.png":
/*!************************************!*\
  !*** ./src/images/placeholder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d18cd847817b7813c17a.png";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// Initial Page Load
const content = document.querySelector('#content');
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)());

const handleNavBtn = (event) => {
  if (event.target.textContent === 'Home')
    content.replaceChildren((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)());
  else if (event.target.textContent === 'Menu')
    content.replaceChildren((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)());
  else content.replaceChildren((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)());
};

// Attach listeners to each button
document.querySelectorAll('.nav__btn').forEach((button) => {
  button.addEventListener('click', handleNavBtn);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDQTtBQUNNO0FBQzFCOztBQUVyQjtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFZOztBQUVoQztBQUNBO0FBQ0EsNEJBQTRCLHNEQUFZO0FBQ3hDO0FBQ0EsNEJBQTRCLHNEQUFZO0FBQ3hDLCtCQUErQiw0REFBZTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNzI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLndyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0ZjUyO1xufVxuXG4ubmF2X19saXN0IHtcbiAgZ2FwOiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdl9fYnRuIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTEyMTY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2X19idG46aG92ZXIge1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4uaG9tZS13cmFwcGVyIHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmhvbWVfX3RpdGxlIHtcbiAgZm9udC1zaXplOiA0LjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5ob21lX190ZXh0LFxuLmhvbWUtaW1hZ2Utd3JhcHBlciB7XG4gIGZsZXg6IDE7XG59XG5cblxuLmhvbWVfX3BhcmFncmFwaCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5ob21lLWltYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtYmFzaXM6IDYwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ob21lLWltYWdlIHtcbiAgbWF4LWhlaWdodDogNzV2aDtcbn1cblxuLmNvbnRhY3Qtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTRmNTI7XG4gIGdhcDogMnJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5uYXZfX2xpc3QsXG4uY29udGVudF9fbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb250YWN0X19hYm91dCxcbi5jb250YWN0X19ob3VyLFxuLmNvbnRhY3RfX2xvY2F0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY2FyZF9faW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tZW51LXdyYXBwZXIge1xuICBtYXJnaW46IDJyZW0gMDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3RhcnRlcnMsXG4ubWFpbi1jb3Vyc2UsXG4uZHJpbmtzIHtcbiAgZ2FwOiAxcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsT0FBTztBQUNUOzs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjcyOTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0ZjUyO1xcbn1cXG5cXG4ubmF2X19saXN0IHtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2X19idG4ge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMTIxNjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2X19idG46aG92ZXIge1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLmhvbWUtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4uaG9tZV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA0LjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaG9tZV9fdGV4dCxcXG4uaG9tZS1pbWFnZS13cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcblxcbi5ob21lX19wYXJhZ3JhcGgge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmhvbWUtaW1hZ2Utd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWJhc2lzOiA2MCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmhvbWUtaW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogNzV2aDtcXG59XFxuXFxuLmNvbnRhY3Qtd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0ZjUyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuLm5hdl9fbGlzdCxcXG4uY29udGVudF9fbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29udGFjdF9fYWJvdXQsXFxuLmNvbnRhY3RfX2hvdXIsXFxuLmNvbnRhY3RfX2xvY2F0aW9uIHtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5jYXJkX19pbWFnZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkX190aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uc3RhcnRlcnMsXFxuLm1haW4tY291cnNlLFxcbi5kcmlua3Mge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBsb2FkQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3RNYXBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RNYXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX21hcC13cmFwcGVyJyk7XG4gIGNvbnN0IGNvbnRhY3RNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgY29udGFjdE1hcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19tYXAnKTtcbiAgY29udGFjdE1hcC5zZXRBdHRyaWJ1dGUoXG4gICAgJ3NyYycsXG4gICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTQ5MzYuMDUxNzM3MjM5NjQzITJkLTg3LjA3MTA5NDEhM2QyMC42MjgzMjk2ITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDhmNGU0M2YwZTJjNTRmM2YlM0EweGUzZjU5NzIyN2UxYWFhOGYhMnNBbmltYWxsYW5kaWElMjBNYXlhITVlMCEzbTIhMXNlbiEyc3VzITR2MTcyMDczMzIwNTYzMCE1bTIhMXNlbiEyc3VzJyxcbiAgKTtcbiAgY29udGFjdE1hcC5zdHlsZS53aWR0aCA9ICc2MDBweCc7XG4gIGNvbnRhY3RNYXAuc3R5bGUuaGVpZ2h0ID0gJzQ1MHB4JztcblxuICBjb250YWN0TWFwV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0TWFwKTtcblxuICBjb25zdCBjb250YWN0SG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SG91ci5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19ob3VyJyk7XG5cbiAgY29uc3QgY29udGFjdEhvdXJTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnRhY3RIb3VyU3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc3VidGl0bGUnKTtcbiAgY29udGFjdEhvdXJTdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5cbiAgY29uc3QgY29udGFjdEhvdXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29udGFjdEhvdXJMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX2xpc3QnKTtcblxuICBjb25zdCBob3VycyA9IFtcbiAgICAnTW9uZGF5IC0gVGh1cnNkYXk6IDY6MDAgUE0gLSAxMDowMCBQTScsXG4gICAgJ0ZyaWRheSAtIFNhdHVyZGF5OiA2OjAwIFBNIC0gMTowMCBBTScsXG4gICAgJ1N1bmRheTogNjowMCBQTSAtIDk6MDAgUE0nLFxuICBdO1xuXG4gIGhvdXJzLmZvckVhY2goKGhvdXIpID0+IHtcbiAgICBjb25zdCBjb250YWN0SG91ckxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb250YWN0SG91ckxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX2xpc3QtaXRlbScpO1xuICAgIGNvbnRhY3RIb3VyTGlzdEl0ZW0udGV4dENvbnRlbnQgPSBob3VyO1xuICAgIGNvbnRhY3RIb3VyTGlzdC5hcHBlbmRDaGlsZChjb250YWN0SG91ckxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgY29udGFjdEhvdXIuYXBwZW5kKGNvbnRhY3RIb3VyU3VidGl0bGUsIGNvbnRhY3RIb3VyTGlzdCk7XG5cbiAgY29uc3QgY29udGFjdExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19sb2NhdGlvbicpO1xuXG4gIGNvbnN0IGNvbnRhY3RMb2NhdGlvblN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGFjdExvY2F0aW9uU3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fc3VidGl0bGUnKTtcbiAgY29udGFjdExvY2F0aW9uU3VidGl0bGUudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuXG4gIGNvbnN0IGNvbnRhY3RMb2NhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb250YWN0TG9jYXRpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX2xpc3QnKTtcblxuICBjb25zdCBsb2NhdGlvbnMgPSBbXG4gICAgJ0VjaG8gQ2hhbWJlciBFYXRlcnknLFxuICAgICc0NTYgU2VyZW5pdHkgU3RyZWV0LCcsXG4gICAgJ0NpdHkgQ2VudGVyLCBNZXRyb3BvbGlzJyxcbiAgXTtcblxuICBsb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICBjb25zdCBjb250YWN0TG9jYXRpb25MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdExvY2F0aW9uTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29udGVudF9fbGlzdC1pdGVtJyk7XG4gICAgY29udGFjdExvY2F0aW9uTGlzdEl0ZW0udGV4dENvbnRlbnQgPSBsb2NhdGlvbjtcbiAgICBjb250YWN0TG9jYXRpb25MaXN0LmFwcGVuZENoaWxkKGNvbnRhY3RMb2NhdGlvbkxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgY29udGFjdExvY2F0aW9uLmFwcGVuZChjb250YWN0TG9jYXRpb25TdWJ0aXRsZSwgY29udGFjdExvY2F0aW9uTGlzdCk7XG5cbiAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZCgnY29sJyk7XG4gIGNvbnRhY3RUZXh0LmFwcGVuZChjb250YWN0SG91ciwgY29udGFjdExvY2F0aW9uKTtcblxuICBjb25zdCBjb250YWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXdyYXBwZXInLCAncm93Jyk7XG4gIGNvbnRhY3RXcmFwcGVyLmFwcGVuZChjb250YWN0TWFwV3JhcHBlciwgY29udGFjdFRleHQpO1xuXG4gIHJldHVybiBjb250YWN0V3JhcHBlcjtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVNeUVsZW1lbnQgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2UgfSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGhlcm9JbWFnZSBmcm9tICcuL2ltYWdlcy9mb29kLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZUhvbWVUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlTXlFbGVtZW50KCdoMScsIFsnaG9tZV9fdGl0bGUnXSwgdGl0bGUpO1xufTtcblxuY29uc3QgY3JlYXRlSG9tZVBhcmFncmFwaCA9IChwYXJhKSA9PiB7XG4gIHJldHVybiBjcmVhdGVNeUVsZW1lbnQoJ3AnLCBbJ2hvbWVfX3BhcmFncmFwaCddLCBwYXJhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hvbWVfX3RleHQnKTtcbiAgaG9tZVRleHQuYXBwZW5kKFxuICAgIGNyZWF0ZUhvbWVUaXRsZSgnRWNobyBDaGFtYmVyJyksXG4gICAgY3JlYXRlSG9tZVBhcmFncmFwaChcbiAgICAgICdhIHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IGJsZW5kcyB0aGUgZGVlcCwgaHlwbm90aWMgc291bmRzIG9mIGR1YiBhbmQgbWluaW1hbGlzdCB0ZWNobm8gd2l0aCBpbm5vdmF0aXZlIGN1aXNpbmUuJyxcbiAgICApLFxuICApO1xuXG4gIGNvbnN0IGhvbWVJbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZUltYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdob21lLWltYWdlLXdyYXBwZXInKTtcbiAgaG9tZUltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVJbWFnZShoZXJvSW1hZ2UsICdIZXJvIEltYWdlIFBsYWNlaG9sZGVyJywgWydob21lLWltYWdlJ10pLFxuICApO1xuXG4gIGNvbnN0IGhvbWVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtd3JhcHBlcicsICdyb3cnKTtcbiAgaG9tZVdyYXBwZXIuYXBwZW5kKGhvbWVUZXh0LCBob21lSW1hZ2VXcmFwcGVyKTtcblxuICByZXR1cm4gaG9tZVdyYXBwZXI7XG59O1xuIiwiaW1wb3J0IG15SW1hZ2UgZnJvbSAnLi9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJztcblxuLy8gVXRpbGl0eSBGdW5jdGlvblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU15RWxlbWVudCA9ICh0eXBlLCBjbGFzc05hbWVzID0gW10sIHRleHQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcblxuICBpZiAodGV4dCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKSxcbiAgKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZVN1YnRpdGxlID0gKHN1YnRpdGxlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVNeUVsZW1lbnQoJ2gyJywgWydjb250ZW50X19zdWJ0aXRsZSddLCBzdWJ0aXRsZSk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlTXlFbGVtZW50KCdkaXYnLCBbJ2NhcmQtY29udGFpbmVyJ10pO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZFdyYXBwZXIgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVNeUVsZW1lbnQoJ2RpdicsIFsnY2FyZCcsICd3cmFwcGVyJywgJ2NvbCddKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbWFnZSA9IChpbWFnZVNvdXJjZSwgYWx0VGV4dCwgY2xhc3NOYW1lcyA9IFtdKSA9PiB7XG4gIFxuICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlU291cmNlO1xuICBpbWFnZUVsZW1lbnQuYWx0ID0gYWx0VGV4dDtcbiAgaW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG5cbiAgcmV0dXJuIGltYWdlRWxlbWVudDtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRUaXRsZSA9IChjYXJkVGl0bGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZU15RWxlbWVudCgnaDMnLCBbJ2NhcmRfX3RpdGxlJ10sIGNhcmRUaXRsZSk7XG59O1xuXG5jb25zdCBjcmVhdGVDYXJkVGV4dCA9IChjYXJkVGV4dCkgPT4ge1xuICByZXR1cm4gY3JlYXRlTXlFbGVtZW50KCdwJywgWydjYXJkX190ZXh0J10sIGNhcmRUZXh0KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhcmRJbmZvID0gKGNhcmRUaXRsZXMgPSBbXSwgY2FyZFRleHRzID0gW10pID0+IHtcbiAgY29uc3QgY2FyZEluZm8gPSBjcmVhdGVNeUVsZW1lbnQoJ2RpdicsIFsnY2FyZF9faW5mbyddKTtcblxuICBjYXJkVGl0bGVzLmZvckVhY2goKHRpdGxlLCBpbmRleCkgPT4ge1xuICAgIGNhcmRJbmZvLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRUaXRsZSh0aXRsZSkpO1xuICAgIGNhcmRJbmZvLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRUZXh0KGNhcmRUZXh0c1tpbmRleF0pKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmRJbmZvO1xufTtcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChcbiAgY2FyZFRpdGxlcyA9IFtdLFxuICBjYXJkVGV4dHMgPSBbXSxcbiAgaW1hZ2VTb3VyY2UgPSAnJyxcbiAgYWx0VGV4dCA9ICcnLFxuKSA9PiB7XG4gIGNvbnN0IGNhcmRXcmFwcGVyID0gY3JlYXRlQ2FyZFdyYXBwZXIoKTtcbiAgY29uc3QgY2FyZEltYWdlV3JhcHBlciA9IGNyZWF0ZU15RWxlbWVudCgnZGl2JywgWydjYXJkX19pbWFnZSddKTtcbiAgXG4gIGNvbnN0IGNhcmRJbmZvID0gY3JlYXRlQ2FyZEluZm8oY2FyZFRpdGxlcywgY2FyZFRleHRzKTtcbiAgY29uc3QgY2FyZEltYWdlID0gY3JlYXRlSW1hZ2UoaW1hZ2VTb3VyY2UsIGFsdFRleHQpO1xuXG4gIGNhcmRJbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZEltYWdlKTtcbiAgY2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZEltYWdlV3JhcHBlcik7XG4gIGNhcmRXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRJbmZvKTtcblxuICByZXR1cm4gY2FyZFdyYXBwZXI7XG59O1xuXG5jb25zdCBjcmVhdGVTZWN0aW9uID0gKFxuICBzZWN0aW9uQ2xhc3NOYW1lcyA9IFtdLFxuICBzZWN0aW9uU3VidGl0bGUsXG4gIGNhcmRUaXRsZXMgPSBbXSxcbiAgY2FyZFRleHRzID0gW10sXG4gIGltYWdlU291cmNlcyA9IFtdLFxuICBhbHRUZXh0cyA9IFtdLFxuKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVNeUVsZW1lbnQoJ2RpdicsIFsuLi5zZWN0aW9uQ2xhc3NOYW1lc10pO1xuXG4gIGNvbnN0IHNlY3Rpb25TdWIgPSBjcmVhdGVTdWJ0aXRsZShzZWN0aW9uU3VidGl0bGUpO1xuXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBjcmVhdGVDYXJkQ29udGFpbmVyKCk7XG5cbiAgY2FyZFRpdGxlcy5mb3JFYWNoKCh0aXRsZSwgaW5kZXgpID0+IHtcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlQ2FyZChcbiAgICAgICAgW3RpdGxlXSxcbiAgICAgICAgW2NhcmRUZXh0c1tpbmRleF1dLFxuICAgICAgICBpbWFnZVNvdXJjZXNbaW5kZXhdLFxuICAgICAgICBhbHRUZXh0c1tpbmRleF0sXG4gICAgICApLFxuICAgICk7XG4gIH0pO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvblN1Yik7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZE1lbnVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBtZW51V3JhcHBlciA9IGNyZWF0ZU15RWxlbWVudCgnZGl2JywgWydtZW51LXdyYXBwZXInLCAnY29sJ10pO1xuXG4gIGNvbnN0IHN0YXJ0ZXIgPSBjcmVhdGVTZWN0aW9uKFxuICAgIFsnc3RhcnRlcnMnLCAnY29sJ10sXG4gICAgJ1N0YXJ0ZXInLFxuICAgIFsnTWluaW1hbGlzdCBNaXNvIFNvdXAnLCAnQW1iaWVudCBBbXVzZS1Cb3VjaGUnLCAnRWNob2VkIEVkYW1hbWUnXSxcbiAgICBbXG4gICAgICAnQSBkZWxpY2F0ZSBtaXNvIGJyb3RoIHdpdGggdG9mdSwgd2FrYW1lIHNlYXdlZWQsIGFuZCBzcHJpbmcgb25pb25zLicsXG4gICAgICAnQSB0cmlvIG9mIHNtYWxsIGJpdGVzLCBmZWF0dXJpbmcgc2Vhc29uYWwgaW5ncmVkaWVudHMgdGhhdCBzZXQgdGhlIHRvbmUgZm9yIHlvdXIgZGluaW5nIGV4cGVyaWVuY2UuJyxcbiAgICAgICdTdGVhbWVkIGVkYW1hbWUgd2l0aCBhIHRvdWNoIG9mIHNlYSBzYWx0IGFuZCBhIGhpbnQgb2YgbGltZSB6ZXN0LicsXG4gICAgXSxcbiAgICBbbXlJbWFnZSwgbXlJbWFnZSwgbXlJbWFnZV0sXG4gICAgWydQbGFjZWhvbGRlciBpbWFnZScsICdQbGFjZWhvbGRlciBpbWFnZScsICdQbGFjZWhvbGRlciBpbWFnZSddLFxuICApO1xuXG4gIGNvbnN0IG1haW5Db3Vyc2UgPSBjcmVhdGVTZWN0aW9uKFxuICAgIFsnbWFpbi1jb3Vyc2UnLCAnY29sJ10sXG4gICAgJ01haW4gQ291cnNlJyxcbiAgICBbJ0R1YmJlZCBEdWNrIEJyZWFzdCcsICdTb25pYyBNdXNocm9vbSBSaXNvdHRvJywgJ1N1YmR1ZWQgU2VhIEJhc3MnXSxcbiAgICBbXG4gICAgICAnU2VhcmVkIGR1Y2sgYnJlYXN0IHdpdGggYSBob25leS1zb3kgZ2xhemUsIHNlcnZlZCB3aXRoIHNhdXTDqWVkIGJva2Nob3kgYW5kIGphc21pbmUgcmljZS4nLFxuICAgICAgJ0NyZWFteSByaXNvdHRvIHdpdGggd2lsZCBtdXNocm9vbXMsIHRydWZmbGUgb2lsLCBhbmQgUGFybWVzYW4gY2hlZXNlLicsXG4gICAgICAnUGFuLXNlYXJlZCBzZWEgYmFzcyB3aXRoIGEgY2l0cnVzIGJldXJyZSBibGFuYywgYWNjb21wYW5pZWQgYnkgYXNwYXJhZ3VzIHNwZWFycyBhbmQgZmluZ2VybGluZyBwb3RhdG9lcy4nLFxuICAgIF0sXG4gICAgW215SW1hZ2UsIG15SW1hZ2UsIG15SW1hZ2VdLFxuICAgIFsnUGxhY2Vob2xkZXIgaW1hZ2UnLCAnUGxhY2Vob2xkZXIgaW1hZ2UnLCAnUGxhY2Vob2xkZXIgaW1hZ2UnXSxcbiAgKTtcblxuICBjb25zdCBkcmlua3MgPSBjcmVhdGVTZWN0aW9uKFxuICAgIFsnZHJpbmtzJywgJ2NvbCddLFxuICAgICdEcmlua3MnLFxuICAgIFsnRGVlcCBEdWIgRGFpcXVpcmknLCAnTWluaW1hbGlzdCBNYXJ0aW5pJywgJ0VjaG8gRXNwcmVzc28nXSxcbiAgICBbXG4gICAgICAnQSBjbGFzc2ljIGRhaXF1aXJpIHdpdGggYSB0d2lzdCBvZiBmcmVzaCBiYXNpbCBhbmQgbGltZS4nLFxuICAgICAgJ0EgY2xlYW4sIGNyaXNwIG1hcnRpbmkgd2l0aCBwcmVtaXVtIGdpbiBhbmQgYSB0b3VjaCBvZiBkcnkgdmVybW91dGgsIGdhcm5pc2hlZCB3aXRoIGFuIG9saXZlLicsXG4gICAgICAnQSByaWNoLCBzbW9vdGggZXNwcmVzc28gdG8gY29tcGxlbWVudCB5b3VyIG1lYWwuJyxcbiAgICBdLFxuICAgIFtteUltYWdlLCBteUltYWdlLCBteUltYWdlXSxcbiAgICBbJ1BsYWNlSG9sZGVyIGltYWdlJywgJ1BsYWNlaG9sZGVyIGltYWdlJywgJ1BsYWNlaG9sZGVyIGltYWdlJ10sXG4gICk7XG5cbiAgbWVudVdyYXBwZXIuYXBwZW5kKHN0YXJ0ZXIsIG1haW5Db3Vyc2UsIGRyaW5rcyk7XG5cbiAgcmV0dXJuIG1lbnVXcmFwcGVyO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgbG9hZE1lbnVQYWdlIH0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gSW5pdGlhbCBQYWdlIExvYWRcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChsb2FkSG9tZVBhZ2UoKSk7XG5cbmNvbnN0IGhhbmRsZU5hdkJ0biA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID09PSAnSG9tZScpXG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4obG9hZEhvbWVQYWdlKCkpO1xuICBlbHNlIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09ICdNZW51JylcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbihsb2FkTWVudVBhZ2UoKSk7XG4gIGVsc2UgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4obG9hZENvbnRhY3RQYWdlKCkpO1xufTtcblxuLy8gQXR0YWNoIGxpc3RlbmVycyB0byBlYWNoIGJ1dHRvblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fYnRuJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdkJ0bik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==