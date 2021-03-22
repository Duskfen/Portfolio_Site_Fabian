(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(50);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(52);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(27);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(20);

var _helpers = __webpack_require__(53);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _css_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_loading_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Loading_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _img_Loading_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Loading_gif__WEBPACK_IMPORTED_MODULE_7__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var LoadingScreen = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LoadingScreen, _Component);

  var _super = _createSuper(LoadingScreen);

  function LoadingScreen() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoadingScreen);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoadingScreen, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "loadingScreen"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadingItem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_Loading_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "loading..."
      })));
    }
  }]);

  return LoadingScreen;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoadingScreen);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(51)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuspenseContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);


/**
* It take react component as children and using suspense api to show fallback component
* for lazy loading component using React.lazy https://reactjs.org/docs/code-splitting.html
* @param props children i.e React Component
*/

function SuspenseContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingScreen__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }, props.children); //return <Suspense fallback={<p>Das ist Suspense</p>}>{props.children}</Suspense>;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_project_overview_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69);
/* harmony import */ var _css_project_overview_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_project_overview_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43);
/* harmony import */ var _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_15__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var ProjectInformation = __webpack_require__(64);





var right_arrow = __webpack_require__(70);



var ProjectList = /*#__PURE__*/function () {
  function ProjectList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, ProjectList);

    this.projects = [];

    var _iterator = _createForOfIteratorHelper(ProjectInformation.projects),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var project = _step.value;
        this.projects.push(new Project(project));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(ProjectList, [{
    key: "getProjectAt",
    value: function getProjectAt(index) {
      if (index < 0) {
        return this.projects[this.projects.length + index % this.projects.length];
      }

      return this.projects[index % this.projects.length];
    }
  }]);

  return ProjectList;
}();

var Project = function Project(information) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Project);

  //this.path = information.path;
  this.title = information.title;
  this.textheading = information.textheading;
  this.subtext = information.subtext;
  this.titleImage = __webpack_require__(72)("./".concat(information.path, "/main.png"));
  this.images = [];

  for (var i = 0; i < information.count_imgs; i++) {
    this.images.push(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6___default()({
      id: "./projects//img/${i}.png",
      load: function load() {
        return Promise.all([__webpack_require__(73)("./".concat(information.path, "/img/").concat(i, ".png"))]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return path__WEBPACK_IMPORTED_MODULE_5___default.a.join(__dirname, "./projects/".concat(information.path, "/img/").concat(i, ".png"));
      },
      resolve: function resolve() {
        return /*require.resolve*/(__webpack_require__(74).resolve("./".concat(information.path, "/img/").concat(i, ".png")));
      },
      chunkName: function chunkName() {
        return "projects/".concat(information.path, "/img/").concat(i, ".png");
      }
    }));
  }
};

