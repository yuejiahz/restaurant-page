/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    font-family:\\\"Monaco\\\", \\\"Lucida Console\\\", monospace;\\n    text-align: center;\\n}\\n.banner{\\n    width:100%;\\n    height:250px;\\n    object-fit:cover;\\n}\\nbody{\\n    margin : 0;\\n    display : block;\\n    background-color : #F4E7D3;\\n}\\n.menu{\\n   text-align:'center';\\n    line-height:'1.5em';\\n    margin:'0.8em';\\n}\\n.nav-bar{\\n    margin:30px auto auto auto;\\n    display:block;\\n    width:312px;\\n}\\n\\n.nav-item{\\n    display:inline-block;\\n    background-color: white;\\n    width: 80px;\\n    padding:10px;\\n    border:solid 2px;\\n    position:relative;\\n    z-index: 1;\\n}\\n.food-image{\\n    display: inline;\\n    width:14rem;\\n    height:12rem;\\n    border-radius: 6px;\\n}\\n.menu-container{\\n    margin:auto;\\n    line-height:1.2rem;\\n}\\n\\n.description{\\n    width:9rem;\\n    padding:1rem 1rem 1rem 3.5rem;\\n}\\n.price{\\n    width:3rem;\\n    line-height:1rem;\\n    padding:1rem;\\n\\n}\\n.price,.description{\\n    margin:auto;\\n    font-size: 1.2rem;\\n}\\n.food-list{\\n    width:35rem;\\n    margin:auto;\\n    display: flex;\\n    padding: 1rem;\\n    background-color: beige;\\n    border: solid;\\n    border-radius: solid 10px;\\n}\\n.contact-container{\\n    margin:40px auto;\\n    background-color: white;\\n    border-radius: 5px;\\n    padding:10px;\\n    width:35rem;\\n}\\n.header{\\n    line-height: 1.5rem;\\n}\\n.info-list{\\n    text-align: justify;\\n    line-height: 1.5rem;\\n    margin:30px auto;\\n    width:35rem;\\n}\\n#content{\\n    text-align: justify;\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-menu.js */ \"./src/tab-menu.js\");\n/* harmony import */ var _tab_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-info.js */ \"./src/tab-info.js\");\n/* harmony import */ var _tab_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-contact.js */ \"./src/tab-contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n//create image banner and change banner for different tab restaurant-page\nfunction imageBanner(tabSelection){\n    const banner = document.createElement('img');\n    banner.classList.add('banner');\n  \n    if(tabSelection=='info'||!tabSelection){\n        banner.src = './img/japrestout.jpg';\n        banner.alt = 'japanese-restaurant-exterior';\n    }\n    else if(tabSelection) {\n        banner.src = './img/japrest.jpg';\n        banner.alt = 'japanese-restaurant-interior';\n    } \n    return banner;\n}\n\n//create navigation bar elements \nconst navBar = document.createElement('div');\nconst tabInfo = document.createElement('div');\nconst tabMenu = document.createElement('div');\nconst tabContact = document.createElement('div');\n\nnavBar.classList.add('nav-bar');\ntabInfo.classList.add('tab-info');\ntabMenu.classList.add('tab-menu');\ntabContact.classList.add('tab-contact');\n\nnavBar.appendChild(tabInfo);\nnavBar.appendChild(tabMenu);\nnavBar.appendChild(tabContact);\n\ntabInfo.textContent = \"Info\";\ntabMenu.textContent = \"Menu\";\ntabContact.textContent = \"Contact\";\n\nconst navItem = navBar.childNodes;\nfor (var i = 0; i < navItem.length; i++) {\n    navItem[i].classList.add('nav-item');\n};\n\n//create footer\nconst footer = document.createElement('div');\nfooter.textContent = \"created by MoonJi <3\";\nfooter.style.padding = '2em';\n    \n//choose which page to load\nfunction pageSelection(tabSelection) {\n    const elements = document.createElement('div');\n    elements.classList.add('elements');\n\n    if(tabSelection=='info'||!tabSelection){\n    elements.appendChild((0,_tab_info_js__WEBPACK_IMPORTED_MODULE_1__.info)());\n    }\n    if(tabSelection=='menu'){\n    elements.appendChild((0,_tab_menu_js__WEBPACK_IMPORTED_MODULE_0__.menuContent)());\n    } \n     if(tabSelection=='contact'){\n    elements.appendChild((0,_tab_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)());\n    }\n    return elements;\n}\n\n//append elements to body \nfunction reattachElements(tabSelection){\n    document.body.appendChild(imageBanner(tabSelection));\n    document.body.appendChild(navBar);\n    document.body.appendChild(pageSelection(tabSelection));\n    document.body.appendChild(footer);\n}\n\nimageBanner();\nreattachElements();\n\n//add event listener to info tab \ntabInfo.addEventListener('click',function (){\n    const elements=document.querySelector('.elements');\n    const banner=document.querySelector('.banner');\n    elements.remove();\n    banner.remove();\n    reattachElements('info');\n    });\n\n//add event listener to menu tab \ntabMenu.addEventListener('click',function (){\n    const elements=document.querySelector('.elements');\n    const banner=document.querySelector('.banner');\n    elements.remove();\n    banner.remove();\n    reattachElements('menu');\n    });\n\n//add event listener to contact tab \ntabContact.addEventListener('click',function (){\n    const elements=document.querySelector('.elements');\n    const banner=document.querySelector('.banner');\n    elements.remove();\n    banner.remove();\n    reattachElements('contact');\n    });\n    \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/tab-contact.js":
/*!****************************!*\
  !*** ./src/tab-contact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact =()=>{\n//create elements for contact details\nconst contactContainer = document.createElement('div');\nconst contact = document.createElement('h1');\nconst email= document.createElement('p');\nconst phone= document.createElement('p');\n\ncontactContainer.classList.add('contact-container');\ncontact.classList.add('contact');\nemail.classList.add('email');\nphone.classList.add('phone');\n\ncontactContainer.appendChild(contact);\ncontactContainer.appendChild(email);\ncontactContainer.appendChild(phone);\n\ncontact.textContent=\"Contact us\";\nemail.textContent=\"Email: oishijapaneserestaurant@feedback.com\";\nphone.textContent=\"Phone: +6042536434\";\n\nreturn contactContainer;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab-contact.js?");

/***/ }),

