/*!
 Matter 
 Drupal 8 Theme inspired by Material UI
*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function (mdc, Drupal, drupalSettings) {
  'use strict';

  // Auto Initialize elements that have been defined in the templates.

  mdc.autoInit();

  /* Initialize the Drawer Component */
  const drawerEl = document.querySelector('.mdc-temporary-drawer');
  const MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
  const matter_drawer = new MDCTemporaryDrawer(drawerEl);
  document.querySelector('.matter' + '-menu').addEventListener('click', function () {
    matter_drawer.open = !matter_drawer.open;
  });

  /* Initialize and provide sync with native select element */
  const MDCSelect = mdc.select.MDCSelect;

  const selectList = document.querySelectorAll('.mdc-select');
  for (let i = 0, l = selectList.length; i < l; i++) {
    const select = new MDCSelect(selectList[i]);
    const parentNode = selectList[i].parentNode;
    const nativeSelect = parentNode.querySelector('select');
    select.listen('MDCSelect:change', () => {
      nativeSelect.value = select.selectedOptions[0].id;
    });
  }

  /* Bind dropbuttons with their SimpleMenus */
  const MDCSimpleMenu = mdc.menu.MDCSimpleMenu;

  const dropbuttonList = document.querySelectorAll('.icon--button-dropbutton');
  for (let i = 0, l = dropbuttonList.length; i < l; i++) {
    const parentNode = dropbuttonList[i].parentNode;
    const menuNode = parentNode.querySelector('.mdc-simple-menu');
    let simpleMenu = new MDCSimpleMenu(menuNode);
    dropbuttonList[i].addEventListener('click', () => simpleMenu.open = !simpleMenu.open);
  }

  /* Tuck Views Exposed Forms away until it is needed */
  const ViewsExposedForms = document.querySelectorAll('.views-exposed-form');
  for (let i = 0; i < ViewsExposedForms.length; i++) {
    let ViewsExposedForm = ViewsExposedForms[i];
    const ToggleButton = ViewsExposedForm.querySelector('.mdc-icon-toggle');
    mdc.iconToggle.MDCIconToggle.attachTo(ToggleButton);
    const FormWrapper = ViewsExposedForm.querySelector('.toggle-form');
    ToggleButton.addEventListener('MDCIconToggle:change', ({ detail }) => {
      FormWrapper.classList.toggle('toggle-form--show', detail.isOn);
    });
  }
})(window.mdc, Drupal, drupalSettings);

/***/ })
/******/ ]);