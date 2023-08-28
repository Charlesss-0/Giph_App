/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\nvar gifsEl = document.querySelector('.gifs');\nvar searchContainer = document.getElementById('search-container');\nvar searchInput = document.getElementById('search-input');\nvar resultsEl = document.querySelector('.results');\nvar appName = document.querySelector('.app-name');\n(function renderTrending() {\n  appName.addEventListener('click', function () {\n    return location.reload();\n  });\n  fetch('https://api.giphy.com/v1/gifs/trending?api_key=Uw5xMl9pAcjoNUtsqc0SjYnPhUNRvVPI&limit=50').then(function (response) {\n    return response.json();\n  }).then(getGifs)[\"catch\"](onError);\n})();\nfunction RenderResults(event) {\n  event.preventDefault();\n  var input = searchInput.value;\n  fetch(\"https://api.giphy.com/v1/gifs/search?api_key=Uw5xMl9pAcjoNUtsqc0SjYnPhUNRvVPI&q=\".concat(input, \"&limit=50\")).then(function (response) {\n    return response.json();\n  }).then(function (response) {\n    gifsEl.innerHTML = '';\n    getGifs(response);\n    resultsEl.textContent = \"Showing results for: \\\"\".concat(input, \"\\\"\");\n  })[\"catch\"](onError);\n  searchContainer.reset();\n}\nsearchContainer.addEventListener('submit', RenderResults);\nfunction getGifs(response) {\n  for (var i = 0; i < response.data.length; i++) {\n    var img = document.createElement('img');\n    img.src = response.data[i].images.fixed_width.webp;\n    gifsEl.appendChild(img);\n  }\n}\nfunction onError(error) {\n  console.log(error);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7QUFFaEMsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDOUMsSUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUNuRSxJQUFNQyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUMzRCxJQUFNRSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNwRCxJQUFNSyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUVsRCxDQUFDLFNBQVNNLGNBQWNBLENBQUEsRUFBSTtFQUN6QkQsT0FBTyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFBQSxPQUFNQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUUxREMsS0FBSyxDQUFDLDBGQUEwRixDQUFDLENBQzVGQyxJQUFJLENBQUMsVUFBQUMsUUFBUTtJQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7RUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUNHLE9BQU8sQ0FBQyxTQUNSLENBQUNDLE9BQU8sQ0FBQztBQUN2QixDQUFDLEVBQUUsQ0FBQztBQUVKLFNBQVNDLGFBQWFBLENBQUVDLEtBQUssRUFBRTtFQUMzQkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QixJQUFNQyxLQUFLLEdBQUdoQixXQUFXLENBQUNpQixLQUFLO0VBRS9CVixLQUFLLG9GQUFBVyxNQUFBLENBQW9GRixLQUFLLGNBQVcsQ0FBQyxDQUNyR1IsSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUFDLFFBQVEsRUFBSTtJQUNkZCxNQUFNLENBQUN3QixTQUFTLEdBQUcsRUFBRTtJQUNyQlIsT0FBTyxDQUFDRixRQUFRLENBQUM7SUFDakJSLFNBQVMsQ0FBQ21CLFdBQVcsNkJBQUFGLE1BQUEsQ0FBNEJGLEtBQUssT0FBRztFQUM3RCxDQUFDLENBQUMsU0FDSSxDQUFDSixPQUFPLENBQUM7RUFFbkJkLGVBQWUsQ0FBQ3VCLEtBQUssQ0FBQyxDQUFDO0FBQzNCO0FBRUF2QixlQUFlLENBQUNNLGdCQUFnQixDQUFDLFFBQVEsRUFBRVMsYUFBYSxDQUFDO0FBRXpELFNBQVNGLE9BQU9BLENBQUVGLFFBQVEsRUFBRTtFQUN4QixLQUFLLElBQUlhLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2IsUUFBUSxDQUFDYyxJQUFJLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7SUFDM0MsSUFBTUcsR0FBRyxHQUFHN0IsUUFBUSxDQUFDOEIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6Q0QsR0FBRyxDQUFDRSxHQUFHLEdBQUdsQixRQUFRLENBQUNjLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNNLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxJQUFJO0lBRWxEbkMsTUFBTSxDQUFDb0MsV0FBVyxDQUFDTixHQUFHLENBQUM7RUFDM0I7QUFDSjtBQUVBLFNBQVNiLE9BQU9BLENBQUVvQixLQUFLLEVBQUU7RUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7QUFDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naXBoX2FwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWluQ3NzIGZyb20gJy4vbWFpbi5jc3MnXHJcblxyXG5jb25zdCBnaWZzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2lmcycpXHJcbmNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY29udGFpbmVyJylcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JylcclxuY29uc3QgcmVzdWx0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMnKVxyXG5jb25zdCBhcHBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1uYW1lJylcclxuXHJcbjsoZnVuY3Rpb24gcmVuZGVyVHJlbmRpbmcgKCkge1xyXG4gICAgYXBwTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKVxyXG5cclxuICAgIGZldGNoKCdodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmVuZGluZz9hcGlfa2V5PVV3NXhNbDlwQWNqb05VdHNxYzBTalluUGhVTlJ2VlBJJmxpbWl0PTUwJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZ2V0R2lmcylcclxuICAgICAgICAuY2F0Y2gob25FcnJvcilcclxufSkoKVxyXG5cclxuZnVuY3Rpb24gUmVuZGVyUmVzdWx0cyAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlXHJcblxyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9hcGlfa2V5PVV3NXhNbDlwQWNqb05VdHNxYzBTalluUGhVTlJ2VlBJJnE9JHtpbnB1dH0mbGltaXQ9NTBgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGdpZnNFbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBnZXRHaWZzKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXN1bHRzRWwudGV4dENvbnRlbnQgPSBgU2hvd2luZyByZXN1bHRzIGZvcjogXCIke2lucHV0fVwiYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKG9uRXJyb3IpXHJcblxyXG4gICAgc2VhcmNoQ29udGFpbmVyLnJlc2V0KClcclxufVxyXG5cclxuc2VhcmNoQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFJlbmRlclJlc3VsdHMpXHJcblxyXG5mdW5jdGlvbiBnZXRHaWZzIChyZXNwb25zZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBpbWcuc3JjID0gcmVzcG9uc2UuZGF0YVtpXS5pbWFnZXMuZml4ZWRfd2lkdGgud2VicFxyXG5cclxuICAgICAgICBnaWZzRWwuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkVycm9yIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbn0iXSwibmFtZXMiOlsibWFpbkNzcyIsImdpZnNFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaENvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwic2VhcmNoSW5wdXQiLCJyZXN1bHRzRWwiLCJhcHBOYW1lIiwicmVuZGVyVHJlbmRpbmciLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJnZXRHaWZzIiwib25FcnJvciIsIlJlbmRlclJlc3VsdHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsImNvbmNhdCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwicmVzZXQiLCJpIiwiZGF0YSIsImxlbmd0aCIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJpbWFnZXMiLCJmaXhlZF93aWR0aCIsIndlYnAiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2lwaF9hcHAvLi9zcmMvbWFpbi5jc3M/NzZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.css\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;