(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CLI.ts":
/*!********************!*\
  !*** ./src/CLI.ts ***!
  \********************/
/*! exports provided: CLI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLI", function() { return CLI; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_CLIHelpers_configHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/CLIHelpers/configHelpers */ "./src/helpers/CLIHelpers/configHelpers.ts");
/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/logger */ "./src/helpers/logger.ts");



const defaultCLIOptions = {
    configFilename: "configs.json",
    configRootKey: "vladnets",
    rootdir: process.cwd(),
    workdir: process.cwd(),
};
class CLI {
    constructor(options = {}) {
        options = Object.assign({}, defaultCLIOptions, options);
        options.rootdir = path__WEBPACK_IMPORTED_MODULE_0__["normalize"](options.rootdir);
        options.workdir = path__WEBPACK_IMPORTED_MODULE_0__["normalize"](options.workdir);
        const result = Object(_helpers_CLIHelpers_configHelpers__WEBPACK_IMPORTED_MODULE_1__["findConfig"])(options);
        _helpers_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].ok("result", result.config);
    }
}


/***/ }),

/***/ "./src/helpers/CLIHelpers/actionHelpers.ts":
/*!*************************************************!*\
  !*** ./src/helpers/CLIHelpers/actionHelpers.ts ***!
  \*************************************************/
/*! exports provided: isActionName, isAction, normalizeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActionName", function() { return isActionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeActions", function() { return normalizeActions; });
/* harmony import */ var _paramHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paramHelpers */ "./src/helpers/CLIHelpers/paramHelpers.ts");

const isActionName = _paramHelpers__WEBPACK_IMPORTED_MODULE_0__["isParamName"];
const isAction = (action) => {
    let isNameValid = isActionName(action.name);
    if (!isNameValid && Array.isArray(action.name))
        isNameValid = action.name.every(isActionName);
    let areParamsValid = Array.isArray(action.params);
    if (areParamsValid)
        areParamsValid = action.params.every(_paramHelpers__WEBPACK_IMPORTED_MODULE_0__["isParam"]);
    let isRunValid = typeof action.run === "function";
    let isDescriptionValid = !action.hasOwnProperty("description") || typeof action.description === "string";
    return isNameValid && areParamsValid && isRunValid && isDescriptionValid;
};
const normalizeActions = (actions) => {
    return actions.filter(isAction);
};


/***/ }),

/***/ "./src/helpers/CLIHelpers/configHelpers.ts":
/*!*************************************************!*\
  !*** ./src/helpers/CLIHelpers/configHelpers.ts ***!
  \*************************************************/
/*! exports provided: findConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findConfig", function() { return findConfig; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nativeRequire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nativeRequire */ "./src/helpers/nativeRequire.ts");
/* harmony import */ var _FSHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FSHelpers */ "./src/helpers/FSHelpers.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger */ "./src/helpers/logger.ts");
/* harmony import */ var _actionHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionHelpers */ "./src/helpers/CLIHelpers/actionHelpers.ts");






const findConfig = (options) => {
    const { configFilename, workdir, configRootKey } = options;
    const configFilepath = _FSHelpers__WEBPACK_IMPORTED_MODULE_3__["FSHelpers"].findPathUpSync(configFilename, workdir);
    const rootdir = path__WEBPACK_IMPORTED_MODULE_1__["dirname"](configFilepath);
    let configFileContent;
    let config;
    try {
        configFileContent = fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"](configFilepath).toString();
        config = JSON.parse(configFileContent);
    }
    catch (error) {
        _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error("Error occurred during the config file reading:");
        _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error(error.message);
        _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error("Stack: \n", error.stack);
    }
    config = configRootKey ? config[configRootKey] : config;
    try {
        config.actions = config.actions
            .reduce((acc, moduleName) => {
            if (moduleName.charAt(0) === ".") {
                moduleName = path__WEBPACK_IMPORTED_MODULE_1__["join"](rootdir, moduleName);
            }
            // native require is node.js require (require is webpack replacement, not node.js' one)
            const actions = Object(_nativeRequire__WEBPACK_IMPORTED_MODULE_2__["nativeRequire"])(moduleName).actions;
            const filteredActions = actions.filter(_actionHelpers__WEBPACK_IMPORTED_MODULE_5__["isAction"]);
            console.log(actions, filteredActions);
            filteredActions.forEach(action => {
                const names = Array.isArray(action.name) ? action.name : [action.name];
                names.forEach(name => {
                    acc[name] = action;
                });
            });
            return acc;
        }, {});
    }
    catch (error) {
        _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error("Error occurred during modules loading from config.actions:");
        _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error(error.message);
        _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error("Stack: \n", error.stack);
    }
    return {
        config,
        rootdir,
    };
};


