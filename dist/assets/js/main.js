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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _serie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serie */ \"./src/serie.js\");\n/* harmony import */ var _personaje__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personaje */ \"./src/personaje.js\");\n\n\n\nconst modulo = (() => {\n  const urlBase = 'https://rickandmortyapi.com/api';\n  let cantidadPersonajes = null;\n\n  const obtenerDatosAPI = async url => {\n    try {\n      const rawData = await fetch(url);\n      const data = await rawData.json();\n      return data.results;\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  return {\n    obtenerDatos: async () => {\n      const instanciaSerie = new _serie__WEBPACK_IMPORTED_MODULE_0__.Serie(\"Rick and Morty\");\n      const personajes = await obtenerDatosAPI(urlBase + '/character');\n      cantidadPersonajes = personajes.length;\n      personajes.forEach(personaje => {\n        const instanciaPersonaje = new _personaje__WEBPACK_IMPORTED_MODULE_1__.Personaje(personaje.id, personaje.name, personaje.species, personaje.image);\n        instanciaSerie.agregarPersonajes(instanciaPersonaje);\n      });\n      instanciaSerie.getPersonajes();\n    },\n    cargarCantidadDePersonajes: () => {\n      const elementoCantidadPersonajes = document.getElementById('cantidadPersonajes');\n      const elementoSpinner = document.getElementById('spinner');\n      elementoCantidadPersonajes.innerText = cantidadPersonajes;\n      elementoSpinner.remove();\n    }\n  };\n})();\n\nmodulo.obtenerDatos();\nsetTimeout(modulo.cargarCantidadDePersonajes, 2000);\n\n//# sourceURL=webpack://prueba-rick-and-morty/./src/main.js?");

/***/ }),

/***/ "./src/personaje.js":
/*!**************************!*\
  !*** ./src/personaje.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Personaje\": () => (/* binding */ Personaje)\n/* harmony export */ });\nclass Personaje {\n  constructor(id, nombre, especie, imagen) {\n    this.obtenerId = function () {\n      let _id = id;\n\n      function _getId() {\n        return _id;\n      }\n\n      return _getId();\n    };\n\n    this.obtenerNombre = function () {\n      let _nombre = nombre;\n\n      function _getNombre() {\n        return _nombre;\n      }\n\n      return _getNombre();\n    };\n\n    this.obtenerImagen = function () {\n      let _imagen = imagen;\n\n      function _getImagen() {\n        return _imagen;\n      }\n\n      return _getImagen();\n    };\n\n    this.obtenerEspecie = function () {\n      let _especie = especie;\n\n      function _getEspecie() {\n        return _especie;\n      }\n\n      return _getEspecie();\n    };\n  }\n\n}\n\n//# sourceURL=webpack://prueba-rick-and-morty/./src/personaje.js?");

/***/ }),

/***/ "./src/serie.js":
/*!**********************!*\
  !*** ./src/serie.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Serie\": () => (/* binding */ Serie)\n/* harmony export */ });\nclass Serie {\n  constructor(nombre, personajes = []) {\n    this.nombre = nombre;\n    this.personajes = personajes;\n  }\n\n  agregarPersonajes(personaje) {\n    this.personajes.push(personaje);\n  }\n\n  getPersonajes() {\n    // aqui tiene que ir el código que recorre el array this.personajes\n    // e imprime en pantalla las cards con la informacion\n    const contenedorCards = document.getElementById('resultados');\n\n    const renderizarCard = personaje => {\n      return `<div class=\"col-md-4 mb-3\"><div class=\"card\">\n            <img src=\"${personaje.obtenerImagen()}\" class=\"card-img-top\" alt=\"${personaje.obtenerNombre()}\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">${personaje.obtenerNombre()}</h5>\n              <p class=\"card-text\">Especie: ${personaje.obtenerEspecie()}</p>\n              <a href=\"#\" class=\"btn btn-primary\">Ver personaje</a>\n            </div>\n          </div>\n          </div>`;\n    };\n\n    contenedorCards.innerHTML = this.personajes.map(personaje => renderizarCard(personaje)).join('');\n  }\n\n}\n\n//# sourceURL=webpack://prueba-rick-and-morty/./src/serie.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;