var Index = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Index);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "nextPicture", function (ev) {
      _this.setState({
        currentProject: _this.state.currentProject + 1
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "openProjectdetails", function (ev) {
      _this.setState({
        showDetails: true
      });

      var test = document.querySelector("#project_overview_section");
      console.log(test);
      test.classList.add("project_overview_section_clicked"); // todo load project Details 
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "showProjectTitle", function (ev) {
      return _this.setState({
        showMarquee: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "hideProjectTitle", function (ev) {
      return _this.setState({
        showMarquee: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this), "calculateMarqueeKeyFrames", function () {
      var marquee = document.querySelector("#marquee");
      var keyFrames = document.createElement("style");
      keyFrames.innerHTML = "@keyframes floatText {\n         0%{\n            left: 100%\n         }\n         100% {\n           left: -".concat(marquee.scrollWidth + 30, "px\n         }\n       }");
      marquee.appendChild(keyFrames);
    });

    _this.state = {
      projects: new ProjectList(),
      currentProject: 0,
      showDetails: false,
      showMarquee: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Index, [{
    key: "wait",
    value: function wait(ms) {
      var start = new Date().getTime();
      var end = start;

      while (end < start + ms) {
        end = new Date().getTime();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "projectDetailWrapper"
      }, this.state.showMarquee ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "marquee",
        "data-aos": "fade-down"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "marquee_text"
      }, this.state.projects.getProjectAt(this.state.currentProject).title)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "head_items",
        "data-aos": "fade-down"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _img_logo_full_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "logo",
        className: "full_logo"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "portfolio"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "project_overview_wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "line"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "project_overview_section",
        onClick: function onClick(ev) {
          return _this2.openProjectdetails(ev);
        },
        onMouseOver: function onMouseOver(ev) {
          return _this2.showProjectTitle(ev);
        },
        onMouseLeave: function onMouseLeave(ev) {
          return _this2.hideProjectTitle(ev);
        },
        "data-aos": "zoom-in"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("picture", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: this.state.projects.getProjectAt(this.state.currentProject).titleImage,
        alt: this.state.projects.getProjectAt(this.state.currentProject).title,
        className: "TitleImage"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("picture", {
        id: "#picturebefore"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: this.state.projects.getProjectAt(this.state.currentProject - 1).titleImage,
        alt: this.state.projects.getProjectAt(this.state.currentProject - 1).title,
        className: "TitleImage"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "line"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("footer", {
        "data-aos": "fade-up"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "footer_overview_items"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "/branding"
      }, "branding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "/about"
      }, "\xFCber mich"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#",
        className: "right_arrow",
        onClick: function onClick(ev) {
          return _this2.nextPicture(ev);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: right_arrow
      }))))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      aos__WEBPACK_IMPORTED_MODULE_11___default.a.init();
      document.querySelector("#loadingScreen").remove();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.state.showMarquee ? this.calculateMarqueeKeyFrames() : null;
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_circle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75);
/* harmony import */ var _css_circle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_circle_css__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var circle;
var context;
var mouseX = -30;
var mouseY = -30;
var canvasPos;

var MouseCircle = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(MouseCircle, _Component);

  var _super = _createSuper(MouseCircle);

  function MouseCircle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MouseCircle);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setMousePosition", function (e) {
      mouseX = e.clientX; //- canvasPos.x;

      mouseY = e.clientY; //- canvasPos.y;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "update", function () {
      circle.style.left = mouseX - 30 + "px";
      circle.style.top = mouseY - 30 + "px";
      requestAnimationFrame(_this.update);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MouseCircle, [{
    key: "fillCircle",
    value: function fillCircle(e) {
      circle.style.backgroundColor = "#fad2aa";
      setTimeout(function () {
        circle.style.backgroundColor = "transparent";
      }, 300);
    }
  }, {
    key: "clickCircle",
    value: function clickCircle(ev) {
      var ripple = document.querySelector("#circle .ripple");
      ripple.classList.add("rippleactive");
      setTimeout(function () {
        ripple.classList.remove("rippleactive");
      }, 400);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ripple"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      circle = document.getElementById("circle");
      document.addEventListener("mousemove", this.setMousePosition, false);
      document.addEventListener("click", this.clickCircle, false); // document.addEventListener("click", this.fillCircle, false)

      this.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousemove", this.setMousePosition);
    }
  }]);

  return MouseCircle;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MouseCircle);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _components_ReactSuspenseWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11);
/* harmony import */ var _components_circle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Dynamic = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.lazy(function () {
  return babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_6___default()({
    id: "containers/Dynamic",
    load: function load() {
      return Promise.all([Promise.resolve(/* import() | containers/Dynamic */).then(__webpack_require__.bind(null, 34))]).then(function (proms) {
        return proms[0];
      });
    },
    path: function path() {
      return path__WEBPACK_IMPORTED_MODULE_5___default.a.join(__dirname, 'containers/Dynamic');
    },
    resolve: function resolve() {
      return /*require.resolve*/(34);
    },
    chunkName: function chunkName() {
      return "containers/Dynamic";
    }
  });
});






var App = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_circle__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ReactSuspenseWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_9__["Router"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_8__["Routes"], {
        path: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Dynamic, {
        path: "dynamic"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_8__["Routes"], {
        path: "*"
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(12);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/main.3dc3237d.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/main.a05ce779.png";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("D:\\Documents\\Projekte\\2021\\Webseite_Fabian_Schwarzinger\\Program2\\PorfolioFabian\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Branding = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Branding, _Component);

  var _super = _createSuper(Branding);

  function Branding() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Branding);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Branding, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "brandingWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "About me page is not implemented yet"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector("#loadingScreen").remove();
    }
  }]);

  return Branding;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Branding);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Branding = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Branding, _Component);

  var _super = _createSuper(Branding);

  function Branding() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Branding);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Branding, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "brandingWrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Branding page is not implemented yet"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector("#loadingScreen").remove();
    }
  }]);

  return Branding;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Branding);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.f44b4d09.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.692c5a9f.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0.f44b4d09.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1.692c5a9f.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(17);