/***/ }),

/***/ "./src/helpers/CLIHelpers/paramHelpers.ts":
/*!************************************************!*\
  !*** ./src/helpers/CLIHelpers/paramHelpers.ts ***!
  \************************************************/
/*! exports provided: isParam, isParamName, isParamType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParam", function() { return isParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParamName", function() { return isParamName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParamType", function() { return isParamType; });
const isParam = (param) => {
    const name = param.name;
    const type = param.type;
    const description = param.description;
    let isNameValid = isParamName(name);
    if (!isNameValid && Array.isArray(name))
        isNameValid = name.every(isParamName);
    let isTypeValid = isParamType(type);
    if (!isTypeValid && Array.isArray(type))
        isTypeValid = type.every(isParamType);
    return (isNameValid && isTypeValid);
};
const isParamName = (value) => typeof value === "string";
const isParamType = (value) => typeof value.type === "number" && typeof value.isArray === "boolean";


/***/ }),

/***/ "./src/helpers/FSHelpers.ts":
/*!**********************************!*\
  !*** ./src/helpers/FSHelpers.ts ***!
  \**********************************/
/*! exports provided: FSHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSHelpers", function() { return FSHelpers; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
// ------------------------------------------------------------
// File System Helpers
// ------------------------------------------------------------


var FSHelpers;
(function (FSHelpers) {
    FSHelpers.CONFIG_FILE_NAME = "vladnet.json";
    FSHelpers.readJSONFromFile = (filename) => {
        const exists = fs__WEBPACK_IMPORTED_MODULE_0__["existsSync"](filename);
        if (!exists)
            return null;
        const content = fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"](filename).toString();
        let result;
        try {
            result = JSON.parse(content);
        }
        catch (err) {
            console.error("Fuck", err.stack);
            result = null;
        }
        return result;
    };
    FSHelpers.findPathUpSync = (filename, workdir = process.cwd()) => {
        workdir = path__WEBPACK_IMPORTED_MODULE_1__["normalize"](workdir);
        const pathParts = workdir.split(path__WEBPACK_IMPORTED_MODULE_1__["sep"]);
        let currentDirname = workdir;
        let result;
        for (let i = 0; i < pathParts.length; i++) {
            const pathName = path__WEBPACK_IMPORTED_MODULE_1__["join"](currentDirname, filename);
            if (fs__WEBPACK_IMPORTED_MODULE_0__["existsSync"](pathName)) {
                result = path__WEBPACK_IMPORTED_MODULE_1__["join"](currentDirname, filename);
                break;
            }
            currentDirname = path__WEBPACK_IMPORTED_MODULE_1__["dirname"](currentDirname);
        }
        return result;
    };
})(FSHelpers || (FSHelpers = {}));


/***/ }),

/***/ "./src/helpers/logger.ts":
/*!*******************************!*\
  !*** ./src/helpers/logger.ts ***!
  \*******************************/
/*! exports provided: ELogLevel, colorMap, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELogLevel", function() { return ELogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorMap", function() { return colorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
var ELogLevel;
(function (ELogLevel) {
    ELogLevel["ok"] = " | ok";
    ELogLevel["info"] = "";
    ELogLevel["warn"] = " | warn";
    ELogLevel["error"] = " | error";
})(ELogLevel || (ELogLevel = {}));
const colorMap = {
    [ELogLevel.ok]: "\x1b[32m",
    [ELogLevel.info]: "\x1b[0m",
    [ELogLevel.warn]: "\x1b[33m",
    [ELogLevel.error]: "\x1b[31m",
};
const log = (level, ...messages) => {
    console.log(colorMap[level], `[vladnet${level}]`, ...messages);
};
const logger = {
    ok: (...messages) => log(ELogLevel.ok, ...messages),
    info: (...messages) => log(ELogLevel.info, ...messages),
    warn: (...messages) => log(ELogLevel.warn, ...messages),
    error: (...messages) => log(ELogLevel.error, ...messages),
    log: (level, ...messages) => log(level, ...messages),
};


/***/ }),

/***/ "./src/helpers/nativeRequire.ts":
/*!**************************************!*\
  !*** ./src/helpers/nativeRequire.ts ***!
  \**************************************/
/*! exports provided: nativeRequire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nativeRequire", function() { return nativeRequire; });
const nativeRequire = ( true ? require : undefined);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CLI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CLI */ "./src/CLI.ts");

const cli = new _CLI__WEBPACK_IMPORTED_MODULE_0__["CLI"]({
    workdir: "D:\\js\\cli-runner\\test\\@vladnets\\packages\\cli\\cli-runner",
});
console.log("cli 2", cli);


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map