/***/ "./src/tab-info.js":
/*!*************************!*\
  !*** ./src/tab-info.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"info\": () => (/* binding */ info)\n/* harmony export */ });\nconst info = () => {\n  //create header of restaurant name\n  const infoContainer=document.createElement('div');\n\n  const header=document.createElement('h1');\n  const content = document.createElement(\"p\");\n  const hours = document.createElement(\"p\");\n  const location = document.createElement(\"p\");\n\n  infoContainer.classList.add('info-container');\n   header.classList.add('class-list');\n   content.classList.add('content');\n   content.id='content';\n   hours.classList.add('hours');\n   location.classList.add('location');\n\n   header.classList.add('info-list');\n   content.classList.add('info-list');\n   hours.classList.add('info-list');\n   location.classList.add('info-list');\n\n  infoContainer.appendChild(header);\n  infoContainer.appendChild(content);\n  infoContainer.appendChild(hours);\n  infoContainer.appendChild(location);\n\n  header.textContent='OISHI JAPANESE RESTAURANT';\n  content.textContent=  `OISHI JAPANESE RESTAURANT is one of our favourite Japanese restaurants in town,\n                      and is the place to head to if you're looking to pamper yourself or your loved ones to some good \n                      food. Oishi offers variety of authentic japanese food includes sushi, ramen, and katsu curry chicken. \n                      in from the famous Tsukiji Fish Market in Tokyo twice a week, then executed by professional chefs \n                      with years of experience under their belts. They also get plus points for their classy yet cosy \n                      interior and intimate vibe that's great for date nights or hangouts with friends.`;\n\n  hours.textContent=\"Opening Hours: Tuesday to Sunday, 10a.m. to 10p.m.\"\n  location.textContent=\"Address: Vipod Residences, Ground Floor Block C-1, No 6, Jalan Kia Peng, Kuala Lumpur, 50450 Kuala Lumpur, Malaysia\";\n\n  /* \n    // Initialize and add the map\nfunction initMap() {\n    const maps=document.createElement('div');\n\n    // The location of restaurant\n    const uluru = { lat: -25.344, lng: 131.036 };\n    // The map, centered at Uluru\n    const map = new google.maps.Map(maps), {\n      zoom: 4,\n      center: uluru,\n    });\n    // The marker, positioned at restaurant\n    const marker = new google.maps.Marker({\n      position: uluru,\n      map: map,\n    });\n  } */\n    \n    return infoContainer;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab-info.js?");

/***/ }),

/***/ "./src/tab-menu.js":
/*!*************************!*\
  !*** ./src/tab-menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent)\n/* harmony export */ });\nconst menuContent = () =>{\n    //image file name\n    let imgArray=['katsucurry','ramen','sashimi','sushi2','takoyaki'];\n    let imgAltArray=['japanese-katsu-curry-chicken','japanese-ramen','sashimi','sushi assorted set','takoyaki'];\n    let priceArray=[25,28,35,43,18];\n\n    //create container \n    const menuContainer=document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    //create menu title\n    const menu=document.createElement('h1');\n    menu.classList.add('menu');\n\n    menuContainer.appendChild(menu);\n    menu.textContent='Menu';\n   \n  \n    //generate list of food items\n    for(let i=0;i<imgArray.length;i++){\n        const foodList=document.createElement('div');\n        const foodImage=document.createElement('img');\n        const description=document.createElement('div');\n        const price=document.createElement('div');\n\n        foodList.classList.add('food-list');\n        foodImage.classList.add('food-image');\n        description.classList.add('description');\n        price.classList.add('price');\n\n\n        foodList.appendChild(foodImage);\n        foodList.appendChild(description);\n        foodList.appendChild(price);\n        menuContainer.appendChild(foodList);\n        \n        foodImage.setAttribute('alt',imgAltArray[i]);\n        foodImage.src=`./img/${imgArray[i]}.jpg`;\n        description.textContent=`${imgAltArray[i]}`;\n        price.textContent=`$${priceArray[i]}`\n\n\n        imgAltArray[i]=imgAltArray[i].replace(/-/g, ' ');\n        imgAltArray[i]=imgAltArray[i].toUpperCase();\n       \n    }\n     return menuContainer; \n } \n \n \n\n//# sourceURL=webpack://restaurant-page/./src/tab-menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;