var _router = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Loading.32262628.gif";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzYzLjA2IDU5Ny4xNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmYWQyYWE7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJFYmVuZV8xIiBkYXRhLW5hbWU9IkViZW5lIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU0My4yNSwyNTEuNzVsOC4xOC0uNTV2LTkuNDhjMC0xMS43Nyw1LjgtMTcuNTcsMTcuMy0xNy41Nyw1LjQzLDAsMTAuODUsMi4zOSwxMy40Myw4LjI4bC05LjIsNC44OGMtLjU1LTYuMzUtMy41OS0xMC43Ny03LjA4LTEwLjc3LTYuNzIsMC02LjYzLDEwLjg2LTYuNjMsMjIuMDh2Mi4xMmwxNy44NS0xLjExLTEuMSw2LjYzLTE2Ljc1LTEuMnYyNS43NmMwLDEzLjUyLDMsMTUuNTUsMywxNS41NUg1NDkuNjlzMS43NC0yLDEuNzQtMjJ2LTIwbC04LjE4LS41NVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MDQuNDEsMjY5LjIzYzQuODcsMCw5LjI5LjI4LDExLjY4LjQ2LS41NS0xMi41MS01LjE1LTE2LjM4LTEyLjg4LTE2LjM4LTYuMjYsMC0xMi42LDUuMTYtMTYuMSwxMi42MWgtLjE4bC0xLjQ4LTEwLjEyYzctNi45LDEzLjM0LTksMjAuOC05LDEwLjExLjEsMTcuNjYsNi4wNywxNy42NiwyMS4xNlYyODEuMWMwLDkuNjYsMS44NCwxMS41OSwyLjU3LDEydi4xOGwtMTAuNjcsNC4wNS4wOS0xMi4wNWMtNSw3LjE3LTExLjg2LDExLjc3LTE5LjUsMTEuNzctOC40NiwwLTE0LTUuNjEtMTQtMTIuNTFDNTgyLjQyLDI3NS42Nyw1ODguNjcsMjY5LjIzLDYwNC40MSwyNjkuMjNabS01LDIxLjUzYzYuNzEsMCwxMi4xNC0zLjg3LDE2LjU2LTkuODVsLjA5LTguMjhjLTIyLC4xLTI0LjkzLDUuNzEtMjQuOTMsMTAuMzFDNTkxLjE2LDI4OS4xLDU5Ni4yMiwyOTAuNzYsNTk5LjQ0LDI5MC43NloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MzUuMjIsMjMybDExLjg3LTcuODJ2MzIuMTFjMy43Ny01LjA2LDEwLTkuNjYsMTguMjEtOS42NiwxMC44NiwwLDE5Ljc4LDkuMiwxOS43OCwyNC4zOCwwLDEzLjUyLTEyLjc5LDI2LjIyLTI1LDI2LjIyLTUuMjUsMC0xMC43Ny0xLjY2LTE0LjA4LTUuMTZsLTguMDksNS41Mi0uMTktLjE4YTQzLjM3LDQzLjM3LDAsMCwwLDEuNTYtMTJWMjM5LjdjMC02LjYyLTMtNy40NS00LTcuNTRaTTY2MiwyOTIuNmM4LjI4LjE4LDE0LjM1LTYuNzIsMTQuMzUtMTkuNzhDNjc2LjM0LDI2MS40MSw2NzAsMjUzLDY2MiwyNTNjLTcuMTgsMC0xMiwzLjIyLTE0LjksNy42M1YyODEuMUM2NDkuNzUsMjg5LjE5LDY1Ni4zOCwyOTIuNiw2NjIsMjkyLjZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjk0LjYyLDI1My4xMyw3MDcsMjQ3LjYxdjMzLjIxYzAsMTMuNTIsMywxNS41NSwzLDE1LjU1SDY5Ny40N3MxLjY2LTIsMS42Ni0yMmwuMDktMTAuNThjMC04LjE5LTMuMzEtMTAtNC42LTEwLjM5Wm0zLjUtMTkuNWE0LjY5LDQuNjksMCwxLDEsNC42OSw0LjY5QTQuNyw0LjcsMCwwLDEsNjk4LjEyLDIzMy42M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NDIuNzUsMjY5LjIzYzQuODgsMCw5LjMuMjgsMTEuNjkuNDYtLjU1LTEyLjUxLTUuMTUtMTYuMzgtMTIuODgtMTYuMzgtNi4yNiwwLTEyLjYxLDUuMTYtMTYuMSwxMi42MWgtLjE5TDcyMy44LDI1NS44YzctNi45LDEzLjM0LTksMjAuNzktOSwxMC4xMi4xLDE3LjY3LDYuMDcsMTcuNjcsMjEuMTZWMjgxLjFjMCw5LjY2LDEuODQsMTEuNTksMi41NywxMnYuMThsLTEwLjY3LDQuMDUuMDktMTIuMDVjLTUsNy4xNy0xMS44NiwxMS43Ny0xOS41LDExLjc3LTguNDYsMC0xNC01LjYxLTE0LTEyLjUxQzcyMC43NywyNzUuNjcsNzI3LDI2OS4yMyw3NDIuNzUsMjY5LjIzWm0tNSwyMS41M2M2LjcxLDAsMTIuMTQtMy44NywxNi41Ni05Ljg1bC4wOS04LjI4Yy0yMiwuMS0yNC45Myw1LjcxLTI0LjkzLDEwLjMxQzcyOS41MSwyODkuMSw3MzQuNTcsMjkwLjc2LDczNy43OSwyOTAuNzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzg2LjIxLDI0Ny42MXYxMS44N2MzLjc3LTYuNDQsMTAuNDgtMTIuNiwxOC4zOS0xMi42LDkuNzYsMCwxNyw2LDE3LDIxLjA2djEyLjg4Yy4zNywxMy41MiwyLjEyLDE1LjU1LDIuMTIsMTUuNTVIODEzLjA3cy42NC0yLC43My0yMnYtMi45NGMwLTEzLTQuNDEtMTcuMzktMTIuNi0xNy41Ny02LDAtMTEuNzcsMy45NS0xNSwxMC4zdjE2LjY1YzAsMTMuNTIsMi4xMSwxNS41NSwyLjExLDE1LjU1SDc3Ny42NXMuNzQtMiwuNzQtMjJsLjA5LTEwLjU4YzAtOS40Ny0yLjEyLTEwLjc2LTIuNDktMTAuNzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTgyLjUzLDM1My4zMmgtLjI4Yy0zLjY4LTYuNDQtMTAuNTgtOC45My0xNi43NC04LjkzLTUuNzEsMC0xMC4yMSwxLjU3LTEwLjIxLDUuOCwwLDMuNTksMi4zLDUuOCwxMS4xMyw5bDMuNCwxLjI4YzEyLjUxLDQuODgsMTUuNTUsOC4yOCwxNS41NSwxNC4xNywwLDcuNjQtNi44MSwxNC40NC0xOC42OCwxNC40NC04LDAtMTUuOTEtMy43Ny0yMC03LjcybDEtMTAuODYuMTktLjA5YzMuNjgsNy41NCwxNCwxMi43OSwyMS4wNiwxMi43OXM5LjY2LTIuODYsOS42Ni02LjA4YzAtMy44Ni0yLjQ4LTYtMTEuMjItOS4zOEw1NjMsMzY2LjJjLTEwLjM5LTMuODctMTQuNzEtNi45LTE0LjcxLTE0czguMDktMTMuNDMsMTguMy0xMy40M0EzMi4wNSwzMi4wNSwwLDAsMSw1ODQuNTUsMzQ0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYxNy44MSwzNDQuMTJjLTkuNTcsMC0xNC4zNSw1Ljg5LTE0LjM1LDE4Ljg2LDAsMTIuNiw3LjA4LDIwLjMzLDE3LDIwLjMzLDguNTUsMCwxNC44MS02LjI2LDE3LjI5LTExLjc4SDYzOHY0Ljg4Yy0xLjY2LDQtNy42NCwxMi40Mi0yMC4xNSwxMi40Mi0xMSwwLTIzLjM3LTguMS0yMy4zNy0yNCwwLTE0LjE3LDEzLjUzLTI2LjIyLDI2LjMxLTI2LjIyLDguMTksMCwxNS4wOSwzLjY4LDE4LDkuMTFMNjM0LjU1LDM1N0g2MzRDNjMyLjQ0LDM1MS41Nyw2MjYuMzcsMzQ0LjEyLDYxNy44MSwzNDQuMTJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjQ3LjA4LDMyMy43OWwxMS44Ni03LjY0djM1LjMzYzMuNzctNi40NCwxMC40OS0xMi42LDE4LjQtMTIuNiw5Ljc1LDAsMTcsNiwxNywyMS4wNnYxMi44OGMuMzcsMTMuNTIsMi4xMiwxNS41NSwyLjEyLDE1LjU1SDY4NS44cy42NS0yLC43NC0yMnYtMi45NGMwLTEzLTQuNDEtMTcuMzktMTIuNi0xNy41Ny02LDAtMTEuNzgsMy45NS0xNSwxMC4zdjE2LjY1YzAsMTMuNTIsMi4xMiwxNS41NSwyLjEyLDE1LjU1SDY1MC4zOXMuNzMtMiwuNzMtMjJWMzMxLjYxYzAtNi40NC0yLjk0LTcuMzYtNC03LjU1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTcxMS4zNSwzNDAuODFjLjE4LDUuMjQsMS44Myw5LjkzLDEyLjUxLDM3LjlsOS4zOC0zMC0zLjMxLTcuOTFoMTFhNDEuOTIsNDEuOTIsMCwwLDAsMi4yLDkuOTNsOC43NCwyOC4xNUM3NjEuMzksMzUxLjc1LDc2MywzNDUuNSw3NjMsMzQwLjYyaDguNTZsLTE5LjIzLDQ3Ljc1aC0yLjc2bC0xMy4yNC0zMi4xMUw3MjQuNSwzODguMzdoLTIuNzZsLTIyLjI2LTQ3LjU2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc5Ny41NywzNjEuMjNjNC44NywwLDkuMjkuMjgsMTEuNjguNDYtLjU1LTEyLjUxLTUuMTUtMTYuMzgtMTIuODgtMTYuMzgtNi4yNiwwLTEyLjYsNS4xNi0xNi4xLDEyLjYxaC0uMThsLTEuNDctMTAuMTJjNy02LjksMTMuMzMtOSwyMC43OS05LDEwLjEyLjEsMTcuNjYsNi4wNywxNy42NiwyMS4xNlYzNzMuMWMwLDkuNjYsMS44NCwxMS41OSwyLjU3LDEydi4xOEw4MDksMzg5LjI5bC4xLTEyLjA1Yy01LDcuMTctMTEuODcsMTEuNzctMTkuNTEsMTEuNzctOC40NiwwLTE0LTUuNjEtMTQtMTIuNTFDNzc1LjU4LDM2Ny42Nyw3ODEuODQsMzYxLjIzLDc5Ny41NywzNjEuMjNabS01LDIxLjUzYzYuNzEsMCwxMi4xNC0zLjg3LDE2LjU2LTkuODVsLjA5LTguMjhjLTIyLC4xLTI0LjkzLDUuNzEtMjQuOTMsMTAuMzFDNzg0LjMyLDM4MS4xLDc4OS4zOCwzODIuNzYsNzkyLjYsMzgyLjc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg0MSwzMzkuNjF2MTAuNzZjMi45NC02LDcuODItMTEuNDksMTQuMzUtMTEuNDksNS40MywwLDguNzQsMi4yLDEwLjQ5LDQuNjlsLTIuMjEsOS44NC0uMzctLjA5Yy0uODMtNC43OS01LjI0LTcuNjQtMTAuNTgtNy42NC01LDAtOSwzLjg3LTExLjY4LDkuOTR2MTcuMmMwLDEzLjUyLDIuMTEsMTUuNTUsMi4xMSwxNS41NUg4MzIuNDZzLjc0LTIsLjc0LTIybC4wOS0xMC41OGMwLTkuNDctMi4xMS0xMC43Ni0yLjQ4LTEwLjc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg2OS45NCwzODhjMjguMjQtMzUuODgsMzAuMTgtMzguMzYsMzIuNjYtNDMuMzNsLTIwLjQyLDEuNDdjLTQuNi43NC05LDIuMzktMTAuNjgsMy41bC0uMTgtLjA5LDEuMzgtOS4yLDMyLC41NUg5MTUuM2wtMjYuNSwzNC41OWEzNi45LDM2LjksMCwwLDAtNS41Miw5LjJsMjEtMS4yOWEyOS4zOSwyOS4zOSwwLDAsMCwxMC40LTMuNjhsLjE5LjA5LTEuMzgsOC44My00My42MS0uMjdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTIyLjczLDM0NS4xM2wxMi4zMy01LjUydjMzLjIxYzAsMTMuNTIsMywxNS41NSwzLDE1LjU1SDkyNS41OHMxLjY2LTIsMS42Ni0yMmwuMDktMTAuNThjMC04LjE5LTMuMzEtMTAtNC42LTEwLjM5Wm0zLjUtMTkuNWE0LjY5LDQuNjksMCwxLDEsNC42OSw0LjY5QTQuNyw0LjcsMCwwLDEsOTI2LjIzLDMyNS42M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05NjAuNCwzMzkuNjF2MTEuODdjMy43Ny02LjQ0LDEwLjQ5LTEyLjYsMTguNC0xMi42LDkuNzUsMCwxNyw2LDE3LDIxLjA2djEyLjg4Yy4zNywxMy41MiwyLjEyLDE1LjU1LDIuMTIsMTUuNTVIOTg3LjI3cy42NC0yLC43My0yMnYtMi45NGMwLTEzLTQuNDEtMTcuMzktMTIuNi0xNy41Ny02LDAtMTEuNzgsMy45NS0xNSwxMC4zdjE2LjY1YzAsMTMuNTIsMi4xMiwxNS41NSwyLjEyLDE1LjU1SDk1MS44NXMuNzMtMiwuNzMtMjJsLjEtMTAuNThjMC05LjQ3LTIuMTItMTAuNzYtMi40OS0xMC43NloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDE4LjIxLDM4My42OGMtNS4wNi0uNzQtOC44My0yLjMtOC44My02LjI2LDAtNC4yMyw0Ljc4LTYuNjIsOS43NS04LjM3YTE0LjI1LDE0LjI1LDAsMCwxLTkuMzktMTMuOGMwLTkuMTEsOS40OC0xNi42NSwyMS41My0xNi42NSw2LDAsMTAuNzYsMS40NywxMy44OSw0LjIzLDMuNDEuMDksNi45LTEuMiwxMC44Ni0zLjY4bDEuMTksOC4yOC05LjEtLjQ2YTE1Ljc3LDE1Ljc3LDAsMCwxLDEuMzgsNi44MWMwLDguMTktOS4xMSwxNi42NS0yMi40NSwxNi42NWEyMSwyMSwwLDAsMS01LS41NWMtMywxLjEtNS4xNSwyLjMtNS4xNSw0LjIzLDAsNy43MywzNi4zNC0uMzcsMzYuMzQsMTUuMDksMCw4Ljc0LTExLjY5LDE2LjEtMjYsMTYuMS04LjA5LDAtMTguODUtMi44Ni0xOC44NS0xMC42OEMxMDA4LjQ2LDM5MC4yMSwxMDEyLjc4LDM4Ni40NCwxMDE4LjIxLDM4My42OFptMTIuMjMsMTguM2M4LjM3LDAsMTQuMzUtNC44NywxNC4zNS05LjEsMC04LjM4LTEzLjE1LTcuODItMjMuMzYtOC43NC0zLjU5LDEuODQtNC41MSw0LjMyLTQuNTEsNy43MkMxMDE2LjkyLDM5OC4zLDEwMjEuMjQsNDAyLDEwMzAuNDQsNDAyWm0xLjM4LTM1LjIzYzUuNDMsMCw5Ljg1LTQuMjMsOS44NS0xMC40LDAtOS4xLTYuMDgtMTQuMzUtMTQuMTctMTQuMzUtNi42MiwwLTkuOTQsMy40MS05Ljk0LDEwLjY3QzEwMTcuNTYsMzYwLjc3LDEwMjMuMjcsMzY2Ljc1LDEwMzEuODIsMzY2Ljc1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwODYuMTcsMzM4LjZjMTEuNjksMCwyMC42MSw4LjQ2LDIwLjYxLDI1Ljc2aC0zNi4zNGMuOTIsMTEuMTMsNy4yNywxOC45NSwxNy40OCwxOC45NSw5LjI5LDAsMTQuNDUtNi4zNSwxNi44NC0xMmguMTh2NS4wNmMtMS42NSw0LTcsMTIuNDItMjAuNywxMi40Mi0xMi4zMiwwLTIyLjU0LTguNjUtMjIuNTQtMjQuNTZDMTA2MS43LDM0OS43MywxMDc0LjQ5LDMzOC42LDEwODYuMTcsMzM4LjZabTExLjY5LDIwLjdjLTEuMi0xMS02LjYzLTE1LjM3LTE1LjI3LTE1LjM3LTcuMjcsMC0xMiw0LjctMTIuMjQsMTYuNjZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTEyNy41LDMzOS42MXYxMC43NmMyLjk0LTYsNy44Mi0xMS40OSwxNC4zNS0xMS40OSw1LjQzLDAsOC43NCwyLjIsMTAuNDksNC42OWwtMi4yMSw5Ljg0LS4zNy0uMDljLS44Mi00Ljc5LTUuMjQtNy42NC0xMC41OC03LjY0LTUsMC05LDMuODctMTEuNjgsOS45NHYxNy4yYzAsMTMuNTIsMi4xMiwxNS41NSwyLjEyLDE1LjU1SDExMTlzLjczLTIsLjczLTIybC4wOS0xMC41OGMwLTkuNDctMi4xMS0xMC43Ni0yLjQ4LTEwLjc2WiIvPjwvZz48ZyBpZD0iRWJlbmVfMyIgZGF0YS1uYW1lPSJFYmVuZSAzIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNjQuNDEsMzMxLjUzYy00LjA2LDQtNyw2Ljg4LTguNjYsOC42NC0uNzQuNzYtMS4yMywxLjI5LTEuNDksMS42MWwtLjIuMjNjLTguNzEsMTAuNTEtMi4zMywyMy42Ny0yLjI3LDIzLjhsMCwuMTFhMTcuMzIsMTcuMzIsMCwwLDAsNi43NCw4LjM2LDE3Ljg1LDE3Ljg1LDAsMCwwLDI0LjYxLTQuODNoMGExNy4yNCwxNy4yNCwwLDAsMCwyLjY1LTEzLjE1bC03LjYtMzcuNzlDMzczLjE1LDMyMy4yMiwzNjguMjUsMzI3LjgyLDM2NC40MSwzMzEuNTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDA5LjM5LDI0MS45YTE3LjQsMTcuNCwwLDAsMC02LjczLTguMzYsMTcuNzUsMTcuNzUsMCwwLDAtMTMuMzMtMi42MiwxNy41NywxNy41NywwLDAsMC0xMS4yOCw3LjQ1aDBhMTcuMjUsMTcuMjUsMCwwLDAtMi42NCwxMy4xNGw3LjYsMzcuNzljNS4wOS00LjcsMTAtOS4zLDEzLjgyLTEzLDQuMDctNCw3LTYuODgsOC42Ny04LjY0Ljc0LS43NiwxLjIyLTEuMjgsMS40OS0xLjZsLjItLjI0YzguNy0xMC41MSwyLjMzLTIzLjY2LDIuMjYtMjMuOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zODAuNjIsMTg2LjkyYy02NS4zNywwLTExOC4zNSw1Mi4zOC0xMTguMzUsMTE3czUzLDExNywxMTguMzUsMTE3UzQ5OSwzNjguNTMsNDk5LDMwMy45MSw0NDYsMTg2LjkyLDM4MC42MiwxODYuOTJaTTQwNiwyOTMuMjdzLTcuNiw2LjgxLTE2LjgyLDE1LjIybDkuMSw0NS4zN2EyOS41NSwyOS41NSwwLDAsMS00LjU0LDIyLjU2LDMwLjE2LDMwLjE2LDAsMCwxLTE5LjM0LDEyLjc3LDMwLjQ4LDMwLjQ4LDAsMCwxLTIyLjgtNC40OCwzMCwzMCwwLDAsMS0xMi41LTE3LjI5Yy0uMTYtLjYxLS4zLTEuMjItLjQzLTEuODItLjE3LS44My0uMy0xLjY5LS40MS0yLjY1YTIzLjcsMjMuNywwLDAsMSw3LjM4LTE5LjM3bDMyLTMxLjA4YzEuODUtMS43OCwzLjY3LTMuNTUsNS40NS01LjI4TDQwNiwyODVabTkuNjctMjktMzIsMzEuMDhjLTEuODUsMS43OC0zLjY3LDMuNTYtNS40NCw1LjI5bC0yMi45MSwyMi4yNHYtOC4zczcuNTktNi44MSwxNi44MS0xNS4yMkwzNjMsMjU0YTI5LjU1LDI5LjU1LDAsMCwxLDQuNTUtMjIuNTYsMzAuMTIsMzAuMTIsMCwwLDEsMTkuMzQtMTIuNzgsMzEuMTYsMzEuMTYsMCwwLDEsNi0uNTksMzAuNDcsMzAuNDcsMCwwLDEsMTYuODIsNS4wNywzMCwzMCwwLDAsMSwxMi40OSwxNy4yOWMuMTYuNjEuMzEsMS4yMi40MywxLjgzLjE3LjgyLjMsMS42OC40MSwyLjY0QTIzLjY0LDIzLjY0LDAsMCwxLDQxNS42MywyNjQuMjRaIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(47);
module.exports = __webpack_require__(54);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(46)["default"];

var _require = __webpack_require__(25),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(25),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(48),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/404 */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/components/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/about */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/about";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/components/about.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/branding.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/components/branding */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/branding.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/branding";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/components/branding.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/circle.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/circle.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/circle";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/components/circle.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/index";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/components/index.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/LoadingScreen.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 11))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/LoadingScreen.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/LoadingScreen";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/components/LoadingScreen.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/components/ReactSuspenseWrapper.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 14))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/components/ReactSuspenseWrapper.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/components/ReactSuspenseWrapper";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/components/ReactSuspenseWrapper.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/components/404.js': t_0,
  '__react_static_root__/src/components/about.js': t_1,
  '__react_static_root__/src/components/branding.js': t_2,
  '__react_static_root__/src/components/circle.js': t_3,
  '__react_static_root__/src/components/index.js': t_4,
  '__react_static_root__/src/components/LoadingScreen.js': t_5,
  '__react_static_root__/src/components/ReactSuspenseWrapper.js': t_6
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/components/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 12,
	"./": 12,
	"./index": 12,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 51;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(26);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(27);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(28);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(29);

var _interopRequireWildcard = __webpack_require__(30);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(55);

var _Suspense = _interopRequireDefault(__webpack_require__(56));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(59)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("D:\\Documents\\Projekte\\2021\\Webseite_Fabian_Schwarzinger\\Program2\\PorfolioFabian\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(30);

var _interopRequireDefault = __webpack_require__(29);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(57));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(58));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ReactSuspenseWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  document.title = "Schwarzinger Fabian Portfolio";
  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "#loadingScreen{\r\n   position:absolute;\r\n   top: 0;\r\n   left:0;\r\n   height: 100%;\r\n   width:100%;\r\n   background-color: var(--background);\r\n}\r\n.loadingItem{\r\n   width:100%;\r\n   height: 100%;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n}", ""]);



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 64 */
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"path\":\"temp_project\",\"title\":\"BRANDING x LOGOTEMPDESIGN\",\"textheading\":\"logodesign\",\"subtext\":\"this is a temp project for testing purposes. yeah..\",\"count_imgs\":2},{\"path\":\"temp_project2\",\"title\":\"BRANDING x P2\",\"textheading\":\"propject 2 texthaeding\",\"subtext\":\"this is a temp project for testing purposes. yeah..\",\"count_imgs\":2}]}");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Imports
var urlEscape = __webpack_require__(66);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(67));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(68));

// Module
exports.push([module.i, "@font-face{\r\n   font-family: ClarikaProGrotesque;\r\n   src: url(" + ___CSS_LOADER_URL___0___ + ");\r\n   font-weight: normal;\r\n}\r\n@font-face{\r\n   font-family: ClarikaProGrotesque;\r\n   src: url(" + ___CSS_LOADER_URL___1___ + ");\r\n   font-weight: bold;\r\n}\r\n\r\n:root{\r\n   --background:#003a38;\r\n   --foreground: #fad2aa;\r\n}\r\n* {\r\n   scroll-behavior: smooth;\r\n   overflow:hidden;\r\n } \r\nhtml{\r\n   background-color: var(--background);\r\n   color: var(--foreground);\r\n   padding: 0;\r\n   font-family: ClarikaProGrotesque;\r\n}\r\nbody{\r\n   padding:0;\r\n   margin:0;\r\n}\r\nimg{\r\n   -o-object-fit: cover;\r\n      object-fit: cover;\r\n}\r\na{\r\n   text-decoration: none;\r\n   color: var(--foreground);\r\n}\r\n\r\n\r\n#root{height: 100%;}\r\n#projectDetailWrapper{\r\n   display: grid;\r\n   height: calc(100vh - 100px);\r\n   padding:50px;\r\n   grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n   grid-template-areas:\r\n   \"header\"\r\n   \"project_overview\"\r\n   \"project_overview\"\r\n   \"project_overview\"\r\n   \"footer\";\r\n}\r\n\r\n\r\nheader{\r\n   display: flex;\r\n   grid-area: header;\r\n   /* background-color: blue; */\r\n   align-items: flex-start ;\r\n}\r\n#head_items{\r\n   height:70px;\r\n   width:100%;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n\r\nfooter{\r\n   display: flex;\r\n   grid-area: footer;\r\n   /* background-color: red; */\r\n}\r\n#footer_overview_items{\r\n   display: flex;\r\n   width:100%;\r\n   align-items: flex-end;\r\n   justify-content: space-between;\r\n}\r\n#project_overview_wrapper{\r\n   grid-area: project_overview;\r\n   /* background-color: yellow; */\r\n}\r\n\r\n\r\n.full_logo{\r\n   width: 200px;\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n}\r\n.right_arrow{\r\n   width:60px;\r\n}", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ClarikaProGrot-Lt.25375b56.otf";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ClarikaProGrot-Md.28594521.otf";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "#project_overview_wrapper {\r\n   width: 100%;\r\n   height: 100%;\r\n   display: flex;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n}\r\n\r\n#project_overview_section {\r\n   width: 60%;\r\n   height: 80%;\r\n}\r\n\r\n#project_overview_section picture {\r\n   box-sizing: border-box;\r\n   margin: 0;\r\n   padding: 0;\r\n   border: 0;\r\n}\r\n\r\n#project_overview_section img {\r\n   cursor: pointer;\r\n   width: 120%;\r\n   height: 100%;\r\n   left: -10%;\r\n   position: relative;\r\n   transform: scale(1) translateZ(0);\r\n   -webkit-backface-visibility: hidden;\r\n           backface-visibility: hidden;\r\n   transition: transform 0.3s ease-out;\r\n}\r\n\r\n/* #project_overview_section img:hover{\r\n   transform: scale(1.08);\r\n   backface-visibility: hidden;\r\n   transition: transform 0.3s ease-out;\r\n} */\r\n\r\n.project_overview_section_clicked {\r\n   transform: perspective(1000px) translateZ(30px) !important;\r\n}\r\n\r\n.project_overview_section_clicked img {\r\n   transform: scale(0.9) !important;\r\n}\r\n\r\n#project_overview_wrapper .line {\r\n   border-bottom: 1px solid var(--foreground);\r\n   height: 0px;\r\n   width: calc(20% - 40px);\r\n   -webkit-animation: lineanimation 0.3s ease 0s;\r\n           animation: lineanimation 0.3s ease 0s;\r\n}\r\n\r\n#marquee {\r\n   z-index: 1;\r\n   height: 100%;\r\n   position: absolute;\r\n   top:0;\r\n   display:inline-flex;\r\n   align-items: center;\r\n   font-size: 130pt;\r\n   pointer-events: none;\r\n   white-space: nowrap;\r\n   -webkit-animation: floatText 8s infinite linear;\r\n           animation: floatText 8s infinite linear;\r\n}\r\n\r\n#marquee p {\r\n   margin:0;\r\n}\r\n\r\n\r\n@-webkit-keyframes lineanimation {\r\n   0% {\r\n      width: 0;\r\n   }\r\n   100% {\r\n      width: calc(20% - 40px);\r\n   }\r\n}\r\n\r\n\r\n@keyframes lineanimation {\r\n   0% {\r\n      width: 0;\r\n   }\r\n   100% {\r\n      width: calc(20% - 40px);\r\n   }\r\n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzYzLjA2IDU5Ny4xNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNmYWQyYWE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjI0cHg7fS5jbHMtMntmaWxsOiNmYWQyYWE7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJFYmVuZV8xIiBkYXRhLW5hbWU9IkViZW5lIDEiPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjgyNS4wOCIgeTE9IjI5OC41NyIgeDI9IjcyLjE4IiB5Mj0iMjk4LjU3Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9Ijc3MC40OCAyMjYuNTggODAxLjA2IDI5OC41NyA3NzAuNDggMzcwLjU2IDk0MS4xMyAyOTguNTcgNzcwLjQ4IDIyNi41OCIvPjwvZz48L3N2Zz4="

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("aos/dist/aos.css");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./temp_project/main.png": 21,
	"./temp_project2/main.png": 22
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 72;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./temp_project/img/0.png": [
		35,
		0
	],
	"./temp_project/img/1.png": [
		36,
		0
	],
	"./temp_project/main.png": [
		21
	],
	"./temp_project2/img/0.png": [
		37,
		0
	],
	"./temp_project2/img/1.png": [
		38,
		0
	],
	"./temp_project2/main.png": [
		22
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 73;
module.exports = webpackAsyncContext;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./temp_project/img/0.png": 35,
	"./temp_project/img/1.png": 36,
	"./temp_project/main.png": 21,
	"./temp_project2/img/0.png": 37,
	"./temp_project2/img/1.png": 38,
	"./temp_project2/main.png": 22
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = 74;
module.exports = webpackContext;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "#circle{\r\n   position: absolute;\r\n   width:60px;\r\n   height:60px;\r\n   border-bottom: 1px solid var(--foreground); \r\n   border-top: 1px solid var(--foreground); \r\n   /* border-left: 1px solid var(--foreground); */\r\n   border-radius: 30px;\r\n   transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n   pointer-events: none;\r\n   z-index: 1;\r\n   -webkit-animation: spin 5s linear infinite;\r\n           animation: spin 5s linear infinite;\r\n}\r\n\r\n.ripple\r\n{\r\n   pointer-events: none;\r\n    content: '';\r\n    position: absolute;\r\n    left:0px;\r\n    top:0px;\r\n    width:100%;\r\n    height:100%;\r\n    background-color: var(--foreground); /* Reddish background */\r\n    border-radius: 50%;\r\n}\r\n\r\n.ripple\r\n{\r\n   opacity: 0; /* This css rule makes #tb:after(ripple layer) invisible */\r\n   transform: scale(0,0);\r\n   transition: 0.2s;\r\n}\r\n\r\n.rippleactive\r\n{\r\n   background-color: var(--foreground); /* Reddish background */\r\n    opacity: 0.9;\r\n    transform: scale(1,1);\r\n    transition: transform 0.2s, opacity 0.5s;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n   0% {\r\n     transform: rotate(0deg);\r\n   }\r\n   100% {\r\n     transform: rotate(360deg);\r\n   }\r\n }\r\n\r\n@keyframes spin {\r\n   0% {\r\n     transform: rotate(0deg);\r\n   }\r\n   100% {\r\n     transform: rotate(360deg);\r\n   }\r\n }", ""]);



/***/ })
/******/ ]);
});