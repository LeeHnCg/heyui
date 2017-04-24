(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HeyUI"] = factory();
	else
		root["HeyUI"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 230);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _heyUtils = __webpack_require__(228);

var _heyUtils2 = _interopRequireDefault(_heyUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rclass = /[\t\r\n\f]/g;
var rnotwhite = /\S+/g;

function getClass(elem) {
  return elem.getAttribute && elem.getAttribute("class") || "";
}
exports.default = _heyUtils2.default.extend({}, _heyUtils2.default, {
  addClass: function addClass(elem, value) {
    var classes = void 0;
    var cur = void 0;
    var curValue = void 0;
    var clazz = void 0;
    var j = void 0;
    var finalValue = void 0;

    if (typeof value === "string" && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);
      cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

      if (cur) {
        j = 0;
        while (clazz = classes[j++]) {
          if (cur.indexOf(" " + clazz + " ") < 0) {
            cur += clazz + " ";
          }
        }
        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute("class", finalValue);
        }
      }
    }
  },
  removeClass: function removeClass(elem, value) {
    var classes = void 0;
    var cur = void 0;
    var curValue = void 0;
    var clazz = void 0;
    var j = void 0;
    var finalValue = void 0;

    if (typeof value === "string" && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);

      // This expression is here for better compressibility (see addClass)
      cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

      if (cur) {
        j = 0;
        while (clazz = classes[j++]) {
          while (cur.indexOf(" " + clazz + " ") > -1) {
            cur = cur.replace(" " + clazz + " ", ' ');
          }
        }

        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute("class", finalValue);
        }
      }
    }

    return this;
  },
  removeDom: function removeDom(elem) {
    if (elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  },
  hasClass: function hasClass(elem, selector) {
    var className = void 0;
    className = " " + selector + " ";
    if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
      return true;
    }

    return false;
  },
  initParam: function initParam(param, paramFrom, array) {
    if (this.isArray(array) && this.isObject(param) && this.isObject(param)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var a = _step.value;

          if (paramFrom[a]) param[a] = paramFrom[a];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    return param;
  },
  toggleValue: function toggleValue(list, value) {
    if (!this.isArray(list)) return;
    if (list.includes(value)) {
      list.splice(list.indexOf(value), 1);
    } else {
      list.push(value);
    }
  },
  padLeft: function padLeft(str, size) {
    var s = "00000" + str;
    return s.substr(s.length - size);
  },
  toggleValueByKey: function toggleValueByKey(list, key, value) {
    if (!this.isArray(list)) return;
    var index = -1;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator3.default)(list), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var l = _step2.value;

        if (this.isNull(l[key])) {
          continue;
        }
        index = list.indexOf(l);
        break;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(value);
    }
  },
  numList: function numList(start, end, step) {
    var data = [];
    for (var i = start; i < end; i = i + step) {
      data.push(i);
    }
    return data;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(58);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(49)('wks')
  , uid        = __webpack_require__(34)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(57);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _config = {
  dict: {
    key_field: "key",
    title_field: "title",
    dicts: {}
  },
  modal: {
    hasDivider: false
  },
  page: {
    small: false,
    size: 10,
    sizes: [10, 20, 50, 100],
    layout: 'total,pager,jumper,sizes'
  },
  datepicker: {
    format: {
      date: 'YYYY-MM-DD',
      month: 'YYYY-MM',
      year: 'YYYY',
      time: 'HH:mm',
      datetime: 'YYYY-MM-DD HH:mm',
      datehour: 'YYYY-MM-DD HH:mm',
      datetimesecond: 'YYYY-MM-DD HH:mm:ss'
    },
    shortcuts: {
      today: {
        title: "今天",
        value: function value() {
          return new Date();
        }
      },
      yesterday: {
        title: "昨天",
        value: function value() {
          var date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        }
      }
    },
    weeks: ['日', '一', '二', '三', '四', '五', '六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
    datetimeOptions: {
      minuteStep: 5
    },
    daterangeOptions: {
      paramName: {
        start: 'start',
        end: 'end'
      }
    }
  }
};

var func = {
  getDict: function getDict(name) {
    var dict = _config.dict.dicts[name];
    if (!dict) {
      log.error("Config:\u4E0D\u5B58\u5728\u547D\u540D\u4E3A" + name + "\u7684\u5B57\u5178");
      return [];
    }
    return dict;
  },
  getOption: function getOption(type, name) {
    var key = "" + type;
    if (!_utils2.default.isNull(name)) {
      key = type + "." + name;
    }
    var value = _utils2.default.getKeyValue(_config, "" + key);
    if (_utils2.default.isNull(value)) {
      log.error("Config:\u4E0D\u5B58\u5728" + key + "\u7684\u914D\u7F6E\u9879");
      return null;
    }
    return value;
  },
  config: function config(name, value) {
    if (_utils2.default.isNull(name)) {
      return false;
    }
    _utils2.default.setKeyValue(_config, name, value);
    return true;
  },
  initDict: function initDict(objects) {
    (0, _assign2.default)(_config.dict.dicts, objects);
  },
  addDict: function addDict(name, value) {
    _config.dict.dicts[name] = value;
  }
};

exports.default = func;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(13)
  , hide      = __webpack_require__(11)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(10)
  , IE8_DOM_DEFINE = __webpack_require__(68)
  , toPrimitive    = __webpack_require__(52)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(33);
module.exports = __webpack_require__(8) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43)
  , defined = __webpack_require__(28);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(74)
  , enumBugKeys = __webpack_require__(42);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(145), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f
  , has = __webpack_require__(15)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(167)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(11)
  , Iterators     = __webpack_require__(21)
  , TO_STRING_TAG = __webpack_require__(4)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(27);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(60);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function (param) {
  return new Notify(param);
};

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = {
  type: 'dialog',
  title: '',
  content: '',
  style: null,
  buttons: [],
  hasMask: false,
  closeOnMask: true,
  hasCloseIcon: false,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false
};

var notifyCls = 'h-notify';
var notifyHasCloseCls = 'h-notify-has-close';
var notifyContentCls = 'h-notify-content';
var notifyContainerCls = 'h-notify-container';
var notifyCloseCls = 'h-notify-close';
var notifyMaskCls = 'h-notify-mask';
var notifyShowCls = 'h-notify-show';
var closeIcon = 'h-icon-close';

var Notify = function () {
  function Notify(orignalparam) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Notify);

    var that = this;
    var param = this.param = _utils2.default.extend({}, Default, orignalparam, true);
    var html = '';
    if (param.hasMask) {
      html += '<div class="' + notifyMaskCls + '"></div>';
    }
    html += '<div class="' + notifyContainerCls + '">';
    if (param.hasCloseIcon) html += '<span class="' + notifyCloseCls + ' ' + closeIcon + '"></span>';
    if (param.title) html += '<header>' + param.title + '</header>';
    html += '<div class="' + notifyContentCls + '"></div>';
    param.hasFooter = _utils2.default.isArray(param.buttons) && param.buttons.length > 0;
    if (param.hasFooter) {
      var footeHtml = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(param.buttons), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var b = _step.value;

          var name = '';
          var attr = '';
          var color = '';
          if (b == 'cancel' || b.type == 'cancel') {
            name = b.name || '取消';
            attr = b;
          } else if (b == 'ok' || b.type == 'ok') {
            name = b.name || '确定';
            attr = 'ok';
            color = 'primary';
          } else if (_utils2.default.isObject(b)) {
            attr = b.type;
            name = b.name;
            color = b.color || 'primary';
          }
          if (color) color = 'h-btn-' + color;
          footeHtml += '<button class="h-btn ' + color + '" attr="' + attr + '" >' + name + '</button>';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      html += '<footer>' + footeHtml + '</footer>';
    }

    html += '</div>';
    var $body = document.createElement('div');
    _utils2.default.addClass($body, notifyCls);
    $body.innerHTML = html;
    var $content = that.$content = $body.querySelector('.' + notifyContentCls);
    var $container = that.$container = $body.querySelector('.' + notifyContainerCls);
    that.$body = $body;

    var content = param.content;
    if (content.nodeType === 1) {
      $content.appendChild(content);
    } else if (_utils2.default.isFunction(content)) {
      var contentText = content.call(this);
      $content.innerHTML = contentText;
    } else {
      $content.innerHTML = content;
    }

    if (param.hasCloseIcon) {
      _utils2.default.addClass($body, notifyHasCloseCls);
    }

    if (param.type) {
      _utils2.default.addClass($body, param.type);
    }

    if (param.width) {
      $container.style.width = param.width + 'px';
    }
    if (param.height) {
      $content.style.height = param.height + 'px';
    }
    if (param.maxheight) {
      $content.style.maxHeight = param.maxheight + 'px';
    }
    if (param.style) {
      _utils2.default.addClass($body, param.style);
    }

    var parentDom = param.parent || document.body;
    parentDom.appendChild($body);
    // $("").append($body);
    // let openedComponent = $('.systab_component.selected');
    // if (openedComponent.size() == 0 || param.global) openedComponent = $('body');
    // openedComponent.append($body);
    if (param.hasCloseIcon) {
      $body.querySelector('.' + notifyCloseCls).onclick = function () {
        that.close();
      };
    }
    if (param.hasFooter) {
      $body.querySelectorAll('.' + notifyContainerCls + '>footer>button').forEach(function (b) {
        b.onclick = function (event) {
          var attr = event.target.getAttribute('attr');
          if (attr) {
            if (attr == 'cancel') {
              that.close();
            }
            that.trigger(attr);
          }
        };
      }, this);
    }

    window.setTimeout(function () {
      _utils2.default.addClass($body, notifyShowCls);
    }, 20);

    if (param.events && _utils2.default.isFunction(param.events.init)) {
      param.events.init.call(that, $content);
    }
    if (param.timeout) {
      window.setTimeout(function () {
        that.close();
      }, param.timeout);
    }
    if (param.closeOnMask && param.hasMask) {
      $body.querySelector('.' + notifyMaskCls).onclick = function () {
        _this.close();
      };
    }
  }

  (0, _createClass3.default)(Notify, [{
    key: 'trigger',
    value: function trigger(event) {
      var param = this.param;
      if (param.events && _utils2.default.isFunction(param.events[event])) {
        param.events[event].call(this, this);
      }
    }
  }, {
    key: 'close',
    value: function close() {
      var that = this;
      var $body = this.$body;
      if (this.vm) {
        that.vm.$destroy();
      }

      this.trigger('close');

      _utils2.default.removeClass($body, notifyShowCls);

      $body.addEventListener("transitionend", function (event) {
        if ((event.propertyName == 'top' || event.propertyName == 'right') && $body) {
          _utils2.default.removeDom($body);
        }
      });
    }
  }]);
  return Notify;
}();

// const Tip = function() {
//   Tips(TYPE.TIP, ...arguments);
// }
// const Alert = function(content, time = 1500) {
//   content = `<i class='icon-alert'></i>` + content;
//   Tips(TYPE.ALERT, content, time);
// }

// const Color = {};
// Color.RED = 'red';
// Color.WHITE = 'white';
// Color.BLACK = 'black';
// Color.YELLOW = 'yellow';

// const Message = function(content, timeout, style) {
//   Tips(TYPE.MESSAGE, content, timeout, style, {
//     top: 0,
//   });
// }

// let Tips = function() {
//   if (arguments.length == 1) {
//     console.error('Tip方法参数错误', arguments);
//     return false;
//   }

//   let [type, content, timeout, style, otherParam] = arguments;

//   if (utils.isString(timeout)) {
//     const _s = style;
//     style = timeout;
//     timeout = _s;
//   }
//   style = style || '';
//   if (timeout === undefined) {
//     timeout = DEFAULT_timeout;
//   }

//   const param = {
//     type,
//     style,
//     timeout,
//     content,
//     width: null,
//     global: true,
//     hasFooter: false,
//     mask: false,
//     top: 10,
//     hasCloseIcon: true
//   };
//   if (otherParam != undefined) {
//     $.extend(param, otherParam);
//   }

//   return new _Dialog(param);
// }

// const Confirm = function(content, func, calcelFunc) {
//   content = content || '';
//   func = func || emptyFunc;
//   content = `<i class='icon-alert'></i>` + content;
//   return new _Dialog({
//     type: TYPE.CONFIRM,
//     content,
//     hasCloseIcon: false,
//     closeButtonName: '取消',
//     global: true,
//     width: 360,
//     buttons: [{
//       name: '确定',
//       func() {
//         func.call(this, ...arguments);
//         this.close();
//       },
//     }],
//     events: {
//       close() {
//         if (typeof calcelFunc == 'function') {
//           calcelFunc();
//         }
//       },
//     },
//   });
// }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(13)
  , call        = __webpack_require__(157)
  , isArrayIter = __webpack_require__(156)
  , anObject    = __webpack_require__(10)
  , toLength    = __webpack_require__(51)
  , getIterFn   = __webpack_require__(79)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(10)
  , dPs         = __webpack_require__(163)
  , enumBugKeys = __webpack_require__(42)
  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(67).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(59);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(27);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(62);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(61);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pop = __webpack_require__(56);

var _pop2 = _interopRequireDefault(_pop);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Default = {
  trigger: 'click',
  triggerOnBody: true,
  html: true,
  placement: 'bottom-start',
  template: '<div role="select" class="h-dropdown"><div class="h-dropdown-arrow"></div><div class="h-dropdown-inner"></div></div>',
  arrowSelector: '.h-dropdown-arrow, .h-dropdown__arrow',
  innerSelector: '.h-dropdown-inner, .h-dropdown__inner',
  delay: 300
};

var Dropdown = function (_Pop) {
  (0, _inherits3.default)(Dropdown, _Pop);

  function Dropdown(el, param) {
    (0, _classCallCheck3.default)(this, Dropdown);

    param = _utils2.default.extend({}, Default, param);
    return (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, el, param));
  }

  return Dropdown;
}(_pop2.default);

exports.default = Dropdown;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20)
  , TAG = __webpack_require__(4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(30)
  , $export        = __webpack_require__(7)
  , redefine       = __webpack_require__(76)
  , hide           = __webpack_require__(11)
  , has            = __webpack_require__(15)
  , Iterators      = __webpack_require__(21)
  , $iterCreate    = __webpack_require__(158)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(73)
  , ITERATOR       = __webpack_require__(4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(34)('meta')
  , isObject = __webpack_require__(12)
  , has      = __webpack_require__(15)
  , setDesc  = __webpack_require__(9).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(14)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(11);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(49)('keys')
  , uid    = __webpack_require__(34);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(50)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(30)
  , wksExt         = __webpack_require__(54)
  , defineProperty = __webpack_require__(9).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.manba = factory();
})(typeof window == 'object' ? window : typeof global == 'object' ? global : this, function () {
  "use strict";

  const FORMAT_LIST = {
    "l": "YYYY-MM-DD",
    "ll": "YYYY年MM月DD日",
    "k": "YYYY-MM-DD hh:mm",
    "kk": "YYYY年MM月DD日 hh点mm分",
    "kkk": "YYYY年MM月DD日 hh点mm分 q",
    "f": "YYYY-MM-DD hh:mm:ss",
    "ff": "YYYY年MM月DD日 hh点mm分ss秒",
    "fff": "YYYY年MM月DD日 hh点mm分ss秒 星期w",
    "n": "MM-DD",
    "nn": "MM月DD日"
  };

  const _SECONDS = 1000;
  const _MINUTES = 1000 * 60;
  const _HOURS = 1000 * 60 * 60;
  const _DAYS = 1000 * 60 * 60 * 24;
  const _WEEKS = _DAYS * 7;
  const _YEARS = _DAYS * 365;
  const MSE = new Date(1970, 0, 1, 0, 0, 0).getTime();

  const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
  const DAY_STRING = ['上午', '下午'];
  let _manba = function () {
    Utils.initmanba(this, ...arguments);
    return this;
  };

  let Utils = {
    initmanba(manba_obj, arg_1, type) {
      let _date = new Date(),
          date_bak = _date;
      if (arg_1 != undefined) {
        if (Utils.isNumber(arg_1)) {
          if (arg_1 < 9999999999) arg_1 = arg_1 * 1000;
          _date.setTime(arg_1);
        } else if (Utils.isArray(arg_1)) {
          Utils.padMonth(arg_1);
          _date = new Date(...arg_1);
        } else if (Utils.isDate(arg_1)) {
          _date = arg_1;
        } else if (Utils.isString(arg_1)) {
          _date = Utils.parse(arg_1);
        } else if (arg_1 instanceof _manba) {
          _date = new Date(arg_1.time());
        }
      }
      manba_obj._date = _date;
      if (date_bak === _date && manba_obj.timeDelay != 0) {
        manba_obj.add(manba_obj.timeDelay, manba.TIME);
      }
    },
    pad(num) {
      let norm = Math.abs(Math.floor(num));
      return (norm < 10 ? '0' : '') + norm;
    },
    parse(str) {
      let aspNetJsonRegex = /^(\d{4})\-?(\d{2})\-?(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i;
      let matched = aspNetJsonRegex.exec(str);
      if (matched !== null) {
        matched.shift();
        Utils.padMonth(matched);
        Utils.popUndefined(matched);
        return new Date(...matched);
      }
      let date = new Date(str);
      if (date == "Invalid Date") {
        // console.error("Invalid date parse from \"" + str + "\"");
        // return null;
        throw new Error(`Invalid date parse from ${ str }`);
      } else {
        return date;
      }
    },
    popUndefined(arr) {
      if (arr.length > 0 && arr[arr.length - 1] == undefined) {
        arr.pop();
        return Utils.popUndefined(arr);
      }
      return arr;
    },
    padMonth(arr) {
      //自动补充月份
      if (arr.length > 1 && arr[1] > 0) arr[1] -= 1;
    },
    isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    format(date, formatStr) {
      let str = formatStr;
      str = str.replace(/yyyy|YYYY/, date.getFullYear());
      str = str.replace(/yy|YY/, date.getFullYear() % 100 > 8 ? (date.getFullYear() % 100).toString() : '0' + date.getFullYear() % 100);
      str = str.replace(/MM/, date.getMonth() > 8 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
      str = str.replace(/M/g, date.getMonth() + 1);
      str = str.replace(/w|W/g, WEEK[date.getDay()]);
      str = str.replace(/dd|DD/, this.pad(date.getDate()));
      str = str.replace(/d|D/g, date.getDate());
      str = str.replace(/hh|HH/, this.pad(date.getHours()));
      str = str.replace(/h|H/g, date.getHours());
      str = str.replace(/mm/, this.pad(date.getMinutes()));
      str = str.replace(/m/g, date.getMinutes());
      str = str.replace(/ss|SS/, this.pad(date.getSeconds()));
      str = str.replace(/s|S/g, date.getSeconds());
      str = str.replace(/q|Q/g, date.getHours() > 12 ? DAY_STRING[1] : DAY_STRING[0]);
      return str;
    },
    UTCformat(date, formatStr) {
      let str = formatStr;
      str = str.replace(/yyyy|YYYY/, date.getUTCFullYear());
      str = str.replace(/yy|YY/, date.getUTCFullYear() % 100 > 8 ? (date.getUTCFullYear() % 100).toString() : '0' + date.getUTCFullYear() % 100);
      str = str.replace(/MM/, date.getUTCMonth() > 8 ? (date.getUTCMonth() + 1).toString() : '0' + (date.getUTCMonth() + 1));
      str = str.replace(/M/g, date.getUTCMonth() + 1);
      str = str.replace(/w|W/g, WEEK[date.getUTCDay()]);
      str = str.replace(/dd|DD/, this.pad(date.getUTCDate()));
      str = str.replace(/d|D/g, date.getUTCDate());
      str = str.replace(/hh|HH/, this.pad(date.getUTCHours()));
      str = str.replace(/h|H/g, date.getUTCHours());
      str = str.replace(/mm/, this.pad(date.getUTCMinutes()));
      str = str.replace(/m/g, date.getUTCMinutes());
      str = str.replace(/ss|SS/, this.pad(date.getUTCSeconds()));
      str = str.replace(/s|S/g, date.getUTCSeconds());
      str = str.replace(/q|Q/g, date.getUTCHours() > 12 ? DAY_STRING[1] : DAY_STRING[0]);
      return str;
    },
    timestamp(date) {
      return Math.floor(date.getTime() / 1000);
    },
    getDays(date) {
      return Math.floor((date.getTime() - MSE) / _DAYS);
    },
    getHours(date) {
      return Math.floor((date.getTime() - MSE) / _HOURS);
    },
    getMonths(date) {
      return date.getYear() * 12 + date.getMonth() + 1;
    },
    isObject(input) {
      return Object.prototype.toString.call(input) === '[object Object]';
    },
    isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    },
    isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    },
    isNumber(input) {
      return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
    },
    isString(input) {
      return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
    },
    extend(a, b) {
      for (let i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }

      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }

      return a;
    },
    makeGetSet(unit) {
      return function (value) {
        if (value != undefined) {
          // if(unit=="Month")value = value>0?(value-1):0;
          Date.prototype["set" + unit].call(this._date, value);
          return this;
        } else {
          return Date.prototype["get" + unit].call(this._date);
          // return unit=="Month"?(result+1):result;
        }
      };
    }
  };

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  _manba.prototype = {
    timeDelay: 0,
    format(str) {
      let m = this;

      let v = this.isValid();
      if (v !== true) return v;

      str = str || "l";
      let formatStr = FORMAT_LIST[str] || str;
      return Utils.format(m._date, formatStr);
    },
    UTCformat(str) {
      let m = this;

      let v = this.isValid();
      if (v !== true) return v;

      str = str || "l";
      let formatStr = FORMAT_LIST[str] || str;
      return Utils.UTCformat(m._date, formatStr);
    },
    toString() {
      let v = this.isValid();
      if (v !== true) return v;
      return this._date.toString();
    },
    toISOString(utcZone) {
      let v = this.isValid();
      if (v !== true) return v;
      let offset = 0;
      if (utcZone !== undefined) {
        offset = utcZone * 60;
      } else {
        offset = -this._date.getTimezoneOffset();
      }
      let dif = offset >= 0 ? '+' : '-';
      let times = manba(this.time() + offset * 60 * 1000);
      return times.UTCformat("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(offset / 60) + ':' + Utils.pad(offset % 60);
    },
    toLocalString() {
      let v = this.isValid();
      if (v !== true) return v;
      let offset = -this._date.getTimezoneOffset();
      let dif = offset >= 0 ? '+' : '-';
      return this.format("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(offset / 60) + ':' + Utils.pad(offset % 60);
    },
    distance(_m, type) {
      let v = this.isValid();
      if (v !== true) return v;
      let m = this;
      type = type || manba.DAY;
      _m = manba(_m);
      v = _m.isValid();
      if (v !== true) return v;
      switch (type) {
        case manba.MINUTE:
          return Math.floor((m.time() - _m.time()) / 60 / 1000);
        case manba.HOUR:
          return Utils.getHours(m._date) - Utils.getHours(_m._date);
        case manba.DAY:
          return Utils.getDays(m._date) - Utils.getDays(_m._date);
        case manba.MONTH:
          return Utils.getMonths(m._date) - Utils.getMonths(_m._date);
        case manba.YEAR:
          return m._date.getYear() - _m._date.getYear();
      }
      return 0;
    },
    getWeekOfYear(weekStart) {
      weekStart = (weekStart || 0) - 0;
      if (isNaN(weekStart) || weekStart > 6) {
        weekStart = 0;
      }
      var year = this.year();
      var firstDay = this.startOf(manba.YEAR);
      var firstWeekDays = 7 - firstDay.day() + weekStart;
      var dayOfYear = (this.startOf(manba.DAY).time() - firstDay.time()) / (24 * 3600 * 1000) + 1;
      return Math.ceil((dayOfYear - firstWeekDays) / 7) + 1;
    },
    getWeekOfMonth(weekStart) {
      weekStart = (weekStart || 0) - 0;
      if (isNaN(weekStart) || weekStart > 6) {
        weekStart = 0;
      }
      let dayOfWeek = this.day();
      let day = this.date();
      return Math.ceil((day - dayOfWeek - 1) / 7) + (dayOfWeek >= weekStart ? 1 : 0);
    },
    isLeapYear() {
      let v = this.isValid();
      if (v !== true) return v;
      return Utils.isLeapYear(this.year());
    },
    isThisYear() {
      let v = this.isValid();
      if (v !== true) return v;
      return Utils.timestamp(this._date);
    },
    isBefore() {
      let v = this.isValid();
      if (v !== true) return v;
      return Utils.timestamp(this._date);
    },
    isAfter() {
      let v = this.isValid();
      if (v !== true) return v;
      return Utils.timestamp(this._date);
    },
    month(num) {
      let v = this.isValid();
      if (v !== true) return v;
      let m = this;
      if (num == undefined) {
        return m._date.getMonth() + 1;
      }
      num = parseInt(num);
      num = m._date.setMonth(num - 1);
      return m;
    },
    add(num, type) {
      let v = this.isValid();
      if (v !== true) return v;
      let m = this;
      num = parseInt(num);
      type = type || manba.DAY;

      switch (type) {
        case manba.DAY:
          m.time(m.time() + num * _DAYS);
          break;
        case manba.MONTH:
          let month_add = m.month() + num;
          // let year_add = Math.floor(month_add / 12);
          // month_add = month_add % 12;
          // m.add(year_add, manba.YEAR);
          m.month(month_add);
          break;
        case manba.YEAR:
          m.year(m.year() + num);
          break;
        case manba.WEEK:
          m.time(m.time() + num * _WEEKS);
          break;
        case manba.HOUR:
          m.time(m.time() + num * _HOURS);
          break;
        case manba.MINUTE:
          m.time(m.time() + num * _MINUTES);
          break;
        case manba.SECOND:
          m.time(m.time() + num * _SECONDS);
          break;
        case manba.TIME:
          m.time(m.time() + num);
          break;
      }
      return m;
    },
    endOf(type, set) {
      let v = this.isValid();
      if (v !== true) return v;
      let m = new _manba(this);
      type = type || manba.DAY;
      m = m.startOf(type, set);
      m.add(1, type);
      // if (manba.DAY == type||manba.WEEK == type) {
      m.add(-1, manba.SECOND);
      // } else {
      // m.add(-1, manba.DAY);
      // }
      return m;
    },
    startOf(type, set) {
      let v = this.isValid();
      if (v !== true) return v;
      let m = new _manba(this);
      type = type || manba.DAY;
      switch (type) {
        case manba.DAY:
          m.milliseconds(0);
          m.seconds(0);
          m.minutes(0);
          m.hours(0);
          break;
        case manba.MONTH:
          m.date(1);
          m = m.startOf(manba.DAY);
          break;
        case manba.WEEK:
          m = m.startOf(manba.DAY);
          set = set || manba.SUNDAY;
          let startDay = set == manba.SUNDAY ? 0 : 1;
          if (m.day() == 0 && startDay == 1) {
            startDay = -6;
          }
          m.add(-m.day() + startDay, manba.DAY);
          break;
        case manba.YEAR:
          m.month(1);
          m.date(1);
          m = m.startOf(manba.DAY);
          break;
        case manba.HOUR:
          m.time(Math.floor(m.time() / _HOURS) * _HOURS);
          break;
      }
      return m;
    },
    isValid() {
      return Utils.isDate(this._date) ? true : "Invalid Date";
    }
  };

  let manbaPrototype__proto = _manba.prototype;

  const methods = {
    "year": "FullYear",
    "day": "Day",
    "date": "Date",
    "hours": "Hours",
    "milliseconds": "Milliseconds",
    "seconds": "Seconds",
    "minutes": "Minutes",
    "time": "Time"
  };

  for (let unit in methods) {
    manbaPrototype__proto[unit] = Utils.makeGetSet(methods[unit]);
  }

  let manba = function (param) {
    if (param instanceof _manba) {
      return new _manba(param);
    } else if (Utils.isObject(param)) {
      //config
      if (param.formatString && Utils.isObject(param.formatString)) {
        Utils.extend(FORMAT_LIST, param.formatString);
      }
      if (param.now) {
        _manba.prototype.timeDelay = manba(param.now).time() - manba().time();
      }
    } else {
      return new _manba(param);
    }
  };

  manba.config = function (param) {
    if (param.formatString && Utils.isObject(param.formatString)) {
      Utils.extend(FORMAT_LIST, param.formatString);
    }
    if (param.now) {
      _manba.prototype.timeDelay = manba(param.now).time() - manba().time();
    }
  };

  manba.SECOND = 2;
  manba.MINUTE = 3;
  manba.HOUR = 4;
  manba.DAY = 5;
  manba.MONTH = 6;
  manba.YEAR = 7;
  manba.WEEK = 8;
  manba.TIME = 9;

  manba.MONDAY = 1;
  manba.TUESDAY = 2;
  manba.WEDNESDAY = 3;
  manba.THURSDAY = 4;
  manba.FRIDAY = 5;
  manba.SATURDAY = 6;
  manba.SUNDAY = 7;
  return manba;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(27);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(60);

var _createClass3 = _interopRequireDefault(_createClass2);

var _popper = __webpack_require__(229);

var _popper2 = _interopRequireDefault(_popper);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  triggerOnce: false,
  content: '',
  trigger: 'hover focus',
  offset: 0,
  equalWidth: false
};

/**
 * Create a new Pop.js instance
 * @class Pop
 * @param {HTMLElement} reference - The reference element used to position the pop
 * @param {Object} options
 * @param {String} options.placement=bottom
 *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
 *      left(-start, -end)`
 *
 * @param {HTMLElement} reference - The DOM node used as reference of the pop (it can be a jQuery element).
 * @param {Object} options - Configuration of the pop
 * @param {HTMLElement|String|false} options.container=false - Append the pop to a specific element.
 * @param {Number|Object} options.delay=0
 *      Delay showing and hiding the pop (ms) - does not apply to manual trigger type.
 *      If a number is supplied, delay is applied to both hide/show.
 *      Object structure is: `{ show: 500, hide: 100 }`
 * @param {Boolean} options.html=false - Insert HTML into the pop. If false, the content will inserted with `innerText`.
 * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
 * @param {String} options.template='<div class="pop" role="pop"><div class="pop-arrow"></div><div class="pop-inner"></div></div>'
 *      Base HTML to used when creating the pop.
 *      The pop's `content` will be injected into the `.pop-inner` or `.pop__inner`.
 *      `.pop-arrow` or `.pop__arrow` will become the pop's arrow.
 *      The outermost wrapper element should have the `.pop` class.
 * @param {String|HTMLElement|ContentFunction} options.content='' - Default content value if `content` attribute isn't present.
 * @param {String} options.trigger='hover focus'
 *      How pop is triggered - click | hover | focus | manual.
 *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
 * @param {HTMLElement} options.boundariesElement
 *      The element used as boundaries for the pop. For more information refer to Popper.js'
 *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
 * @param {Number|String} options.offset=0 - Offset of the pop relative to its reference. For more information refer to Popper.js'
 *      [offset docs](https://popper.js.org/popper-documentation.html)
 * @return {Object} instance - The generated pop instance
 */

var Pop = function () {
  function Pop(reference, options) {
    (0, _classCallCheck3.default)(this, Pop);


    options = _utils2.default.extend({}, DEFAULT_OPTIONS, options);

    // reference.jquery && (reference = reference[0]);
    this.reference = reference;

    // options.template = 
    this.options = options;

    var triggerEvents = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    }) : [];

    this.isOpen = false;

    this.arrowSelector = options.arrowSelector;
    this.innerSelector = options.innerSelector;
    this.triggerEvents = [];

    if (options.content.nodeType === 1) {
      options.content.style.display = "none";
    }

    // this.popNode.style.display = 'none';
    // this.popperInstance.update();
    // this.hide();
    // this.popNode.setAttribute('aria-hidden', 'true');
    this.setEventListeners(reference, triggerEvents, options);
  }

  // show() {
  //   this.show(this.reference, this.options);
  // }

  (0, _createClass3.default)(Pop, [{
    key: 'toggle',
    value: function toggle() {
      if (this.isOpen) {
        return this.hide();
      } else {
        return this.show();
      }
    }
    // show = () => this.show(this.reference, this.options);

    // hide = () => this.hide();
    // dispose = () => this.dispose();
    // toggle = () => {
    //   if (this.isOpen) {
    //     return this.hide();
    //   } else {
    //     return this.show();
    //   }
    // }

  }, {
    key: 'create',
    value: function create(reference, template, content, allowHtml) {
      var popGenerator = window.document.createElement('div');
      popGenerator.innerHTML = template;
      var popNode = popGenerator.childNodes[0];

      popNode.id = 'pop_' + Math.random().toString(36).substr(2, 10);
      var contentNode = popGenerator.querySelector(this.innerSelector);
      if (content.nodeType === 1) {
        allowHtml && contentNode.appendChild(content);
        content.style.display = "block";
      } else if (_utils2.default.isFunction(content)) {
        var contentText = content.call(reference);
        allowHtml ? contentNode.innerHTML = contentText : contentNode.innerText = contentText;
      } else {
        allowHtml ? contentNode.innerHTML = content : contentNode.innerText = content;
      }

      return popNode;
    }
  }, {
    key: 'initPopNode',
    value: function initPopNode() {
      var reference = this.reference;
      var options = this.options;
      var content = reference.getAttribute('content') || options.content;

      if (!content) {
        return this;
      }

      var popNode = this.create(reference, options.template, content, options.html);

      popNode.setAttribute('aria-describedby', popNode.id);
      var container = this.findContainer(options.container, reference);

      this.append(popNode, container);

      var popperOptions = {
        placement: options.placement,
        arrowElement: this.arrowSelector
      };
      if (options.boundariesElement) {
        popperOptions.boundariesElement = options.boundariesElement;
      }
      // log(1);
      this.popperInstance = new _popper2.default(reference, popNode, popperOptions);
      this.popNode = popNode;
      // this.popperInstance.update();
      this.popNode.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (this.isOpen) {
        return this;
      }
      this.isOpen = true;
      if (this.options.events && _utils2.default.isFunction(this.options.events.show)) {
        this.options.events.show.call(null);
      }

      if (!this.popNode) {
        this.initPopNode();
      }
      if (this.options.equalWidth) {
        this.popNode.style.minWidth = this.reference.clientWidth + 'px';
      }

      this.popNode.style.display = '';
      _utils2.default.addClass(this.reference, 'h-pop-ref-show');
      setTimeout(function () {
        _this.popNode.setAttribute('aria-hidden', 'false');
      }, 0);
      this.popperInstance.update();
      return this;
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      if (!this.isOpen) {
        return this;
      }

      this.isOpen = false;
      this.popNode.setAttribute('aria-hidden', 'true');
      _utils2.default.removeClass(this.reference, 'h-pop-ref-show');
      setTimeout(function () {
        _this2.popNode.style.display = 'none';
      }, this.options.delay);
      return this;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      var _this3 = this;

      if (this.documentHandler) {
        document.removeEventListener('click', this.documentHandler);
      }
      if (this.popNode) {
        this.hide();
        this.popperInstance.destroy();
        this.triggerEvents.forEach(function (_ref) {
          var func = _ref.func,
              event = _ref.event;

          _this3.popNode.removeEventListener(event, func);
        });
        this.triggerEvents = [];
        this.popNode.parentNode.removeChild(this.popNode);
        this.popNode = null;
      }
      return this;
    }
  }, {
    key: 'findContainer',
    value: function findContainer(container, reference) {
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        container = reference.parentNode;
      }
      return container;
    }
  }, {
    key: 'append',
    value: function append(popNode, container) {
      container.appendChild(popNode);
    }
  }, {
    key: 'setEventListeners',
    value: function setEventListeners(reference, triggerEvents, options) {
      var _this4 = this;

      var directtriggerEvents = [];
      var oppositetriggerEvents = [];

      triggerEvents.forEach(function (event) {
        switch (event) {
          case 'hover':
            directtriggerEvents.push('mouseenter');
            oppositetriggerEvents.push('mouseleave');
          case 'focus':
            directtriggerEvents.push('focus');
            oppositetriggerEvents.push('blur');
          case 'click':
            directtriggerEvents.push('click');
            if (!_this4.options.triggerOnce) oppositetriggerEvents.push('click');
          default:
            break;
        }
      });

      directtriggerEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this4.isOpen === true) {
            return;
          }
          evt.usedByPop = true;
          _this4.scheduleShow(reference, options, evt);
        };
        _this4.triggerEvents.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      oppositetriggerEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByPop === true) {
            return;
          }
          _this4.scheduleHide(reference, options, evt);
        };
        _this4.triggerEvents.push({ event: event, func: func });
        reference.addEventListener(event, func);
      });

      if (options.triggerOnBody) {
        this.documentHandler = function (e) {
          if (!_this4.popNode || e.target.parentNode == null) return;
          if (reference.contains(e.target) || _this4.popNode.contains(e.target)) {
            return false;
          }
          _this4.hide();
        };
        document.addEventListener('click', this.documentHandler);
      }
    }
  }, {
    key: 'scheduleShow',
    value: function scheduleShow() {
      // const computedDelay = (delay && delay.show) || delay || 0;
      this.show();
    }
  }, {
    key: 'scheduleHide',
    value: function scheduleHide(reference, options, evt) {
      // const computedDelay = (delay && delay.hide) || delay || 0;
      if (this.isOpen === false) {
        return;
      }
      if (!document.body.contains(this.popNode)) {
        return;
      }
      if (evt.type === 'mouseleave') {
        var isSet = this.setPopNodeEvent(evt, reference, options);
        if (isSet) {
          return;
        }
      }

      this.hide(reference, options);
    }
  }, {
    key: 'setPopNodeEvent',
    value: function setPopNodeEvent(evt, reference, options) {
      var _this5 = this;

      var relatedreference = evt.relatedreference || evt.toElement;

      var callback = function callback(evt2) {
        var relatedreference2 = evt2.relatedreference || evt2.toElement;

        _this5.popNode.removeEventListener(evt.type, callback);

        if (!reference.contains(relatedreference2)) {
          _this5.scheduleHide(reference, options, evt2);
        }
      };

      if (this.popNode.contains(relatedreference)) {
        this.popNode.addEventListener(evt.type, callback);
        return true;
      }

      return false;
    }
  }]);
  return Pop;
}();

exports.default = Pop;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(138), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(58);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(132);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(131);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(63);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(63);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(135);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(134);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP          = __webpack_require__(9).f
  , create      = __webpack_require__(31)
  , redefineAll = __webpack_require__(47)
  , ctx         = __webpack_require__(13)
  , anInstance  = __webpack_require__(39)
  , defined     = __webpack_require__(28)
  , forOf       = __webpack_require__(29)
  , $iterDefine = __webpack_require__(44)
  , step        = __webpack_require__(70)
  , setSpecies  = __webpack_require__(77)
  , DESCRIPTORS = __webpack_require__(8)
  , fastKey     = __webpack_require__(45).fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(40)
  , from    = __webpack_require__(149);
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global         = __webpack_require__(6)
  , $export        = __webpack_require__(7)
  , meta           = __webpack_require__(45)
  , fails          = __webpack_require__(14)
  , hide           = __webpack_require__(11)
  , redefineAll    = __webpack_require__(47)
  , forOf          = __webpack_require__(29)
  , anInstance     = __webpack_require__(39)
  , isObject       = __webpack_require__(12)
  , setToStringTag = __webpack_require__(22)
  , dP             = __webpack_require__(9).f
  , each           = __webpack_require__(151)(0)
  , DESCRIPTORS    = __webpack_require__(8);

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(14)(function(){
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(32)
  , createDesc     = __webpack_require__(33)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(52)
  , has            = __webpack_require__(15)
  , IE8_DOM_DEFINE = __webpack_require__(68)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(74)
  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(15)
  , toObject    = __webpack_require__(23)
  , IE_PROTO    = __webpack_require__(48)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(15)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(150)(false)
  , IE_PROTO     = __webpack_require__(48)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(14);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(6)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(9)
  , DESCRIPTORS = __webpack_require__(8)
  , SPECIES     = __webpack_require__(4)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(13)
  , invoke             = __webpack_require__(155)
  , html               = __webpack_require__(67)
  , cel                = __webpack_require__(41)
  , global             = __webpack_require__(6)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(20)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(40)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(21);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(223),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/datetime/date-base.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] date-base.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ffb7f58", Component.options)
  } else {
    hotAPI.reload("data-v-7ffb7f58", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(57);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(37);

var _keys2 = _interopRequireDefault(_keys);

var _checkbox = __webpack_require__(107);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _switchlist = __webpack_require__(117);

var _switchlist2 = _interopRequireDefault(_switchlist);

var _datetime = __webpack_require__(108);

var _datetime2 = _interopRequireDefault(_datetime);

var _form = __webpack_require__(109);

var _form2 = _interopRequireDefault(_form);

var _modal = __webpack_require__(111);

var _modal2 = _interopRequireDefault(_modal);

var _pagination = __webpack_require__(112);

var _pagination2 = _interopRequireDefault(_pagination);

var _radio = __webpack_require__(113);

var _radio2 = _interopRequireDefault(_radio);

var _rate = __webpack_require__(114);

var _rate2 = _interopRequireDefault(_rate);

var _Loading = __webpack_require__(105);

var _Loading2 = _interopRequireDefault(_Loading);

var _switch = __webpack_require__(116);

var _switch2 = _interopRequireDefault(_switch);

var _layout = __webpack_require__(110);

var _timeline = __webpack_require__(118);

var _timeline2 = _interopRequireDefault(_timeline);

var _button = __webpack_require__(106);

var _select = __webpack_require__(115);

var _select2 = _interopRequireDefault(_select);

var _style = __webpack_require__(120);

var _style2 = _interopRequireDefault(_style);

var _tooltip = __webpack_require__(121);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _autosize = __webpack_require__(119);

var _autosize2 = _interopRequireDefault(_autosize);

var _modal3 = __webpack_require__(127);

var _modal4 = _interopRequireDefault(_modal3);

var _confirm = __webpack_require__(124);

var _confirm2 = _interopRequireDefault(_confirm);

var _message = __webpack_require__(126);

var _message2 = _interopRequireDefault(_message);

var _notice = __webpack_require__(128);

var _notice2 = _interopRequireDefault(_notice);

var _loading = __webpack_require__(125);

var _loading2 = _interopRequireDefault(_loading);

var _filters = __webpack_require__(122);

var _filters2 = _interopRequireDefault(_filters);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import locale from './locale';

// import Table from './components/table';
// import Tabs from './components/tabs';
// import Tag from './components/tag';
// import TimePicker from './components/time-picker';
// import Tooltip from './components/tooltip';
// import Transfer from './components/transfer';
// import Tree from './components/tree';
// import Upload from './components/upload';

// import Slider from './components/slider';

// import Poptip from './components/poptip';
// import Progress from './components/progress';

// import Icon from './components/icon';
// import Input from './components/input';
// import InputNumber from './components/input-number';
// import LoadingBar from './components/loading-bar';
// import Menu from './components/menu';

// import Circle from './components/circle';
// import Collapse from './components/collapse';
// import Affix from './components/affix';
// import Alert from './components/alert';
// import BackTop from './components/back-top';
// import Badge from './components/badge';
// import Breadcrumb from './components/breadcrumb';
// import Card from './components/card';
// import Carousel from './components/carousel';
// import Cascader from './components/cascader';
var components = {
  // Affix,
  // Alert,
  // BackTop,
  // Badge,
  // Breadcrumb,
  // BreadcrumbItem: Breadcrumb.Item,
  Button: _button.Button,
  hButton: _button.Button,
  ButtonGroup: _button.ButtonGroup,
  // Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  // Cascader,
  Checkbox: _checkbox2.default,
  // CheckboxGroup: Checkbox.Group,
  // Circle,
  // DatePicker,
  // Dropdown,
  // DropdownItem: Dropdown.Item,
  // DropdownMenu: Dropdown.Menu,
  DatePicker: _datetime2.default.DatePicker,
  DateRangePicker: _datetime2.default.DateRangePicker,
  hForm: _form2.default,
  Form: _form2.default,
  FormItem: _form2.default.Item,
  FormItemList: _form2.default.ItemList,
  // Collapse,
  // Icon,
  // InputNumber,
  // LoadingBar,
  // Menu,
  // MenuGroup: Menu.Group,
  // MenuItem: Menu.Item,
  // Submenu: Menu.Sub,
  // Message,
  Modal: _modal2.default.Modal,
  ModalComponent: _modal2.default.ModalComponent,
  // Notice,
  // iOption: Option,
  // OptionGroup,
  Pagination: _pagination2.default,
  // Panel: Collapse.Panel,
  // Poptip,
  // Progress,
  Radio: _radio2.default,
  // RadioGroup: Radio.Group,
  Rate: _rate2.default,
  Row: _layout.Row,
  hCol: _layout.Col,
  Col: _layout.Col,
  Timeline: _timeline2.default,
  TimelineItem: _timeline2.default.Item,
  hSelect: _select2.default,
  Select: _select2.default,
  // Slider,
  Loading: _Loading2.default,
  // Step: Steps.Step,
  // Steps,
  hSwitch: _switch2.default,
  SwitchList: _switchlist2.default
};
// import Steps from './components/steps';

// import Notice from './components/notice';

// import Dropdown from './components/dropdown';


var directives = {
  width: _style2.default.width,
  color: _style2.default.color,
  "bg-color": _style2.default.bgColor,
  height: _style2.default.height,
  font: _style2.default.font,
  autosize: _autosize2.default,
  tooltip: _tooltip2.default
};

var prototypes = {
  $Message: _message2.default,
  $Modal: _modal4.default,
  $Confirm: _confirm2.default,
  $Notice: _notice2.default,
  $Loading: _loading2.default
};

var install = function install(Vue) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  if (install.installed) return;
  // if (opts) {

  // }

  (0, _keys2.default)(components).forEach(function (key) {
    Vue.component(key, components[key]);
  });

  (0, _keys2.default)(_filters2.default).forEach(function (key) {
    Vue.filter(key, _filters2.default[key]);
  });

  (0, _keys2.default)(directives).forEach(function (key) {
    Vue.directive(key, directives[key]);
  });

  (0, _keys2.default)(prototypes).forEach(function (key) {
    Vue.prototype[key] = prototypes[key];
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var HeyUI = (0, _assign2.default)(components, {
  install: install
}, prototypes, _config2.default);

exports.default = HeyUI;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

var prefix = 'h-loading';
exports.default = {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: String
  },
  unbind: function unbind() {},
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.$el.parentNode.style.position == '') {
        _this.$el.parentNode.style.position = 'relative';
        _this.$el.parentNode.style.minHeight = '60px';
      }
    });
  },

  computed: {
    hasText: function hasText() {
      var slot = this.$slots.default;
      if (slot && slot.length > 0) {
        return !!slot[0].text;
      }
      return false;
    },
    circularCls: function circularCls() {
      return (0, _defineProperty3.default)({}, prefix + '-circular', true);
    },
    textCls: function textCls() {
      return (0, _defineProperty3.default)({}, prefix + '-text', true);
    },
    loadingCls: function loadingCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty3.default)(_ref3, '' + prefix, true), (0, _defineProperty3.default)(_ref3, prefix + '-loading', this.loading), _ref3;
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _set = __webpack_require__(19);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var prefix = 'h-btn';
var iconPrefix = 'h-icon';
var Props = {
  size: new _set2.default(['l', 's', 'xs'])
};
exports.default = {
  props: {
    color: String,
    textColor: String,
    icon: String,
    loading: Boolean,
    circle: Boolean,
    block: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function validator(value) {
        return Props.size.has(value);
      }
    },
    text: Boolean,
    iconCircle: Boolean
  },
  data: function data() {
    return {};
  },

  methods: {
    trigger: function trigger() {
      this.$emit('click');
    }
  },
  computed: {
    hasText: function hasText() {
      var slot = this.$slots.default;
      if (slot && slot.length > 0) {
        return !!slot[0].text;
      }
      return false;
    },
    buttonCls: function buttonCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, '' + prefix, true), (0, _defineProperty3.default)(_ref, prefix + '-circle', !!this.circle || !!this.iconCircle), (0, _defineProperty3.default)(_ref, prefix + '-icon-circle', !!this.iconCircle), (0, _defineProperty3.default)(_ref, prefix + '-text', !!this.text), (0, _defineProperty3.default)(_ref, prefix + '-loading', !!this.loading), (0, _defineProperty3.default)(_ref, prefix + '-block', !!this.block), (0, _defineProperty3.default)(_ref, prefix + '-text-' + this.textColor, !!this.textColor), (0, _defineProperty3.default)(_ref, prefix + '-' + this.color, !!this.color), (0, _defineProperty3.default)(_ref, prefix + '-' + this.size, !!this.size), _ref;
    },
    iconCode: function iconCode() {
      return this.loading ? 'loading' : this.icon;
    },
    iconCls: function iconCls() {
      var iconCode = this.loading ? 'loading' : this.icon;
      return (0, _defineProperty3.default)({}, iconPrefix + '-' + iconCode, !!iconCode);
    }
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _set = __webpack_require__(19);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var prefix = 'h-btn-group';
var Props = {
  size: new _set2.default(['l', 's', 'xs'])
};
exports.default = {
  props: {
    circle: Boolean,
    size: {
      type: String,
      validator: function validator(value) {
        return Props.size.has(value);
      }
    }
  },
  data: function data() {
    return {};
  },

  computed: {
    buttonGroupCls: function buttonGroupCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, '' + prefix, true), (0, _defineProperty3.default)(_ref, prefix + '-circle', !!this.circle), (0, _defineProperty3.default)(_ref, prefix + '-' + this.size, !!this.size), _ref;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
  props: {
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    value: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    setvalue: function setvalue(key) {
      if (this.disabled) return;
      var index = this.check(key);
      if (index > -1) {
        this.value.splice(index, 1);
      } else {
        this.value.push(key);
      }
      this.$emit('input', this.value);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    },
    check: function check(key) {
      var value = this.value.map(function (item) {
        return String(item);
      });
      return value.indexOf(String(key));
    },
    isInclude: function isInclude(key) {
      return this.check(key) > -1;
    }
  },
  computed: {
    arr: function arr() {
      if (!this.datas && !this.dict) {
        log.error('checkbox组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      var datas = this.datas;
      if (this.dict) {
        datas = _config2.default.getDict(this.dict);
      }

      var arr = datas || {};
      if (_utils2.default.isArray(datas)) {
        arr = _utils2.default.toObject(datas);
      }
      return arr;
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _manba = __webpack_require__(55);

var _manba2 = _interopRequireDefault(_manba);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateprefix = 'h-date'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var viewType = ['year', 'month', 'date', 'hour', 'minute', 'second'];

var options = _config2.default.getOption('datepicker');

var startView = {
  year: 'year',
  month: 'month',
  date: 'date',
  datetime: 'date',
  datehour: 'date',
  time: 'hour'
};

var endView = {
  year: 'year',
  month: 'month',
  date: 'date',
  datetime: 'minute',
  datehour: 'hour',
  time: 'minute'
};

var DateFormatLength = {
  year: 4,
  month: 7,
  date: 10,
  hour: 13,
  minute: 16
};

var genData = function genData(param) {
  var date = param.date,
      type = param.type,
      show = param.show,
      vm = param.vm,
      isNowDays = param.isNowDays;

  var disabled = false;
  if (_utils2.default.isObject(vm.option)) {
    if (vm.option.start) disabled = date.distance(vm.option.start, type) < 0;
    if (vm.option.end && !disabled) disabled = date.distance(vm.option.end, type) > 0;
    if (vm.option.disabled && !disabled) disabled = vm.option.disabled.call(null, date);
  }
  return {
    date: date,
    show: show,
    string: date.format(vm.format),
    disabled: disabled,
    isToday: date.distance(vm.today, type) == 0,
    isNowDays: isNowDays
  };
};

exports.default = {
  props: {
    type: {
      type: [String],
      default: 'date' //year, month, week
    },
    separate: {
      type: Boolean,
      default: true
    },
    option: Object,
    format: String,
    value: [Object, String],
    nowView: Object,
    range: String,
    rangeEnd: String
  },
  data: function data() {
    return {
      options: _utils2.default.extend({}, options.datetimeOptions, this.option),
      today: (0, _manba2.default)(),
      view: startView[this.type] };
  },

  filters: {
    hoursString: function hoursString(d) {
      return _utils2.default.padLeft(d.hours(), 2) + ':00';
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.range && !_this.separate) {
        _this.$el.addEventListener("mouseenter", function (event) {
          if (_this.view == 'date' && !!_this.value.start && !_this.value.end) {
            var target = event.target;
            if (target.tagName == 'SPAN') {
              var string = target.getAttribute('string');
              if (string) _this.$emit('updateRangeEnd', string);
            }
          }
        }, true);
        _this.$el.addEventListener("mouseout", function () {
          if (_this.view == 'date' && !!_this.value.start && !_this.value.end) {
            _this.$emit('updateRangeEnd', '');
          }
        }, true);
      }
    });
  },

  methods: {
    changeView: function changeView(view) {
      this.view = view;
      this.$emit('changeView');
    },
    resetView: function resetView() {
      this.view = startView[this.type];
    },
    updateView: function updateView(typeString, num) {
      var type = _manba2.default.DAY;
      if (typeString == 'month') {
        type = _manba2.default.MONTH;
      } else if (typeString == 'hour') {
        type = _manba2.default.HOUR;
      } else {
        if (this.view == 'hour') {
          type = _manba2.default.DAY;
        } else if (this.view == 'minute') {
          type = _manba2.default.DAY;
        } else if (this.view == 'year') {
          num = num * 12;
          type = _manba2.default.YEAR;
        } else if (this.view == 'month') {
          type = _manba2.default.YEAR;
        }
      }
      var nowView = this.nowView.add(num, type).time();
      this.$emit('updateView', nowView, this.range);
    },
    isSelected: function isSelected(d) {
      var length = DateFormatLength[this.view];
      if (_utils2.default.isObject(this.value)) {
        if (this.separate) {
          return this.value[this.range] == d.string;
        }
        return this.value.start == d.string || this.value.end == d.string;
      }
      return this.value.substring(0, length) == d.string.substring(0, length);
    },
    isRangeSelected: function isRangeSelected(d) {
      if (this.range && !this.separate && _utils2.default.isObject(this.value) && !!this.value.start && !!this.rangeEnd) {
        return this.value.start < d.string && this.rangeEnd > d.string || this.value.start > d.string && this.rangeEnd < d.string;
      }
      return false;
    },
    chooseDate: function chooseDate(d) {
      if (this.view == endView[this.type]) {
        this.setvalue(d.date, true);
      } else {
        var index = viewType.indexOf(this.view);

        //除了month和year点击，其他都直接完成赋值
        if (index > 1) {
          this.setvalue(d.date, false);
        }
        this.view = viewType[index + 1];
        this.$emit('updateView', d.date.time(), this.range);
      }
    },
    setvalue: function setvalue(date) {
      var isEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var value = '';
      if (!_utils2.default.isNull(date)) {
        value = (0, _manba2.default)(date).format(this.format);
      }
      this.$emit('input', value, isEnd, this.range);
    }
  },
  computed: {
    dateBodyCls: function dateBodyCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, dateprefix + '-body', true), (0, _defineProperty3.default)(_ref, dateprefix + '-body-' + this.view, true), _ref;
    },
    weeks: function weeks() {
      return options.weeks;
    },
    dates: function dates() {
      var nowDate = this.nowView;
      if (this.view == 'date') {
        var lastdayofmonth = nowDate.endOf(_manba2.default.MONTH);
        var firstdayofmonth = nowDate.startOf(_manba2.default.MONTH);
        var startDay = firstdayofmonth.day();
        startDay == 0 ? 6 : startDay--;
        var lastdayoflastmonth = firstdayofmonth.add(-1, _manba2.default.DAY);
        var dates = [];
        var lastMonthDays = lastdayoflastmonth.date() - startDay;
        for (var i = lastMonthDays; i <= lastdayoflastmonth.date(); i++) {
          dates.push(genData({
            date: (0, _manba2.default)([lastdayoflastmonth.year(), lastdayoflastmonth.month(), i]),
            type: _manba2.default.DAY,
            show: i,
            vm: this,
            isNowDays: false
          }));
        }
        for (var _i = 1; _i <= lastdayofmonth.date(); _i++) {
          dates.push(genData({
            date: (0, _manba2.default)([lastdayofmonth.year(), lastdayofmonth.month(), _i]),
            type: _manba2.default.DAY,
            show: _i,
            vm: this,
            isNowDays: true
          }));
        }
        var nextMonth = lastdayofmonth.add(1, _manba2.default.DAY);
        var nextMonthDays = 7 * 6 - dates.length;
        for (var _i2 = 1; _i2 <= nextMonthDays; _i2++) {
          dates.push(genData({
            date: (0, _manba2.default)([nextMonth.year(), nextMonth.month(), _i2]),
            type: _manba2.default.DAY,
            show: _i2,
            vm: this,
            isNowDays: false
          }));
        }
        return dates;
      } else if (this.view == 'month') {
        var _dates = [];
        for (var _i3 = 1; _i3 <= 12; _i3++) {
          _dates.push(genData({
            date: (0, _manba2.default)([nowDate.year(), _i3, 1]),
            type: _manba2.default.MONTH,
            show: options.months[_i3 - 1],
            vm: this,
            isNowDays: true
          }));
        }
        return _dates;
      } else if (this.view == 'year') {
        var _dates2 = [];
        var nowYear = nowDate.year();
        for (var _i4 = nowYear - 6; _i4 <= nowYear + 5; _i4++) {
          _dates2.push(genData({
            date: (0, _manba2.default)([_i4, 1, 1]),
            type: _manba2.default.YEAR,
            show: _i4,
            vm: this,
            isNowDays: true
          }));
        }
        return _dates2;
      } else if (this.view == 'hour') {
        var _dates3 = [];
        var list = [];
        if (_utils2.default.isFunction(this.options.hours)) {
          list = this.options.hours.call(null);
        } else {
          list = _utils2.default.numList(0, 24, 1);
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(list), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _i5 = _step.value;

            _dates3.push(genData({
              date: (0, _manba2.default)(nowDate.time()).hours(_i5).minutes(0),
              type: _manba2.default.HOUR,
              show: _utils2.default.padLeft(_i5, 2) + ':00',
              vm: this,
              isNowDays: true
            }));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return _dates3;
      } else if (this.view == 'minute') {
        var _dates4 = [];
        var hour = nowDate.hours();
        var _list = [];
        if (_utils2.default.isFunction(this.options.minutes)) {
          _list = this.options.minutes.call(null, hour);
        } else {
          _list = _utils2.default.numList(0, 60, this.options.minuteStep);
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(_list), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i6 = _step2.value;

            _dates4.push(genData({
              date: (0, _manba2.default)(nowDate.time()).minutes(_i6),
              type: _manba2.default.MINUTE,
              show: _utils2.default.padLeft(hour, 2) + ':' + _utils2.default.padLeft(_i6, 2),
              vm: this,
              isNowDays: true
            }));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return _dates4;
      }

      return [];
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _manba = __webpack_require__(55);

var _manba2 = _interopRequireDefault(_manba);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _dropdown = __webpack_require__(36);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dateBase = __webpack_require__(80);

var _dateBase2 = _interopRequireDefault(_dateBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'h-datetime'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var manbaType = {
  year: _manba2.default.YEAR,
  month: _manba2.default.MONTH,
  date: _manba2.default.DAY,
  datetime: _manba2.default.MINUTE,
  time: _manba2.default.MINUTE,
  datehour: _manba2.default.HOUR
};

var options = _config2.default.getOption('datepicker');

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'date' //year, month, week
    },
    option: Object,
    format: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasSeconds: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: String
  },
  data: function data() {
    var format = this.format || options.format[this.type];
    if (this.type == 'datetime' && this.hasSeconds) {
      format = options.format.datetimesecond;
    }
    return {
      nowDate: '',
      showDate: '',
      hasConfirm: this.type == 'datetime' || this.type == 'datehour',
      nowView: (0, _manba2.default)(),
      nowFormat: format
    };
  },

  watch: {
    value: function value() {
      this.parse(this.value);
    }
  },
  beforeMount: function beforeMount() {
    this.parse(this.value);
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.disabled) {
      var that = this;
      this.$nextTick(function () {
        var el = _this.$el.querySelector('.' + prefix + '>.h-datetime-show');
        var content = _this.$el.querySelector('.h-date-picker');
        _this.dropdown = new _dropdown2.default(el, {
          trigger: 'click',
          triggerOnce: true,
          content: content,
          container: document.body,
          events: {
            show: function show() {
              that.parse(that.value);
              that.$refs.datebase.resetView();
              if (that.nowDate) {
                that.nowView = (0, _manba2.default)(that.nowDate);
              }
            }
          }
        });
      });
    }
  },

  methods: {
    setShortcutValue: function setShortcutValue(s) {
      var value = s.value.call(null);
      this.parse(value);
      this.setvalue(this.nowDate);
      this.hide();
    },
    updateView: function updateView(value) {
      this.nowView = (0, _manba2.default)(value);
      this.dropdown.popperInstance.update();
    },
    changeView: function changeView() {
      if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
    },
    inputEvent: function inputEvent(event) {
      var value = event.target.value;
      try {
        (0, _manba2.default)(value);
      } catch (evt) {
        return;
      }
      this.parse(value, false);
    },
    changeEvent: function changeEvent(event) {
      var value = event.target.value;
      this.parse(value);
      if (this.nowDate && _utils2.default.isObject(this.option) && this.type != "time") {
        var disabled = false;
        var type = manbaType[this.type];
        if (this.option.start && this.nowDate.distance(this.option.start, type) < 0) disabled = this.option.start;
        if (this.option.end && !disabled && this.nowDate.distance(this.option.end, type) > 0) disabled = this.option.end;
        if (this.option.disabled && this.option.disabled.call(null, disabled || this.nowDate)) disabled = '';
        if (disabled !== false) {
          this.parse(disabled);
        }
      }
      this.setvalue(this.nowDate);
    },
    parse: function parse(value) {
      var initShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (value != '' && !_utils2.default.isNull(value)) {
        try {
          if (this.type == 'time') {
            value = '1980-01-01 ' + value;
          }
          this.nowView = (0, _manba2.default)(value);
          this.nowDate = this.nowView.format('k');
          if (initShow) this.showDate = this.nowView.format(this.nowFormat);
          return;
        } catch (err) {
          // log.error(err);
        }
      }

      this.nowView = (0, _manba2.default)();
      this.nowDate = '';
      if (initShow) this.showDate = '';
    },
    hide: function hide() {
      this.dropdown.hide();
    },
    setvalue: function setvalue(string) {
      var isEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // log(string);
      var value = string;
      if (string != '') {
        value = (0, _manba2.default)(string).format(this.nowFormat);
      }
      this.$emit('input', value);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (!this.hasConfirm && isEnd) {
        this.hide();
      }
      this.dropdown.popperInstance.update();
    }
  },
  computed: {
    shortcuts: function shortcuts() {
      var shortcuts = [];
      var shortcutsConfig = null;
      if (this.option && this.option.shortcuts) {
        shortcutsConfig = this.option.shortcuts;
      }
      if (_utils2.default.isArray(shortcutsConfig)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(shortcutsConfig), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            if (_utils2.default.isString(s)) {
              shortcuts.push(options.shortcuts[s]);
            } else if (_utils2.default.isObject(s)) {
              shortcuts.push(s);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return shortcuts;
    },
    dateCls: function dateCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, '' + prefix, true), (0, _defineProperty3.default)(_ref, prefix + '-input-border', !this.noBorder), (0, _defineProperty3.default)(_ref, prefix + '-disabled', this.disabled), _ref;
    },
    datePickerCls: function datePickerCls() {
      return (0, _defineProperty3.default)({}, prefix + '-has-shortcut', this.shortcuts.length > 0);
    }
  },
  components: {
    dateBase: _dateBase2.default
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _manba = __webpack_require__(55);

var _manba2 = _interopRequireDefault(_manba);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _dropdown = __webpack_require__(36);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dateBase = __webpack_require__(80);

var _dateBase2 = _interopRequireDefault(_dateBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'h-datetime'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var manbaType = {
  year: _manba2.default.YEAR,
  month: _manba2.default.MONTH,
  date: _manba2.default.DAY,
  datetime: _manba2.default.MINUTE,
  time: _manba2.default.MINUTE,
  datehour: _manba2.default.HOUR
};

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'date' //year, month, week
    },
    option: Object,
    format: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasSeconds: {
      type: Boolean,
      default: false
    },
    separate: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: Object
  },
  data: function data() {
    var format = this.format || _config2.default.getOption('datepicker.format')[this.type];
    if (this.type == 'datetime' && this.hasSeconds) {
      format = _config2.default.getOption('datepicker.format.datetimesecond');
    }
    return {
      paramName: _config2.default.getOption('datepicker.daterangeOptions.paramName'),
      nowDate: {
        start: '',
        end: ''
      },
      separateOption: {
        start: _utils2.default.extend({}, this.option),
        end: _utils2.default.extend({}, this.option)
      },
      isSeparate: this.type == "datetime" || this.separate,
      nowView: {
        start: (0, _manba2.default)(),
        end: (0, _manba2.default)().add(1, _manba2.default.MONTH)
      },
      rangeEnd: '',
      nowFormat: format
    };
  },
  beforeMount: function beforeMount() {
    this.parse(this.value);
  },
  mounted: function mounted() {
    var _this = this;

    var that = this;
    if (!this.disabled) {
      this.$nextTick(function () {
        var el = _this.$el.querySelector('.' + prefix + '>.h-datetime-show');
        var content = _this.$el.querySelector('.h-date-picker');
        _this.dropdown = new _dropdown2.default(el, {
          trigger: 'click',
          triggerOnce: true,
          content: content,
          container: document.body,
          events: {
            show: function show() {
              that.initNowView();
            }
          }
        });
      });
    }
  },

  methods: {
    updateRangeEnd: function updateRangeEnd(string) {
      this.rangeEnd = string;
    },
    setShortcutValue: function setShortcutValue(s) {
      var value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    updateView: function updateView(value, rangeType) {
      this.nowView[rangeType] = (0, _manba2.default)(value);
      if (!this.isSeparate) {
        if (rangeType == 'end') {
          this.nowView.start = (0, _manba2.default)(value).add(-1, _manba2.default.MONTH);
        } else {
          this.nowView.end = (0, _manba2.default)(value).add(1, _manba2.default.MONTH);
        }
      }
      this.dropdown.popperInstance.update();
    },
    changeView: function changeView() {
      if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
    },
    changeEvent: function changeEvent(event) {
      // let value = event.target.value;
      // this.parse(value);
      // if (utils.isObject(this.option) && this.type != "time") {
      //   let disabled = false;
      //   let type = manbaType[this.type];
      //   if (this.option.start && this.nowView.distance(this.option.start, type) < 0) disabled = this.option.start;
      //   if (this.option.end && !disabled && this.nowView.distance(this.option.end, type) > 0) disabled = this.option.end;
      //   if (this.option.disabled && this.option.disabled.call(null, disabled || this.nowView)) disabled = '';
      //   if (disabled !== false) {
      //     this.parse(disabled);
      //   }
      // }
    },
    parseSingle: function parseSingle(value, range) {
      if (_utils2.default.isObject(value) && value[this.paramName[range]]) {
        try {
          var nowValue = (0, _manba2.default)(value[this.paramName[range]]);
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        } catch (evt) {}
      }
      this.nowDate[range] = '';
    },
    parse: function parse(value) {
      this.parseSingle(value, 'start');
      this.parseSingle(value, 'end');
      this.rangeEnd = this.nowDate.end;
    },
    initNowView: function initNowView() {
      var start = (0, _manba2.default)();
      if (!!this.nowDate.start) {
        start = (0, _manba2.default)(this.nowDate.start);
      }
      var endRange = this.isSeparate ? 0 : 1;
      this.nowView = {
        start: start,
        end: (0, _manba2.default)(start).add(endRange, _manba2.default.MONTH)
      };
      this.$refs.start.resetView();
      this.$refs.end.resetView();
    },
    hide: function hide() {
      this.dropdown.hide();
    },
    clear: function clear() {
      this.updateValue({});
      this.separateOption = {
        start: _utils2.default.extend({}, this.option),
        end: _utils2.default.extend({}, this.option)
      };
      this.initNowView();
    },
    setvalue: function setvalue(string) {
      var isEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var range = arguments[2];

      string = string || '';
      var lastDate = _utils2.default.copy(this.nowDate);
      if (this.isSeparate) {
        lastDate[range] = string;
        var other = range == 'start' ? "end" : "start";
        this.separateOption[other][range] = string;
        this.$refs[other].updateView("minute", 0);
      } else {
        if (!lastDate.start) {
          lastDate.start = string;
        } else if (!lastDate.end) {
          lastDate.end = string;
        } else {
          lastDate.start = '';
          lastDate.end = '';
        }
      }
      if (isEnd && lastDate.start && lastDate.end && lastDate.start > lastDate.end) {
        var start = lastDate.start;
        lastDate.start = lastDate.end;
        lastDate.end = start;
      }

      this.updateValue(lastDate);
    },
    updateValue: function updateValue(value) {
      var _value;

      value = (_value = {}, (0, _defineProperty3.default)(_value, this.paramName.start, value.start), (0, _defineProperty3.default)(_value, this.paramName.end, value.end), _value);
      this.parse(value);
      this.$emit('input', value);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.popperInstance.update();
    }
  },
  computed: {
    show: function show() {
      if (!_utils2.default.isObject(this.value)) {
        return '';
      }
      return (this.value.start || '不限') + ' - ' + (this.value.end || '不限');
    },
    shortcuts: function shortcuts() {
      var shortcuts = [];
      var shortcutsConfig = null;
      if (this.option && this.option.shortcuts) {
        shortcutsConfig = this.option.shortcuts;
      }
      if (_utils2.default.isArray(shortcutsConfig)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(shortcutsConfig), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            if (_utils2.default.isString(s)) {
              shortcuts.push(_config2.default.getOption('datepicker.shortcuts')[s]);
            } else if (_utils2.default.isObject(s)) {
              shortcuts.push(s);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      return shortcuts;
    },
    dateCls: function dateCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, '' + prefix, true), (0, _defineProperty3.default)(_ref, prefix + '-range', true), (0, _defineProperty3.default)(_ref, prefix + '-input-border', !this.noBorder), (0, _defineProperty3.default)(_ref, prefix + '-disabled', this.disabled), _ref;
    },
    datePickerCls: function datePickerCls() {
      return (0, _defineProperty3.default)({}, prefix + '-has-shortcut', this.shortcuts.length > 0);
    },
    startOption: function startOption() {
      return this.isSeparate ? this.separateOption.start : this.option;
    },
    endOption: function endOption() {
      return this.isSeparate ? this.separateOption.end : this.option;
    }
  },
  components: {
    dateBase: _dateBase2.default
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-form'; //
//
//
//
//

exports.default = {
  props: {
    mode: {
      type: String,
      default: "single" //inline,single,twocolumn
    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: Object,
    labelPosition: String
  },
  data: function data() {
    return {
      // errorMessages: {}

    };
  },
  beforeMount: function beforeMount() {},

  methods: {
    validField: function validField(prop) {
      if (!this.model) return true;
      var value = _utils2.default.getKeyValue(this.model, prop);
      // log(prop);
      var ruleKey = prop.replace(/\[\w+\]/, "[]");
      var rule = this.fRules.required.includes(ruleKey);
      // log(rule);
      // this.clearValidField(prop);
      if (rule && (_utils2.default.isNull(value) || value == '')) {
        // utils.removeClass('validor-error');
        return { message: "\u503C\u4E0D\u80FD\u4E3A\u7A7A" };
      }
      return true;
      // this.errorMessages[prop] = ;
    }
  },
  computed: {
    fRules: function fRules() {
      return this.rules || { required: [] };
    },
    formCls: function formCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, "" + prefixCls, true), (0, _defineProperty3.default)(_ref, prefixCls + "-" + this.mode, true), (0, _defineProperty3.default)(_ref, prefixCls + "-label-" + this.labelPosition, !!this.labelPosition), _ref;
    }
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _set = __webpack_require__(19);

var _set2 = _interopRequireDefault(_set);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-form-item'; //
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    label: String,
    prop: String,
    labelWidth: Number,
    required: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    single: {
      type: Boolean,
      default: false
    },
    validable: {
      type: Boolean,
      default: true
    },
    noPadding: {
      type: Boolean,
      default: false
    },
    rule: Object
  },
  data: function data() {
    return {
      validResult: null,
      config: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.$el.addEventListener("blur", function (event) {
        _this.trigger(event);
      }, true);
      _this.$el.addEventListener("setvalue", function (event) {
        _this.trigger(event);
      });
    });
    var parent = this.getParent();
    if (this.prop) {
      this.config = parent.fRules.required.includes(this.prop);
    }
  },

  methods: {
    getParent: function getParent() {
      var parent = this.$parent;
      var filterTag = new _set2.default(['Form', 'hForm']);
      while (parent != null && !filterTag.has(parent.$options._componentTag)) {
        parent = parent.$parent;
      }
      if (!parent) {
        log.error('请将formItem组件置于Form组件内');
      }
      return parent;
    },
    getDirectParent: function getDirectParent() {
      var parent = this.$parent;
      var filterTag = new _set2.default(['Form', 'hForm', 'FormItem']);
      while (parent != null && !filterTag.has(parent.$options._componentTag)) {
        parent = parent.$parent;
      }
      if (!parent) {
        log.error('请将formItem组件置于Form组件内');
      }
      return parent;
    },

    // getErrorMessage() {
    //   if (!this.validable || utils.isNull(this.prop)) {
    //     return false;
    //   }
    //   let parent = this.getParent();
    //   if (parent) return this.getParent().errorMessages[this.prop];
    //   return '';
    // },
    trigger: function trigger(evt) {
      var parent = this.getParent();
      if (!parent) return false;
      var target = evt.srcElement;
      // target.getAttribute("prop")
      var prop = this.prop;
      if (!this.validable || _utils2.default.isNull(prop)) {
        return;
      }
      // this.showMessage = true;
      // let tagName = target.tagName;
      // let selfProp = true;
      // let label = target.getAttribute("label") || this.label;
      // log(prop, label, tagName);
      var result = this.getParent().validField(prop);
      if (result === true) {
        // this.errorMessage = null;
        this.validResult = null;
      } else {
        this.validResult = result;
        // this.errorMessage = result.message;
      }
    }
  },
  computed: {
    initLabelWidth: function initLabelWidth() {
      var parent = this.getDirectParent(true);
      // if (!parent) return 'auto';
      var mode = this.$parent.mode;
      var hasWidth = !(mode == 'block' || mode == 'inline') || this.single && mode == 'twocolumn';
      var width = hasWidth ? this.labelWidth || parent.labelWidth || false : false;
      return width ? width + "px" : 'auto';
    },
    formItemCls: function formItemCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, "" + prefixCls, true), (0, _defineProperty3.default)(_ref, prefixCls + "-single", this.single), (0, _defineProperty3.default)(_ref, prefixCls + "-required", this.required || this.config), (0, _defineProperty3.default)(_ref, prefixCls + "-valid-error", !!this.validResult), (0, _defineProperty3.default)(_ref, prefixCls + "-no-padding", !!this.noPadding), _ref;
    },
    labelCls: function labelCls() {
      return (0, _defineProperty3.default)({}, prefixCls + "-label", true);
    },
    labelStyleCls: function labelStyleCls() {
      return {
        width: this.initLabelWidth
      };
    },
    contentStyleCls: function contentStyleCls() {
      return {
        'margin-left': this.initLabelWidth
      };
    }
  }
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {
  data: function data() {
    return {};
  },

  computed: {
    labelWidth: function labelWidth() {
      return this.$parent.labelWidth;
    },
    mode: function mode() {
      return this.$parent.mode;
    }
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-col'; //
//
//
//
//

var getHalf = function getHalf(width, hasRemainder) {
  return Math.floor(width / 2) + (!hasRemainder ? width % 2 : 0) + 'px';
};

exports.default = {
  props: {
    width: [Number, String],
    flex: [Number, String],
    className: String,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    classes: function classes() {
      var _classList$push;

      var width = this.width;
      var classList = ['' + prefixCls];
      classList.push((_classList$push = {}, (0, _defineProperty3.default)(_classList$push, prefixCls + '-' + width, width), (0, _defineProperty3.default)(_classList$push, '' + this.className, !!this.className), _classList$push));

      // let noOtherWidth = width==undefined&&this.flex == undefined;
      var _arr = ['xs', 'sm', 'md', 'lg', 'xl'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var size = _arr[_i];
        if (_utils2.default.isNumber(this[size])) {
          // noOtherWidth = false;
          classList.push(prefixCls + '-' + size + '-' + this[size]);
        }
      }
      // if(noOtherWidth){
      //   width = 24;
      // }

      return classList;
    },
    styles: function styles() {
      var style = {};
      var styletype = 'padding';
      if (this.flex) {
        style.flex = this.flex;
      }
      if (this.$parent.type == 'flex') {
        styletype = 'margin';
      }

      if (_utils2.default.isNumber(this.$parent.space) && this.$parent.space !== 0) {
        var leftTop = getHalf(this.$parent.space, true);
        var rightBottom = getHalf(this.$parent.space, false);
        style[styletype + 'Left'] = leftTop;
        style[styletype + 'Right'] = rightBottom;
        style[styletype + 'Top'] = leftTop;
        style[styletype + 'Bottom'] = rightBottom;
      }

      if (_utils2.default.isNumber(this.$parent.spaceX) && this.$parent.spaceX !== 0) {
        style[styletype + 'Left'] = getHalf(this.$parent.spaceX, true);
        style[styletype + 'Right'] = getHalf(this.$parent.spaceX, false);
      }

      if (_utils2.default.isNumber(this.$parent.spaceY) && this.$parent.spaceY !== 0) {
        style[styletype + 'Top'] = getHalf(this.$parent.spaceY, true);
        style[styletype + 'Bottom'] = getHalf(this.$parent.spaceY, false);
      }

      return style;
    }
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _set = __webpack_require__(19);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var prefixCls = 'h-row';

var Props = {
  type: new _set2.default(['flex']),
  align: new _set2.default(['top', 'middle', 'bottom']),
  justify: new _set2.default(['start', 'end', 'center', 'space-around', 'space-between']),
  direction: new _set2.default(['row', 'row-reverse', 'column', 'column-reverse'])
};

var getHalf = function getHalf(width, hasRemainder) {
  return Math.floor(width / -2) + (hasRemainder ? width % 2 : 0) + 'px';
};

exports.default = {
  props: {
    type: {
      validator: function validator(value) {
        return Props.type.has(value);
      }
    },
    align: {
      validator: function validator(value) {
        return Props.align.has(value);
      }
    },
    justify: {
      validator: function validator(value) {
        return Props.justify.has(value);
      }
    },
    direction: {
      validator: function validator(value) {
        return Props.direction.has(value);
      }
    },
    space: {
      type: Number,
      default: 0
    },
    spaceX: {
      type: Number,
      default: 0
    },
    spaceY: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return [(_ref = {}, (0, _defineProperty3.default)(_ref, '' + prefixCls, !this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type, !!this.type), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.align, !!this.align), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.direction, this.direction), (0, _defineProperty3.default)(_ref, prefixCls + '-' + this.type + '-' + this.justify, !!this.justify), _ref)];
    },
    styles: function styles() {
      var style = {};
      if (this.space !== 0) {
        var leftTop = getHalf(this.space, true);
        var rightBottom = getHalf(this.space, false);
        style.marginLeft = leftTop;
        style.marginRight = rightBottom;
        style.marginTop = leftTop;
        style.marginBottom = rightBottom;
      }

      if (this.spaceX !== 0) {
        style.marginLeft = getHalf(this.spaceX, true);
        style.marginRight = getHalf(this.spaceX, false);
      }

      if (this.spaceY !== 0) {
        style.marginTop = getHalf(this.spaceY, true);
        style.marginBottom = getHalf(this.spaceY, false);
      }

      return style;
    }
  }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'h-modal'; //
//
//
//
//
//
//
//
//
//
//

var notifyprefix = 'h-notify';
var hasDivider = _config2.default.getOption('modal', 'hasDivider');

exports.default = {
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default: hasDivider
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    middle: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value: function value() {
      var _this = this;

      if (this.value) {
        this.$el.style.display = 'block';
        setTimeout(function () {
          _this.isOpened = _this.value;
        }, 100);
      } else {
        this.isOpened = this.value;
        setTimeout(function () {
          _this.$el.style.display = 'none';
        }, 200);
      }
    }
  },
  data: function data() {
    return {
      isOpened: this.value
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      document.body.appendChild(_this2.$el);
      if (!_this2.value) {
        _this2.$el.style.display = 'none';
      }
    });
  },

  methods: {
    setvalue: function setvalue(fromMask) {
      if (!fromMask || fromMask && this.hasMask && this.closeOnMask) {
        this.$emit('input', !this.value);
      }
    }
  },
  computed: {
    contentCls: function contentCls() {
      return (0, _defineProperty3.default)({}, notifyprefix + '-content', true);
    },
    containerCls: function containerCls() {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty3.default)(_ref2, notifyprefix + '-container', true), (0, _defineProperty3.default)(_ref2, notifyprefix + '-container-center', !!this.middle), _ref2;
    },
    noticeCls: function noticeCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty3.default)(_ref3, prefix, true), (0, _defineProperty3.default)(_ref3, notifyprefix, true), (0, _defineProperty3.default)(_ref3, notifyprefix + '-show', this.isOpened), (0, _defineProperty3.default)(_ref3, notifyprefix + '-has-mask', this.hasMask), (0, _defineProperty3.default)(_ref3, notifyprefix + '-has-close', this.hasCloseIcon), (0, _defineProperty3.default)(_ref3, notifyprefix + '-has-divider', this.hasDivider), _ref3;
    }
  }
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'h-modal'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var notifyprefix = 'h-notify';
var hasDivider = _config2.default.getOption('modal', 'hasDivider');

exports.default = {
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default: hasDivider
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    middle: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    component: Object,
    propsData: [Boolean, Object, String, Array]
  },
  watch: {
    value: function value() {
      var _this = this;

      if (this.value) {
        this.$el.style.display = 'block';
        this.nowComponent = this.$options.propsData.component;
        setTimeout(function () {
          _this.isOpened = _this.value;
        }, 100);
      } else {
        this.isOpened = this.value;
        setTimeout(function () {
          _this.$el.style.display = 'none';
          _this.nowComponent = "";
        }, 200);
      }
    }
  },
  data: function data() {
    return {
      nowComponent: '',
      isOpened: this.value
    };
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      document.body.appendChild(_this2.$el);
      if (!_this2.value) {
        _this2.$el.style.display = 'none';
      }
    });
  },

  methods: {
    close: function close() {
      var _this3 = this;

      this.isOpened = false;
      setTimeout(function () {
        _this3.$el.style.display = 'none';
        _this3.nowComponent = "";
      }, 200);
      this.$emit('input', false);
    },
    setvalue: function setvalue(fromMask) {
      if (!fromMask || fromMask && this.hasMask && this.closeOnMask) {
        this.$emit('input', !this.value);
      }
    }
  },
  computed: {
    contentCls: function contentCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, notifyprefix + '-content', true), (0, _defineProperty3.default)(_ref, notifyprefix + '-content-component', true), _ref;
    },
    containerCls: function containerCls() {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty3.default)(_ref2, notifyprefix + '-container', true), (0, _defineProperty3.default)(_ref2, notifyprefix + '-container-center', !!this.middle), _ref2;
    },
    noticeCls: function noticeCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty3.default)(_ref3, prefix, true), (0, _defineProperty3.default)(_ref3, notifyprefix, true), (0, _defineProperty3.default)(_ref3, notifyprefix + '-show', this.isOpened), (0, _defineProperty3.default)(_ref3, notifyprefix + '-has-close', this.hasCloseIcon), (0, _defineProperty3.default)(_ref3, notifyprefix + '-has-divider', this.hasDivider), _ref3;
    }
  }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _prefix = 'h-page'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var pageConfig = _config2.default.getOption('page');

exports.default = {
  props: {
    size: {
      type: Number,
      default: pageConfig.size
    },
    sizes: {
      type: Array,
      default: function _default() {
        return pageConfig.sizes;
      }
    },
    align: {
      type: String,
      default: 'left'
    },
    cur: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    small: {
      type: Boolean,
      default: pageConfig.small
    },
    layout: {
      type: String,
      default: pageConfig.layout
    }
  },
  data: function data() {
    var layoutList = this.layout.replace(' ', '').split(',');
    var orders = { total: -1, pager: -1, jumper: -1, sizes: -1 };
    for (var o in orders) {
      orders[o] = layoutList.indexOf(o);
    }
    var keyField = _config2.default.getOption('dict', 'key_field');
    var titleField = _config2.default.getOption('dict', 'title_field');
    return {
      sizesShow: this.sizes.map(function (item) {
        var _ref;

        return _ref = {}, (0, _defineProperty3.default)(_ref, keyField, item), (0, _defineProperty3.default)(_ref, titleField, item + ' \u6761/\u9875'), _ref;
      }),
      sizeNow: this.size,
      curNow: this.cur,
      orders: orders
    };
  },

  watch: {
    cur: function cur() {
      // this.curNow = this.cur;
    }
  },
  methods: {
    prev: function prev() {
      this.change(this.curNow - 1);
    },
    next: function next() {
      this.change(this.curNow + 1);
    },
    jump: function jump(event) {
      var value = parseInt(event.target.value, 10);
      log(value);
      if (isNaN(value)) {
        this.$Message.error("您输入的值格式不正确");
        return;
      }
      if (value > this.count || value < 1) {
        this.$Message.error("您输入的值超过范围");
        return;
      }
      this.curNow = parseInt(event.target.value, 10);
      this.$emit("change", { cur: this.curNow, size: this.sizeNow });
    },
    change: function change(cur) {
      if (this.curNow == cur) return;
      this.curNow = cur;
      this.$emit("change", { cur: this.curNow, size: this.sizeNow });
    },
    changesize: function changesize() {
      this.curNow = 1;
      this.$emit("change", { cur: 1, size: this.sizeNow });
    },
    genPagerCls: function genPagerCls(num) {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _prefix + '-pager', true), (0, _defineProperty3.default)(_ref2, _prefix + '-pager-selected', this.curNow == num), _ref2;
    }
  },
  computed: {
    pageStyle: function pageStyle() {
      return {
        "justify-content": {
          left: "flex-start",
          center: "center",
          right: "flex-end"
        }[this.align]
      };
    },
    count: function count() {
      return Math.ceil(this.total / this.sizeNow);
    },
    pagerSize: function pagerSize() {
      if (this.count < 3) {
        return [];
      }
      var pageStart = this.curNow < 4 ? 2 : this.curNow - 2;
      var size = this.count > 6 ? 5 : this.count - 2;
      // log(size);
      // if (this.curNow == 1 || this.curNow == this.count) size -= 1;
      if (pageStart + size >= this.count) {
        pageStart = this.count - size;
      }
      var list = [];
      for (var i = 0; i < size; i++) {
        list.push(i + pageStart);
      }
      return list;
    },
    prefix: function prefix() {
      return _prefix;
    },
    prevCls: function prevCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty3.default)(_ref3, _prefix + '-pager-disabled', this.curNow == 1), (0, _defineProperty3.default)(_ref3, 'h-page-pager', true), _ref3;
    },
    nextCls: function nextCls() {
      var _ref4;

      return _ref4 = {}, (0, _defineProperty3.default)(_ref4, _prefix + '-pager-disabled', this.curNow == this.count), (0, _defineProperty3.default)(_ref4, 'h-page-pager', true), _ref4;
    },
    pagerCls: function pagerCls() {
      return (0, _defineProperty3.default)({}, _prefix + '-pager', true);
    },
    pageCls: function pageCls() {
      var _ref6;

      return _ref6 = {}, (0, _defineProperty3.default)(_ref6, '' + _prefix, true), (0, _defineProperty3.default)(_ref6, _prefix + '-small', this.small), _ref6;
    },
    containerCls: function containerCls() {
      return {};
    },
    noticeCls: function noticeCls() {
      return {};
    }
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
  props: {
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    value: [String, Boolean, Number]
  },
  data: function data() {
    return {};
  },

  methods: {
    setvalue: function setvalue(key) {
      if (this.disabled) return;
      this.$emit('input', key);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    arr: function arr() {
      if (!this.datas && !this.dict) {
        log.error('Radio组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      var datas = this.datas;
      if (this.dict) {
        datas = _config2.default.getDict(this.dict);
      }

      var arr = datas || {};
      if (_utils2.default.isArray(datas)) {
        arr = _utils2.default.toObject(datas);
      }
      return arr;
    }
  }
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  data: function data() {
    return {
      mouseValue: false
    };
  },

  methods: {
    setvalue: function setvalue(value) {
      if (this.readonly) return;
      this.$emit('input', value);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    },
    mouseover: function mouseover(n) {
      if (this.readonly) return;
      this.mouseValue = n;
    },
    mouseleave: function mouseleave() {
      if (this.readonly) return;
      this.mouseValue = false;
    },
    starCls: function starCls(n) {
      var v = this.mouseValue || Number(this.value);
      return {
        'h-icon-star-on': v >= n,
        'h-icon-star': v < n
      };
    }
  },
  filters: {
    isInclude: function isInclude(key, value) {
      return value.includes(key);
    }
  },
  computed: {}
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getIterator2 = __webpack_require__(17);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _dropdown = __webpack_require__(36);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'h-select'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    type: {
      type: [String],
      default: 'key' //object
    },
    dict: String,
    limit: {
      type: Number
    },
    autosize: {
      type: Boolean,
      default: false
    },
    nullOption: {
      type: Boolean,
      default: true
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    render: Function,
    value: [Number, String, Array, Object]
  },
  data: function data() {
    return {
      key: _config2.default.getOption('dict', 'key_field'),
      title: _config2.default.getOption('dict', 'title_field'),
      html: "select_rander_html",
      codes: null,
      objects: null
    };
  },

  watch: {
    value: function value() {
      this.parse();
    }
  },
  beforeMount: function beforeMount() {
    this.parse();
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var el = _this.$el.querySelector('.h-select-input');
      var content = _this.$el.querySelector('.h-select-group');
      _this.dropdown = new _dropdown2.default(el, {
        content: content,
        equalWidth: true,
        container: document.body
      });
    });
  },

  methods: {
    setObjects: function setObjects() {
      if (this.multiple) {
        var os = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(this.codes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var code = _step.value;

            os.push(this.optionsMap[code]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.objects = os;
      } else {
        this.objects = this.optionsMap[this.codes];
      }
    },
    parse: function parse() {
      var _this2 = this;

      if (this.multiple) {
        var values = this.value || [];
        this.codes = values.map(function (item) {
          return _this2.type == 'key' ? item : item[_this2.key];
        });
      } else {
        if (this.type == 'key') {
          this.codes = this.value;
        } else if (_utils2.default.isObject(this.value)) {
          this.codes = this.value[this.key];
        }
      }
      this.setObjects();
    },
    setvalue: function setvalue(option) {
      if (this.readonly) return;
      var code = option[this.key];
      if (this.multiple) {
        if (!_utils2.default.isNull(this.limit) && !this.codes.includes(code) && this.codes.length >= this.limit) {
          this.$Message.error('\u60A8\u6700\u591A\u53EF\u4EE5\u9009' + this.limit + '\u4E2A\u9009\u9879');
          return;
        }
        _utils2.default.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      var value = this.type == 'key' ? this.codes : this.objects;
      this.$emit('input', value);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (this.multiple) {
        this.dropdown.popperInstance.update();
      } else {
        this.dropdown.hide();
      }
    },
    getLiCls: function getLiCls(option) {
      var code = option[this.key];
      if (_utils2.default.isNull(code)) return {};
      return (0, _defineProperty3.default)({}, prefix + '-item-selected', this.multiple ? this.codes.includes(code) : this.codes == code);
    }
  },
  filters: {
    showText: function showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    selectCls: function selectCls() {
      var _ref2;

      var autosize = !!this.noBorder;
      if (!autosize) {
        autosize = this.autosize;
      }
      return _ref2 = {}, (0, _defineProperty3.default)(_ref2, '' + prefix, true), (0, _defineProperty3.default)(_ref2, prefix + '-input-border', !this.noBorder), (0, _defineProperty3.default)(_ref2, prefix + '-multiple', this.multiple), (0, _defineProperty3.default)(_ref2, prefix + '-no-autosize', !autosize), _ref2;
    },
    inputCls: function inputCls() {
      return (0, _defineProperty3.default)({}, prefix + '-input', true);
    },
    groupCls: function groupCls() {
      var _ref4;

      return _ref4 = {}, (0, _defineProperty3.default)(_ref4, prefix + '-group', true), (0, _defineProperty3.default)(_ref4, prefix + '-multiple', this.multiple), _ref4;
    },
    optionsMap: function optionsMap() {
      var optionsMap = _utils2.default.toObject(this.options, this.key);
      delete optionsMap.null;
      return optionsMap;
    },
    options: function options() {
      var _this3 = this;

      if (!this.datas && !this.dict) {
        log.error('Select组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      var datas = this.datas;
      if (this.dict) {
        datas = _config2.default.getDict(this.dict);
      }
      var options = [];
      if (_utils2.default.isObject(datas)) {
        options = _utils2.default.toArray(datas, this.key, this.title);
      } else if (_utils2.default.isArray(datas)) {
        if (datas.length == 0) {
          options = [];
        } else {
          var data0 = datas[0];
          if (_utils2.default.isObject(data0)) {
            options = _utils2.default.copy(datas);
          } else {
            options = datas.map(function (item) {
              var _ref5;

              return _ref5 = {}, (0, _defineProperty3.default)(_ref5, '' + _this3.key, item), (0, _defineProperty3.default)(_ref5, '' + _this3.title, item), _ref5;
            });
          }
        }
      }
      if (this.render) {
        options.forEach(function (item) {
          item[_this3.html] = _this3.render.call(null, item);
        });
      }
      if (!this.mutiple && this.nullOption) {
        var _options$unshift;

        options.unshift((_options$unshift = {}, (0, _defineProperty3.default)(_options$unshift, '' + this.key, null), (0, _defineProperty3.default)(_options$unshift, '' + this.title, '请选择'), (0, _defineProperty3.default)(_options$unshift, '' + this.html, '请选择'), _options$unshift));
      }
      return options;
    }
  }
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },

  methods: {
    setvalue: function setvalue(value) {
      if (this.disabled) return;
      this.$emit('input', value);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    }
  }
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

exports.default = {
  props: {
    small: {
      type: Boolean,
      default: false
    },
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    value: [String, Boolean, Number]
  },
  data: function data() {
    return {};
  },

  methods: {
    setvalue: function setvalue(key) {
      if (this.disabled) return;
      this.$emit('input', key);
      var event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.value);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    arr: function arr() {
      if (!this.datas && !this.dict) {
        log.error('Switchlist组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      var datas = this.datas;
      if (this.dict) {
        datas = _config2.default.getDict(this.dict);
      }

      var arr = datas || {};
      if (_utils2.default.isArray(datas)) {
        arr = _utils2.default.toObject(datas);
      }
      return arr;
    }
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

var prefix = 'h-timeline';
exports.default = {
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    icon: String
  },
  data: function data() {
    var _itemClass;

    return {
      prefix: prefix,
      itemClass: (_itemClass = {}, (0, _defineProperty3.default)(_itemClass, prefix + '-item', true), (0, _defineProperty3.default)(_itemClass, 'has-icon', !!this.icon), _itemClass)
    };
  },

  computed: {
    circleSC: function circleSC() {
      var styles = {};
      var classes = (0, _defineProperty3.default)({}, prefix + '-item-circle', true);
      var color = this.color;
      if (color.startsWith("#")) {
        styles.color = color;
        styles['border-color'] = color;
      } else {
        classes[color + '-color'] = true;
      }

      return {
        styles: styles,
        classes: classes
      };
    },
    timeSC: function timeSC() {
      var width = this.$parent.timeWidth || 100;
      return {
        classes: (0, _defineProperty3.default)({}, prefix + '-item-time', true),
        styles: {
          width: width + 'px'
        }
      };
    }
  }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(3);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//

var prefixCls = 'h-timeline';
exports.default = {
  props: {
    pending: {
      default: false
    },
    time: {
      default: false
    },
    timeWidth: {
      default: 100
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return ['' + prefixCls, (_ref = {}, (0, _defineProperty3.default)(_ref, prefixCls + '-pending', this.pending), (0, _defineProperty3.default)(_ref, prefixCls + '-time', this.time), _ref)];
    }
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loading = __webpack_require__(185);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loading2.default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = exports.Button = undefined;

var _button = __webpack_require__(186);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(187);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _button2.default;
exports.ButtonGroup = _buttonGroup2.default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = __webpack_require__(188);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _checkbox2.default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datepicker = __webpack_require__(189);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _daterangepicker = __webpack_require__(190);

var _daterangepicker2 = _interopRequireDefault(_daterangepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { DatePicker: _datepicker2.default, DateRangePicker: _daterangepicker2.default };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(191);

var _form2 = _interopRequireDefault(_form);

var _formItem = __webpack_require__(192);

var _formItem2 = _interopRequireDefault(_formItem);

var _formItemList = __webpack_require__(193);

var _formItemList2 = _interopRequireDefault(_formItemList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_form2.default.Item = _formItem2.default;
_form2.default.ItemList = _formItemList2.default;
exports.default = _form2.default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__(195);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(194);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Row = _row2.default;
exports.Col = _col2.default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(196);

var _modal2 = _interopRequireDefault(_modal);

var _modalComponent = __webpack_require__(197);

var _modalComponent2 = _interopRequireDefault(_modalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Modal: _modal2.default, ModalComponent: _modalComponent2.default };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = __webpack_require__(198);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pagination2.default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = __webpack_require__(199);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _radio2.default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rate = __webpack_require__(200);

var _rate2 = _interopRequireDefault(_rate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _rate2.default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(201);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _select2.default;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = __webpack_require__(202);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _switch2.default;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switchlist = __webpack_require__(203);

var _switchlist2 = _interopRequireDefault(_switchlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _switchlist2.default;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeline = __webpack_require__(205);

var _timeline2 = _interopRequireDefault(_timeline);

var _timelineItem = __webpack_require__(204);

var _timelineItem2 = _interopRequireDefault(_timelineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_timeline2.default.Item = _timelineItem2.default;
exports.default = _timeline2.default;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autosize = __webpack_require__(123);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  inserted: function inserted(el) {
    (0, _autosize2.default)(el);
  },
  update: function update(el) {
    var evt = document.createEvent('Event');
    evt.initEvent('autosize:update', true, false);
    el.dispatchEvent(evt);
  }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  height: function height(el, binding) {
    if (binding.value) {
      el.style.height = binding.value + (String(binding.value).endsWith("%") ? '' : "px");
    }
  },
  width: function width(el, binding) {
    if (binding.value) {
      el.style.width = binding.value + (String(binding.value).endsWith("%") ? '' : "px");
    }
  },
  font: function font(el, binding) {
    if (binding && binding.value) {
      el.style.fontSize = binding.value + "px";
    }
  },
  color: function color(el, binding) {
    var color = binding.value || binding.arg || binding.expression;
    if (color.startsWith("#")) {
      el.style.color = color;
    } else {
      _utils2.default.addClass(el, color + '-color');
    }
  },
  bgColor: function bgColor(el, binding) {
    var color = binding.value || binding.arg;
    if (color.startsWith("#")) {
      el.style.backgroundColor = color;
    } else {
      _utils2.default.addClass(el, 'bg-' + color + '-color');
    }
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(129);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  inserted: function inserted(el, binding, vnode) {
    var attr = vnode.data;
    if (!attr.attrs.content && !attr.attrs['ref-el']) return;
    var param = {};
    if (attr.attrs.content) {
      param.content = attr.attrs.content;
    }
    var ref = attr.attrs['ref-el'];
    if (ref) {
      param.content = vnode.context.$el.querySelector('[tmpl=' + ref + ']');
      param.html = true;
    }
    param.container = document.body;
    param = _utils2.default.initParam(param, attr.attrs, ['placement', 'theme', 'delay', 'trigger']);
    el.tooltip = new _tooltip2.default(el, param);
  },
  unbind: function unbind(el) {
    var attr = el;
    if (attr.tooltip) {
      attr.tooltip.dispose();
    }
  }
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  dictMapping: function dictMapping(value, key, connector) {
    var dict = _config2.default.getDict(key);
    if (!dict || _utils2.default.isNull(value)) return '';
    if (connector) {
      value = value.split(connector);
    }
    if (!_utils2.default.isNull(value) && value !== '' && key) {
      if (!_utils2.default.isArray(value)) {
        value = [value];
      }
    }
    if (value.length <= 0) {
      return '';
    }

    var keyField = _config2.default.getOption('dict', 'key_field');
    var titleField = _config2.default.getOption('dict', 'title_field');

    if (_utils2.default.isArray(dict)) {
      dict = _utils2.default.toObject(dict, keyField);
    }
    return value.map(function (ele) {
      var d = dict[ele];
      if (_utils2.default.isObject(d)) {
        return d[titleField];
      }
      return d;
    }).filter(function (ele) {
      return ele && ele !== '';
    }).join(', ');
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(37);

var _keys2 = _interopRequireDefault(_keys);

var _map = __webpack_require__(130);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = typeof _map2.default === "function" ? new _map2.default() : function () {
  var keys = [];
  var values = [];

  return {
    has: function has(key) {
      return keys.indexOf(key) > -1;
    },
    get: function get(key) {
      return values[keys.indexOf(key)];
    },
    set: function set(key, value) {
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        values.push(value);
      }
    },
    delete: function _delete(key) {
      var index = keys.indexOf(key);
      if (index > -1) {
        keys.splice(index, 1);
        values.splice(index, 1);
      }
    }
  };
}();

var createEvent = function createEvent(name) {
  return new Event(name, { bubbles: true });
};
try {
  new Event('test');
} catch (e) {
  createEvent = function createEvent(name) {
    var evt = document.createEvent('Event');
    evt.initEvent(name, true, false);
    return evt;
  };
}

function assign(ta) {
  if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

  var heightOffset = null;
  var clientWidth = ta.clientWidth;
  var cachedHeight = null;

  function init() {
    var style = window.getComputedStyle(ta, null);

    if (style.resize === 'vertical') {
      ta.style.resize = 'none';
    } else if (style.resize === 'both') {
      ta.style.resize = 'horizontal';
    }

    if (style.boxSizing === 'content-box') {
      heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
    } else {
      heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    }
    if (isNaN(heightOffset)) {
      heightOffset = 0;
    }

    update();
  }

  function changeOverflow(value) {
    {
      var width = ta.style.width;
      ta.style.width = '0px';
      ta.offsetWidth;
      /* jshint ignore:end */
      ta.style.width = width;
    }

    ta.style.overflowY = value;
  }

  function getParentOverflows(el) {
    var arr = [];

    while (el && el.parentNode && el.parentNode instanceof Element) {
      if (el.parentNode.scrollTop) {
        arr.push({
          node: el.parentNode,
          scrollTop: el.parentNode.scrollTop
        });
      }
      el = el.parentNode;
    }

    return arr;
  }

  function resize() {
    var originalHeight = ta.style.height;
    var overflows = getParentOverflows(ta);
    var docTop = document.documentElement && document.documentElement.scrollTop;

    ta.style.height = 'auto';

    var endHeight = ta.scrollHeight + heightOffset;

    if (ta.scrollHeight === 0) {
      ta.style.height = originalHeight;
      return;
    }

    ta.style.height = endHeight + 'px';

    clientWidth = ta.clientWidth;

    overflows.forEach(function (el) {
      el.node.scrollTop = el.scrollTop;
    });

    if (docTop) {
      document.documentElement.scrollTop = docTop;
    }
  }

  function update() {
    resize();

    var styleHeight = Math.round(parseFloat(ta.style.height));
    var computed = window.getComputedStyle(ta, null);
    var actualHeight = Math.round(parseFloat(computed.height));

    if (actualHeight !== styleHeight) {
      if (computed.overflowY !== 'visible') {
        changeOverflow('visible');
        resize();
        actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
      }
    } else {
      if (computed.overflowY !== 'hidden') {
        changeOverflow('hidden');
        resize();
        actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
      }
    }

    if (cachedHeight !== actualHeight) {
      cachedHeight = actualHeight;
      var evt = createEvent('autosize:resized');
      try {
        ta.dispatchEvent(evt);
      } catch (err) {}
    }
  }

  var pageResize = function pageResize() {
    if (ta.clientWidth !== clientWidth) {
      update();
    }
  };

  var destroy = function (style) {
    window.removeEventListener('resize', pageResize, false);
    ta.removeEventListener('input', update, false);
    ta.removeEventListener('keyup', update, false);
    ta.removeEventListener('autosize:destroy', destroy, false);
    ta.removeEventListener('autosize:update', update, false);

    (0, _keys2.default)(style).forEach(function (key) {
      ta.style[key] = style[key];
    });

    map.delete(ta);
  }.bind(ta, {
    height: ta.style.height,
    resize: ta.style.resize,
    overflowY: ta.style.overflowY,
    overflowX: ta.style.overflowX,
    wordWrap: ta.style.wordWrap
  });

  ta.addEventListener('autosize:destroy', destroy, false);

  if ('onpropertychange' in ta && 'oninput' in ta) {
    ta.addEventListener('keyup', update, false);
  }

  window.addEventListener('resize', pageResize, false);
  ta.addEventListener('input', update, false);
  ta.addEventListener('autosize:update', update, false);
  ta.style.overflowX = 'hidden';
  ta.style.wordWrap = 'break-word';

  map.set(ta, {
    destroy: destroy,
    update: update
  });

  init();
}

function destroy(ta) {
  var methods = map.get(ta);
  if (methods) {
    methods.destroy();
  }
}

function update(ta) {
  var methods = map.get(ta);
  if (methods) {
    methods.update();
  }
}

var autosize = null;

if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
  autosize = function autosize(el) {
    return el;
  };
  autosize.destroy = function (el) {
    return el;
  };
  autosize.update = function (el) {
    return el;
  };
} else {
  autosize = function autosize(el, options) {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], function (x) {
        return assign(x, options);
      });
    }
    return el;
  };
  autosize.destroy = function (el) {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], destroy);
    }
    return el;
  };
  autosize.update = function (el) {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], update);
    }
    return el;
  };
}

exports.default = autosize;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(133);

var _promise2 = _interopRequireDefault(_promise);

var _notify = __webpack_require__(26);

var _notify2 = _interopRequireDefault(_notify);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-modal';

var Default = {
  middle: false
};

function Confirm(content) {
  return new _promise2.default(function (resolve) {
    var param = {
      type: prefixCls,
      content: '<div><i class="h-icon-warn yellow-color" style="font-size:28px;vertical-align: -8px;"></i>&nbsp;&nbsp;' + content + '</div>',
      buttons: ['cancel', 'ok'],
      events: {
        ok: function ok(n) {
          n.close();resolve();
        }
      },
      title: '提示',
      hasMask: true,
      closeOnMask: true,
      hasCloseIcon: false,
      timeout: 0
    };
    param = _utils2.default.extend({}, Default, param, true);
    return (0, _notify2.default)(param);
  });
}

function confirm(content) {
  return Confirm(content);
}

confirm.config = function (options) {
  if (options.middle) {
    Default.middle = true;
  }
};

exports.default = confirm;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingCls = 'h-loading';
var LoadingDom = null;

function Loading(content) {
  if (!LoadingDom) {
    var template = '<div class="' + loadingCls + ' ' + loadingCls + '-full-screen">\n      <div class="' + loadingCls + '-circular">\n        <svg viewBox="25 25 50 50">\n          <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>\n        </svg>\n        <p class="' + loadingCls + '-text">' + content + '</p></div>\n      </div>\n    </div>';
    var genDom = window.document.createElement('div');
    genDom.innerHTML = template;
    LoadingDom = genDom.childNodes[0];
    document.body.appendChild(LoadingDom);
  } else {
    LoadingDom.querySelector('.' + loadingCls + '-text').innerText = content;
  }
  _utils2.default.addClass(LoadingDom, loadingCls + '-loading');
}

function loading(content) {
  Loading(content);
}

loading.close = function () {
  if (LoadingDom) {
    _utils2.default.removeClass(LoadingDom, loadingCls + '-loading');
  }
};

loading.open = function (content) {
  Loading(content);
};

exports.default = loading;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notify = __webpack_require__(26);

var _notify2 = _interopRequireDefault(_notify);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-message';
var iconPrefixCls = 'h-icon';

var Default = {
  timeout: 3000
};

var iconNames = {
  info: 'info',
  success: 'success',
  warn: 'warn',
  error: 'error',
  loading: 'loading'
};
var iconColor = {
  info: 'blue',
  success: 'green',
  warn: 'yellow',
  error: 'red',
  loading: 'blue'
};

function Message(content, timeout, type, onClose) {
  var param = {
    type: prefixCls,
    content: '<div><i class="' + iconPrefixCls + '-' + iconNames[type] + ' ' + iconColor[type] + '-color"></i>' + content + '</div>',
    event: {
      close: onClose
    },
    timeout: timeout
  };
  param = _utils2.default.extend({}, Default, param, true);
  if (param.timeout < 1) param.hasCloseIcon = true;
  return (0, _notify2.default)(param);
}

function message(content, timeout, onClose) {
  if (_utils2.default.isObject(content)) {
    return Message(content.text, content.timeout, content.type || 'info', content.onClose);
  }
  return Message(content, timeout, 'info', onClose);
}

message.info = function (content, timeout, onClose) {
  return Message(content, timeout, 'info', onClose);
};

message.success = function (content, timeout, onClose) {
  return Message(content, timeout, 'success', onClose);
};

message.warn = function (content, timeout, onClose) {
  return Message(content, timeout, 'warn', onClose);
};

message.error = function (content, timeout, onClose) {
  return Message(content, timeout, 'error', onClose);
};

message.loading = function (content, timeout, onClose) {
  return Message(content, timeout, 'loading', onClose);
};

message.config = function (options) {
  if (options.timeout != undefined) {
    Default.timeout = options.timeout;
  }
};

exports.default = message;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notify = __webpack_require__(26);

var _notify2 = _interopRequireDefault(_notify);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(5);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-modal';
var hasDivider = _config2.default.getOption('modal', 'hasDivider');

var Default = {
  middle: false,
  hasDivider: hasDivider
};

function Modal(originalParam) {
  var cls = prefixCls;
  if (originalParam.hasDivider || Default.hasDivider) {
    cls = cls + ' h-notify-has-divider';
  }
  var param = _utils2.default.extend({ type: cls, hasMask: true, closeOnMask: true, buttons: ['cancel'] }, Default, originalParam, true);
  return (0, _notify2.default)(param);
}

function modal(param) {
  return new Modal(param);
}

modal.config = function (options) {
  if (options.middle) {
    Default.middle = options.middle;
  }
};

exports.default = modal;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(37);

var _keys2 = _interopRequireDefault(_keys);

var _set = __webpack_require__(19);

var _set2 = _interopRequireDefault(_set);

var _notify = __webpack_require__(26);

var _notify2 = _interopRequireDefault(_notify);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'h-notice';
var iconPrefixCls = 'h-icon';

var Default = {
  timeout: 4000
};

var iconNames = {
  info: 'info',
  success: 'success',
  warn: 'warn',
  error: 'error'
};
var iconColor = {
  info: 'blue',
  success: 'green',
  warn: 'yellow',
  error: 'red'
};

var noticeDom = null;

function Notice(originalParam) {
  if (!noticeDom) {
    noticeDom = document.createElement('div');
    _utils2.default.addClass(noticeDom, prefixCls + '-container');
    document.body.appendChild(noticeDom);
  }

  var param = {
    type: prefixCls,
    hasCloseIcon: true,
    parent: noticeDom
  };
  if (new _set2.default((0, _keys2.default)(iconNames)).has(originalParam.type)) {
    if (originalParam.title) originalParam.style = prefixCls + '-has-icon';
    originalParam.content = '<i class="' + iconPrefixCls + '-' + iconNames[originalParam.type] + ' ' + iconColor[originalParam.type] + '-color"></i>' + originalParam.content;
    delete originalParam.type;
  }
  param = _utils2.default.extend({}, Default, param, originalParam, true);
  return (0, _notify2.default)(param);
}

function notice(param, timeout) {
  if (_utils2.default.isString(param)) {
    return Notice({ content: param, timeout: timeout });
  } else if (_utils2.default.isObject(param)) {
    return Notice(param);
  }
  log.error('Notice传递参数不正确:', param);
}

notice.config = function (options) {
  if (options.timeout != undefined) {
    Default.timeout = options.timeout;
  }
};

function noticeWithType(type, param, timeout) {
  if (_utils2.default.isString(param)) {
    return Notice({ content: param, timeout: timeout, type: type });
  } else if (_utils2.default.isObject(param)) {
    if (type) param.type = type;
    return Notice(param);
  }
  log.error('Notice传递参数不正确:', param);
}

notice.error = function (param, timeout) {
  return noticeWithType('error', param, timeout);
};
notice.warn = function (param, timeout) {
  return noticeWithType('warn', param, timeout);
};
notice.success = function (param, timeout) {
  return noticeWithType('success', param, timeout);
};
notice.info = function (param, timeout) {
  return noticeWithType('info', param, timeout);
};

exports.default = notice;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(59);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(27);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(62);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(61);

var _inherits3 = _interopRequireDefault(_inherits2);

var _pop = __webpack_require__(56);

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function (_Pop) {
  (0, _inherits3.default)(Tooltip, _Pop);

  function Tooltip(el, param) {
    (0, _classCallCheck3.default)(this, Tooltip);

    param.template = '<div class="h-tooltip' + (param.theme ? ' h-tooltip-' + param.theme : '') + '" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>';
    param.arrowSelector = '.h-tooltip-arrow, .h-tooltip__arrow';
    param.innerSelector = '.h-tooltip-inner, .h-tooltip__inner';
    // param.containter = document.body;
    // log(param);
    return (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, el, param));
  }

  return Tooltip;
}(_pop2.default);

exports.default = Tooltip;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(24);
module.exports = __webpack_require__(169);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(171);
__webpack_require__(181);
module.exports = __webpack_require__(2).Map;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);
module.exports = __webpack_require__(2).Object.assign;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(175);
module.exports = __webpack_require__(2).Object.getPrototypeOf;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(2).Object.keys;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(177);
module.exports = __webpack_require__(2).Object.setPrototypeOf;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(178);
module.exports = __webpack_require__(2).Promise;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(179);
__webpack_require__(182);
module.exports = __webpack_require__(2).Set;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);
__webpack_require__(35);
__webpack_require__(183);
__webpack_require__(184);
module.exports = __webpack_require__(2).Symbol;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
__webpack_require__(25);
module.exports = __webpack_require__(54).f('iterator');

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(29);

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(51)
  , toIndex   = __webpack_require__(168);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = __webpack_require__(13)
  , IObject  = __webpack_require__(43)
  , toObject = __webpack_require__(23)
  , toLength = __webpack_require__(51)
  , asc      = __webpack_require__(153);
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , isArray  = __webpack_require__(69)
  , SPECIES  = __webpack_require__(4)('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(152);

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18)
  , gOPS    = __webpack_require__(46)
  , pIE     = __webpack_require__(32);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 155 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(21)
  , ITERATOR   = __webpack_require__(4)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(10);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(31)
  , descriptor     = __webpack_require__(33)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(4)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(18)
  , toIObject = __webpack_require__(16);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , macrotask = __webpack_require__(78).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(20)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(18)
  , gOPS     = __webpack_require__(46)
  , pIE      = __webpack_require__(32)
  , toObject = __webpack_require__(23)
  , IObject  = __webpack_require__(43)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(14)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(9)
  , anObject = __webpack_require__(10)
  , getKeys  = __webpack_require__(18);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16)
  , gOPN      = __webpack_require__(72).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(12)
  , anObject = __webpack_require__(10);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(13)(Function.call, __webpack_require__(71).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(10)
  , aFunction = __webpack_require__(38)
  , SPECIES   = __webpack_require__(4)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(50)
  , defined   = __webpack_require__(28);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(50)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10)
  , get      = __webpack_require__(79);
module.exports = __webpack_require__(2).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(148)
  , step             = __webpack_require__(70)
  , Iterators        = __webpack_require__(21)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(64);

// 23.1 Map Objects
module.exports = __webpack_require__(66)('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(162)});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(31)});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(9).f});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(23)
  , $getPrototypeOf = __webpack_require__(73);

__webpack_require__(75)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(23)
  , $keys    = __webpack_require__(18);

__webpack_require__(75)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(165).set});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(30)
  , global             = __webpack_require__(6)
  , ctx                = __webpack_require__(13)
  , classof            = __webpack_require__(40)
  , $export            = __webpack_require__(7)
  , isObject           = __webpack_require__(12)
  , aFunction          = __webpack_require__(38)
  , anInstance         = __webpack_require__(39)
  , forOf              = __webpack_require__(29)
  , speciesConstructor = __webpack_require__(166)
  , task               = __webpack_require__(78).set
  , microtask          = __webpack_require__(161)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(47)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(22)($Promise, PROMISE);
__webpack_require__(77)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(159)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(64);

// 23.2 Set Objects
module.exports = __webpack_require__(66)('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(15)
  , DESCRIPTORS    = __webpack_require__(8)
  , $export        = __webpack_require__(7)
  , redefine       = __webpack_require__(76)
  , META           = __webpack_require__(45).KEY
  , $fails         = __webpack_require__(14)
  , shared         = __webpack_require__(49)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(34)
  , wks            = __webpack_require__(4)
  , wksExt         = __webpack_require__(54)
  , wksDefine      = __webpack_require__(53)
  , keyOf          = __webpack_require__(160)
  , enumKeys       = __webpack_require__(154)
  , isArray        = __webpack_require__(69)
  , anObject       = __webpack_require__(10)
  , toIObject      = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(52)
  , createDesc     = __webpack_require__(33)
  , _create        = __webpack_require__(31)
  , gOPNExt        = __webpack_require__(164)
  , $GOPD          = __webpack_require__(71)
  , $DP            = __webpack_require__(9)
  , $keys          = __webpack_require__(18)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(72).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(32).f  = $propertyIsEnumerable;
  __webpack_require__(46).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(30)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(7);

$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(65)('Map')});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = __webpack_require__(7);

$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(65)('Set')});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('asyncIterator');

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('observable');

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(216),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/Loading/loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51d3851d", Component.options)
  } else {
    hotAPI.reload("data-v-51d3851d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(207),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/button/button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17d9aafa", Component.options)
  } else {
    hotAPI.reload("data-v-17d9aafa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(211),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/button/buttonGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buttonGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b959728", Component.options)
  } else {
    hotAPI.reload("data-v-2b959728", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/checkbox/checkbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-392ea463", Component.options)
  } else {
    hotAPI.reload("data-v-392ea463", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(226),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/datetime/datepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] datepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ae8bcdb8", Component.options)
  } else {
    hotAPI.reload("data-v-ae8bcdb8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(210),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/datetime/daterangepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] daterangepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2acb2236", Component.options)
  } else {
    hotAPI.reload("data-v-2acb2236", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(208),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/form/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-231ee1fa", Component.options)
  } else {
    hotAPI.reload("data-v-231ee1fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(227),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/form/formItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] formItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f42f0194", Component.options)
  } else {
    hotAPI.reload("data-v-f42f0194", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(220),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/form/formItemList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] formItemList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6686d418", Component.options)
  } else {
    hotAPI.reload("data-v-6686d418", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/layout/col.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] col.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c0b98f7", Component.options)
  } else {
    hotAPI.reload("data-v-5c0b98f7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(221),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/layout/row.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] row.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76241451", Component.options)
  } else {
    hotAPI.reload("data-v-76241451", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(215),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/modal/modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ad7bb9f", Component.options)
  } else {
    hotAPI.reload("data-v-3ad7bb9f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(209),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/modal/modalComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] modalComponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-269f67ce", Component.options)
  } else {
    hotAPI.reload("data-v-269f67ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/pagination/pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57369703", Component.options)
  } else {
    hotAPI.reload("data-v-57369703", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(214),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/radio/radio.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] radio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39dc648a", Component.options)
  } else {
    hotAPI.reload("data-v-39dc648a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(212),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/rate/rate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-354b8083", Component.options)
  } else {
    hotAPI.reload("data-v-354b8083", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(224),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/select/select.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] select.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9954d97a", Component.options)
  } else {
    hotAPI.reload("data-v-9954d97a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(225),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/switch/switch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] switch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a09eb77a", Component.options)
  } else {
    hotAPI.reload("data-v-a09eb77a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(222),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/switchlist/switchlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] switchlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ae2f7fa", Component.options)
  } else {
    hotAPI.reload("data-v-7ae2f7fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(217),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/timeline/timeline-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timeline-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5291a2a6", Component.options)
  } else {
    hotAPI.reload("data-v-5291a2a6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(206),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alicia/Documents/develop/github/heyui/heyui/components/timeline/timeline.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] timeline.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05b67223", Component.options)
  } else {
    hotAPI.reload("data-v-05b67223", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05b67223", module.exports)
  }
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    class: _vm.buttonCls,
    attrs: {
      "disabled": !!this.disabled
    },
    on: {
      "click": _vm.trigger
    }
  }, [(!!_vm.iconCode) ? _c('i', {
    class: _vm.iconCls
  }) : _vm._e(), (_vm.hasText) ? _c('span', [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17d9aafa", module.exports)
  }
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.formCls
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-231ee1fa", module.exports)
  }
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.noticeCls
  }, [(_vm.hasMask) ? _c('div', {
    staticClass: "h-notify-mask",
    on: {
      "click": function($event) {
        _vm.setvalue(true)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.containerCls
  }, [_c('span', {
    staticClass: "h-notify-close h-icon-close",
    on: {
      "click": function($event) {
        _vm.setvalue(false)
      }
    }
  }), _vm._v(" "), _c(_vm.nowComponent, {
    tag: "component",
    class: _vm.contentCls,
    attrs: {
      "param": _vm.propsData
    },
    on: {
      "close": _vm.close
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-269f67ce", module.exports)
  }
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.dateCls
  }, [_c('div', {
    staticClass: "h-input h-datetime-show"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "readonly": "",
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.show
    },
    on: {
      "change": _vm.changeEvent
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "h-icon-calendar"
  })]), _vm._v(" "), (!_vm.disabled) ? _c('div', {
    staticClass: "h-date-picker",
    class: _vm.datePickerCls
  }, [_c('div', {
    staticClass: "h-date-container h-date-range-container"
  }, [(_vm.shortcuts.length > 0) ? _c('div', {
    staticClass: "h-date-shortcut"
  }, _vm._l((_vm.shortcuts), function(s) {
    return _c('div', {
      on: {
        "click": function($event) {
          _vm.setShortcutValue(s)
        }
      }
    }, [_vm._v(_vm._s(s.title))])
  })) : _vm._e(), _vm._v(" "), _c('date-base', {
    ref: "start",
    attrs: {
      "value": _vm.nowDate,
      "range": "start",
      "option": _vm.startOption,
      "type": _vm.type,
      "now-view": _vm.nowView.start,
      "format": _vm.nowFormat,
      "rangeEnd": _vm.rangeEnd,
      "separate": _vm.isSeparate
    },
    on: {
      "updateView": _vm.updateView,
      "input": _vm.setvalue,
      "changeView": _vm.changeView,
      "updateRangeEnd": _vm.updateRangeEnd
    }
  }), _vm._v(" "), _c('date-base', {
    ref: "end",
    attrs: {
      "value": _vm.nowDate,
      "range": "end",
      "option": _vm.endOption,
      "type": _vm.type,
      "now-view": _vm.nowView.end,
      "format": _vm.nowFormat,
      "rangeEnd": _vm.rangeEnd,
      "separate": _vm.isSeparate
    },
    on: {
      "updateView": _vm.updateView,
      "input": _vm.setvalue,
      "changeView": _vm.changeView,
      "updateRangeEnd": _vm.updateRangeEnd
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "h-date-footer"
  }, [_c('button', {
    staticClass: "h-btn h-btn-text h-btn-s",
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("清除")]), _vm._v(" "), _c('button', {
    staticClass: "h-btn h-btn-primary h-btn-s",
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("确定")])])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2acb2236", module.exports)
  }
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.buttonGroupCls
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b959728", module.exports)
  }
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-rate",
    attrs: {
      "readonly": _vm.readonly
    },
    on: {
      "mouseleave": function($event) {
        _vm.mouseleave()
      }
    }
  }, [_vm._l((5), function(n) {
    return _c('span', {
      on: {
        "click": function($event) {
          _vm.setvalue(n)
        },
        "mouseover": function($event) {
          _vm.mouseover(n)
        }
      }
    }, [_c('i', {
      class: _vm.starCls(n)
    })])
  }), (_vm.showText) ? _c('span', {
    staticClass: "h-rate-value"
  }, [_vm._v(_vm._s(_vm.value))]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-354b8083", module.exports)
  }
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-checkbox",
    attrs: {
      "disabled": _vm.disabled
    }
  }, _vm._l((_vm.arr), function(v, key) {
    return _c('label', {
      on: {
        "click": function($event) {
          _vm.setvalue(key)
        }
      }
    }, [_c('span', {
      attrs: {
        "checked": _vm.isInclude(key),
        "disabled": _vm.disabled
      }
    }), _vm._v(_vm._s(v))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-392ea463", module.exports)
  }
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-radio",
    attrs: {
      "disabled": _vm.disabled
    }
  }, _vm._l((_vm.arr), function(v, key) {
    return _c('label', {
      on: {
        "click": function($event) {
          _vm.setvalue(key)
        }
      }
    }, [_c('span', {
      attrs: {
        "checked": key == _vm.value,
        "disabled": _vm.disabled
      }
    }), _vm._v(_vm._s(v))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39dc648a", module.exports)
  }
}

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.noticeCls
  }, [(_vm.hasMask) ? _c('div', {
    staticClass: "h-notify-mask",
    on: {
      "click": function($event) {
        _vm.setvalue(true)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.containerCls
  }, [_c('span', {
    staticClass: "h-notify-close h-icon-close",
    on: {
      "click": function($event) {
        _vm.setvalue(false)
      }
    }
  }), _vm._v(" "), _c('header', [_vm._t("header")], 2), _vm._v(" "), _c('div', {
    class: _vm.contentCls
  }, [_vm._t("default")], 2), _vm._v(" "), _c('footer', [_vm._t("footer")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ad7bb9f", module.exports)
  }
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.loadingCls
  }, [_c('div', {
    class: _vm.circularCls
  }, [_c('svg', {
    attrs: {
      "viewBox": "25 25 50 50"
    }
  }, [_c('circle', {
    staticClass: "circle",
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]), _vm._v(" "), _c('p', {
    class: _vm.textCls
  }, [_vm._v(_vm._s(_vm.text))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-51d3851d", module.exports)
  }
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.itemClass
  }, [_c('div', {
    class: _vm.timeSC.classes,
    style: (_vm.timeSC.styles)
  }, [_vm._t("time")], 2), _vm._v(" "), _c('div', {
    class: _vm.prefix + '-item-content'
  }, [_c('div', {
    class: _vm.circleSC.classes,
    style: (_vm.circleSC.styles)
  }, [_c('i', {
    class: 'h-icon-' + _vm.icon
  })]), _vm._v(" "), _vm._t("content"), _vm._v(" "), _vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5291a2a6", module.exports)
  }
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.pageCls,
    style: (_vm.pageStyle)
  }, [(_vm.orders.total != -1) ? _c('span', {
    class: _vm.prefix + '-total',
    style: ({
      order: _vm.orders.total
    })
  }, [_vm._v("总 "), _c('span', {
    class: _vm.prefix + '-total-num'
  }, [_vm._v(_vm._s(_vm.total))]), _vm._v(" 条")]) : _vm._e(), _vm._v(" "), (_vm.orders.sizes != -1) ? _c('Select', {
    style: ({
      order: _vm.orders.sizes
    }),
    attrs: {
      "no-border": _vm.small,
      "autosize": true,
      "null-option": false,
      "datas": _vm.sizesShow
    },
    on: {
      "input": _vm.changesize
    },
    model: {
      value: (_vm.sizeNow),
      callback: function($$v) {
        _vm.sizeNow = $$v
      },
      expression: "sizeNow"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.orders.pager != -1 && this.count > 0) ? _c('span', {
    staticClass: "h-page-pager-container",
    style: ({
      order: _vm.orders.pager
    })
  }, [_c('span', {
    class: _vm.prevCls,
    on: {
      "click": function($event) {
        _vm.prev()
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-left"
  })]), _vm._v(" "), _c('span', {
    class: _vm.genPagerCls(1),
    on: {
      "click": function($event) {
        _vm.change(1)
      }
    }
  }, [_vm._v("1")]), _vm._v(" "), (_vm.curNow > 4) ? _c('span', {
    staticClass: "h-page-pager h-page-ellipsis"
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pagerSize), function(pager) {
    return _c('span', {
      class: _vm.genPagerCls(pager),
      on: {
        "click": function($event) {
          _vm.change(pager)
        }
      }
    }, [_vm._v(_vm._s(pager))])
  }), _vm._v(" "), (_vm.count - _vm.curNow > 3) ? _c('span', {
    staticClass: "h-page-pager h-page-ellipsis"
  }, [_vm._v("...")]) : _vm._e(), _vm._v(" "), (this.count > 1) ? _c('span', {
    class: _vm.genPagerCls(_vm.count),
    on: {
      "click": function($event) {
        _vm.change(_vm.count)
      }
    }
  }, [_vm._v(_vm._s(_vm.count))]) : _vm._e(), _vm._v(" "), _c('span', {
    class: _vm.nextCls,
    on: {
      "click": function($event) {
        _vm.next()
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-right"
  })])], 2) : _vm._e(), _vm._v(" "), (_vm.orders.jumper != -1) ? _c('input', {
    directives: [{
      name: "width",
      rawName: "v-width",
      value: (40),
      expression: "40"
    }],
    style: ({
      order: _vm.orders.jumper
    }),
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.curNow
    },
    on: {
      "blur": _vm.jump
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57369703", module.exports)
  }
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c0b98f7", module.exports)
  }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6686d418", module.exports)
  }
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classes,
    style: (_vm.styles)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76241451", module.exports)
  }
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-switchlist",
    class: {
      'h-switchlist-small': _vm.small
    },
    attrs: {
      "disabled": _vm.disabled
    }
  }, _vm._l((_vm.arr), function(v, key) {
    return _c('span', {
      attrs: {
        "checked": key == _vm.value,
        "disabled": _vm.disabled
      },
      on: {
        "click": function($event) {
          _vm.setvalue(key)
        }
      }
    }, [_vm._v(_vm._s(v))])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ae2f7fa", module.exports)
  }
}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "h-date-content"
  }, [(_vm.type != 'time') ? _c('div', {
    staticClass: "h-date-header"
  }, [_c('span', {
    staticClass: "h-date-year-left-picker",
    on: {
      "click": function($event) {
        _vm.updateView('default', -1)
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-left"
  }), _c('i', {
    staticClass: "h-icon-left"
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.view == 'date'),
      expression: "view=='date'"
    }],
    staticClass: "h-date-month-left-picker",
    on: {
      "click": function($event) {
        _vm.updateView('month', -1)
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-left"
  })]), _vm._v(" "), (_vm.view != 'year') ? _c('span', {
    staticClass: "h-date-header-show",
    on: {
      "click": function($event) {
        _vm.changeView('year')
      }
    }
  }, [_vm._v(_vm._s(_vm.nowView.year()) + "年")]) : _vm._e(), _vm._v(" "), (_vm.view == 'year') ? _c('span', {
    staticClass: "h-date-header-show"
  }, [_vm._v(_vm._s(_vm.nowView.year() - 6) + "  -  " + _vm._s(_vm.nowView.year() + 5) + "年")]) : _vm._e(), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.view != 'year' && _vm.view != 'month'),
      expression: "view != 'year' && view != 'month'"
    }],
    staticClass: "h-date-header-show",
    on: {
      "click": function($event) {
        _vm.changeView('month')
      }
    }
  }, [_vm._v(_vm._s(_vm.nowView.month()) + "月")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.view == 'hour' || _vm.view == 'minute'),
      expression: "view == 'hour' || view == 'minute'"
    }],
    staticClass: "h-date-header-show",
    on: {
      "click": function($event) {
        _vm.changeView('date')
      }
    }
  }, [_vm._v(_vm._s(_vm.nowView.date()) + "日")]), _vm._v(" "), _c('span', {
    staticClass: "h-date-year-right-picker",
    on: {
      "click": function($event) {
        _vm.updateView('default', 1)
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-right"
  }), _c('i', {
    staticClass: "h-icon-right"
  })]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.view == 'date'),
      expression: "view=='date'"
    }],
    staticClass: "h-date-month-right-picker",
    on: {
      "click": function($event) {
        _vm.updateView('month', 1)
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-right"
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.view == 'minute'),
      expression: "view=='minute'"
    }],
    staticClass: "h-date-header"
  }, [_c('span', {
    staticClass: "h-date-month-left-picker",
    on: {
      "click": function($event) {
        _vm.updateView('hour', -1)
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-left"
  })]), _vm._v(" "), _c('span', {
    staticClass: "h-date-header-show",
    on: {
      "click": function($event) {
        _vm.changeView('hour')
      }
    }
  }, [_vm._v(_vm._s(_vm._f("hoursString")(_vm.nowView)))]), _vm._v(" "), _c('span', {
    staticClass: "h-date-month-right-picker",
    on: {
      "click": function($event) {
        _vm.updateView('hour', 1)
      }
    }
  }, [_c('i', {
    staticClass: "h-icon-right"
  })])]), _vm._v(" "), _c('div', {
    class: _vm.dateBodyCls
  }, [(_vm.view == 'date') ? _c('div', {
    staticClass: "h-date-body-weeks"
  }, _vm._l((_vm.weeks), function(w) {
    return _c('span', [_vm._v(_vm._s(w))])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "h-date-body-pickers"
  }, _vm._l((_vm.dates), function(d) {
    return _c('span', {
      class: {
        'h-date-not-now-day': !d.isNowDays, 'h-date-today': d.isToday, 'h-date-selected': _vm.isSelected(d), 'h-date-range-selected': _vm.isRangeSelected(d), 'h-date-disabled': d.disabled
      },
      attrs: {
        "string": d.string
      },
      on: {
        "click": function($event) {
          _vm.chooseDate(d)
        }
      }
    }, [_vm._v(_vm._s(d.show))])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ffb7f58", module.exports)
  }
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.selectCls
  }, [_c('div', {
    class: _vm.inputCls
  }, [_c('div', {
    staticClass: "h-select-value"
  }, [(_vm.multiple && _vm.objects) ? _c('div', {
    staticClass: "h-select-multiple-tags"
  }, _vm._l((_vm.objects), function(obj) {
    return _c('span', {
      key: obj
    }, [_c('span', [_vm._v(_vm._s(obj[_vm.title]))]), _c('i', {
      staticClass: "h-icon-close",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.setvalue(obj)
        }
      }
    })])
  })) : _vm._e(), _vm._v(" "), (!_vm.multiple && _vm.codes && _vm.objects) ? _c('div', [_vm._v(_vm._s(_vm.objects[_vm.title]))]) : _vm._e(), _vm._v(" "), (!_vm.codes || _vm.codes.length == 0) ? _c('div', {
    staticClass: "h-select-placeholder"
  }, [_vm._v(_vm._s(_vm.placeholder))]) : _vm._e()]), _vm._v(" "), _c('i', {
    staticClass: "h-icon-down"
  })]), _vm._v(" "), _c('div', {
    class: _vm.groupCls
  }, [_c('ul', {
    staticClass: "h-select-ul"
  }, _vm._l((_vm.options), function(option) {
    return _c('li', {
      key: option,
      staticClass: "h-select-item",
      class: _vm.getLiCls(option),
      on: {
        "click": function($event) {
          _vm.setvalue(option)
        }
      }
    }, [(!!_vm.render) ? _c('div', {
      domProps: {
        "innerHTML": _vm._s(option[_vm.html])
      }
    }) : [_vm._v(_vm._s(option[_vm.title]))], _vm._v(" "), (_vm.multiple) ? _c('i', {
      staticClass: "h-icon-check"
    }) : _vm._e()], 2)
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9954d97a", module.exports)
  }
}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', [_c('span', {
    staticClass: "h-switch",
    class: {
      'h-switch-small': _vm.small
    },
    attrs: {
      "checked": _vm.value,
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.setvalue(!_vm.value)
      }
    }
  }), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a09eb77a", module.exports)
  }
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.dateCls
  }, [_c('div', {
    staticClass: "h-input h-datetime-show"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showDate),
      expression: "showDate"
    }],
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.showDate)
    },
    on: {
      "change": _vm.changeEvent,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.showDate = $event.target.value
      }, _vm.inputEvent]
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "h-icon-calendar"
  })]), _vm._v(" "), (!_vm.disabled) ? _c('div', {
    staticClass: "h-date-picker",
    class: _vm.datePickerCls
  }, [_c('div', {
    staticClass: "h-date-container"
  }, [(_vm.shortcuts.length > 0) ? _c('div', {
    staticClass: "h-date-shortcut"
  }, _vm._l((_vm.shortcuts), function(s) {
    return _c('div', {
      on: {
        "click": function($event) {
          _vm.setShortcutValue(s)
        }
      }
    }, [_vm._v(_vm._s(s.title))])
  })) : _vm._e(), _vm._v(" "), _c('date-base', {
    ref: "datebase",
    attrs: {
      "value": _vm.nowDate,
      "option": _vm.option,
      "type": _vm.type,
      "now-view": _vm.nowView,
      "format": "k"
    },
    on: {
      "updateView": _vm.updateView,
      "input": _vm.setvalue,
      "changeView": _vm.changeView
    }
  })], 1), _vm._v(" "), (_vm.hasConfirm) ? _c('div', {
    staticClass: "h-date-footer"
  }, [_c('button', {
    staticClass: "h-btn h-btn-text",
    on: {
      "click": function($event) {
        _vm.setvalue('')
      }
    }
  }, [_vm._v("清除")]), _vm._v(" "), _c('button', {
    staticClass: "h-btn h-btn-primary h-btn-s",
    on: {
      "click": _vm.hide
    }
  }, [_vm._v("确定")])]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ae8bcdb8", module.exports)
  }
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.formItemCls
  }, [(_vm.showLabel) ? _c('label', {
    staticClass: "h-form-item-label",
    style: (_vm.labelStyleCls)
  }, [_vm._v(_vm._s(this.label))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "h-form-item-content",
    style: (_vm.contentStyleCls)
  }, [_c('div', {
    staticClass: "h-form-item-wrap"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.validResult) ? _c('div', {
    staticClass: "h-form-item-error"
  }, [_vm._v(_vm._s(_vm.label) + _vm._s(_vm.validResult.message))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f42f0194", module.exports)
  }
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.heyUtils = factory();
})((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' ? window : (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' ? global : undefined, function () {
  "use strict";

  var heyUtils = {
    isObject: function isObject(input) {
      return Object.prototype.toString.call(input) === '[object Object]';
    },
    isArray: function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    },
    isDate: function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    },
    isNumber: function isNumber(input) {
      return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
    },
    isString: function isString(input) {
      return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
    },
    isBoolean: function isBoolean(input) {
      return typeof input == 'boolean';
    },
    isFunction: function isFunction(input) {
      return typeof input == 'function';
    },
    isNull: function isNull(input) {
      return input === undefined || input === null;
    },
    isPlainObject: function isPlainObject(obj) {
      if (obj && Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object && !hasOwnProperty.call(obj, "constructor")) {
        var key;
        for (key in obj) {}
        return key === undefined || hasOwnProperty.call(obj, key);
      }
      return false;
    },
    extend: function extend() {
      var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== "object" && !this.isFunction(target)) {
        target = {};
      }
      if (length === i) {
        target = this;
        --i;
      }
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) {
              continue;
            }
            if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && this.isArray(src) ? src : [];
              } else {
                clone = src && this.isPlainObject(src) ? src : {};
              }
              target[name] = this.extend(deep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    },
    freeze: function freeze(obj) {
      var _this = this;

      var that = this;
      Object.freeze(obj);
      Object.keys(obj).forEach(function (key, value) {
        if (that.isObject(obj[key])) {
          _this.freeze(obj[key]);
        }
      });
      return obj;
    },
    copy: function copy(data) {
      var copyOne = null;
      if (this.isObject(data)) {
        copyOne = {};
        for (var key in data) {
          copyOne[key] = this.copy(data[key]);
        }
      } else if (this.isArray(data)) {
        copyOne = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var index = _step.value;

            copyOne.push(this.copy(index));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        copyOne = data;
      }
      return copyOne;
    },
    getKeyValue: function getKeyValue(obj, keypath) {
      if (!this.isObject(obj)) {
        return null;
      }
      var array = null;
      if (this.isArray(keypath)) {
        array = keypath;
      } else if (this.isString(keypath)) {
        array = keypath.split('.');
      }
      if (array == null || array.length == 0) {
        return null;
      }
      var value = null;
      var key = array.shift();
      var keyTest = key.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));
      if (keyTest) {
        key = keyTest[1];
        var index = keyTest[2];
        value = obj[key];
        if (this.isArray(value) && value.length > index) {
          value = value[index];
        }
      } else {
        value = obj[key];
      }

      if (array.length > 0) {
        return this.getKeyValue(value, array);
      }
      return value;
    },
    setKeyValue: function setKeyValue(obj, keypath, value, orignal) {
      if (!this.isObject(obj)) {
        return false;
      }
      var array = null;
      if (this.isArray(keypath)) {
        array = keypath;
      } else if (this.isString(keypath)) {
        array = keypath.split('.');
        orignal = obj;
      }
      if (array == null || array.length == 0) {
        return false;
      }
      var children = null;
      var index = 0;
      var key = array.shift();
      var keyTest = key.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));
      if (keyTest) {
        key = keyTest[1];
        index = keyTest[2];
        children = obj[key];
        if (this.isArray(children) && children.length > index) {
          if (array.length > 0) {
            return this.setKeyValue(children[index], array, value, orignal);
          }
          children[index] = value;
        }
      } else {
        if (array.length > 0) {
          return this.setKeyValue(obj[key], array, value, orignal);
        }
        obj[key] = value;
      }
      return orignal;
    },
    toArray: function toArray(object, keyName, arg3) {
      var titleName = '';
      if (!this.isObject(object)) {
        return [];
      }
      if (this.isString(arg3)) {
        titleName = arg3;
      }
      var listO = [];
      for (var i in object) {
        var value = object[i];
        var n = {};
        if (this.isObject(value)) {
          n = value;
        } else {
          n[titleName] = value;
        }
        if (keyName) n[keyName] = i;
        listO.push(n);
      }
      return listO;
    },
    toObject: function toObject(list) {
      var idName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
      var hasNum = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var listO = {};
      for (var i = 0; i < list.length; i++) {
        var n = list[i];
        if (this.isObject(n)) {
          if (idName == 'count') {
            listO[i] = n;
          } else {
            listO[n[idName]] = n;
            if (hasNum) {
              listO[n[idName]].count = i;
            }
          }
        } else {
          listO[n] = n;
        }
      }
      return listO;
    },
    saveLocal: function saveLocal(name, value) {
      if (window.localStorage && JSON && name && value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
          value = JSON.stringify(value);
        }
        window.localStorage[name] = value;
        return true;
      }
      return false;
    },
    getLocal: function getLocal(name, type) {
      if (window.localStorage && JSON && name) {
        var data = window.localStorage[name];
        if (type && type == 'json' && data !== undefined) {
          try {
            return JSON.parse(data);
          } catch (e) {
            console.error('取数转换json错误' + e);
            return '';
          }
        } else {
          return data;
        }
      }
      return null;
    },
    getLocal2Json: function getLocal2Json(name) {
      if (window.localStorage && JSON && name) {
        var data = window.localStorage[name];
        if (!this.isNull(data)) {
          try {
            return JSON.parse(data);
          } catch (e) {
            console.error('取数转换json错误' + e);
            return '';
          }
        } else {
          return data;
        }
      }
      return null;
    },
    removeLocal: function removeLocal(name) {
      if (window.localStorage && JSON && name) {
        window.localStorage[name] = null;
      }
      return null;
    },
    saveCookie: function saveCookie(name, value, minSec, path) {
      var cookieEnabled = navigator.cookieEnabled ? true : false;
      if (name && cookieEnabled) {
        path = path || '/';
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
          value = JSON.stringify(value);
        }
        var exp = undefined;
        if (minSec) {
          exp = new Date(); // new Date("December 31, 9998");
          exp.setTime(exp.getTime() + minSec * 1000);
        }

        document.cookie = name + '=' + escape(value) + (minSec ? ';expires=' + exp.toGMTString() : '') + ';path=' + path;
        return true;
      }
      return false;
    },
    getCookie: function getCookie(name) {
      var cookieEnabled = navigator.cookieEnabled ? true : false;
      if (name && cookieEnabled) {
        var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
        if (arr !== null) {
          return unescape(arr[2]);
        }
      }
      return null;
    },
    clearCookie: function clearCookie() {
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
        for (var i = keys.length; i--;) {
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
        }
      }
    },
    removeCookie: function removeCookie(name, path) {
      var cookieEnabled = navigator.cookieEnabled ? true : false;
      if (name && cookieEnabled) {
        var exp = new Date();
        path = path || '/';
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval !== null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=' + path;
        return true;
      }
      return false;
    },
    uuid: function uuid() {
      var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      };
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
  };
  heyUtils.valueForKeypath = heyUtils.getKeyValue;
  heyUtils.setValueForKeypath = heyUtils.setKeyValue;
  return heyUtils;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)))

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @argument {Function | undefined} fn the function to check
 * @returns {boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'webkit', 'moz', 'o'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || element.firstElementChild.offsetParent === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  return offsetParent;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {Number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles - result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {Number} borders - the borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  return {
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Tells if you are running Internet Explorer 10
 * @returns {Boolean} isIE10
 */
var runIsIE10 = function () {
  return navigator.appVersion.indexOf('MSIE 10') !== -1;
};

var isIE10$1 = runIsIE10();

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

var isIE10 = runIsIE10();

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top,
    left: childrenRect.left - parentRect.left,
    width: childrenRect.width,
    height: childrenRect.height
  });

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (isHTML || parent.nodeName === 'BODY') {
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = isIE10 && isHTML ? 0 : +styles.borderTopWidth.split('px')[0];
    var borderLeftWidth = isIE10 && isHTML ? 0 : +styles.borderLeftWidth.split('px')[0];
    var marginTop = isIE10 && isHTML ? 0 : +styles.marginTop.split('px')[0];
    var marginLeft = isIE10 && isHTML ? 0 : +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (parent.contains(scrollParent) && (isIE10 || scrollParent.nodeName !== 'BODY')) {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one/
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(position, popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    position: position,
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {*} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
 * @method
 * @memberof Popper.Utils
 * @param {Object} data
 * @param {Array} modifiers
 * @param {Function} ends
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.enabled && isFunction(modifier.function)) {
      data = modifier.function(data, modifier);
    }
  });

  return data;
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
 * @param {Number} padding - Boundaries padding
 * @param {Element} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference) {
  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, 0, 'scrollParent');

  var sides = {
    top: refRect.top - boundaries.top,
    right: boundaries.right - refRect.right,
    bottom: boundaries.bottom - refRect.bottom,
    left: refRect.left - boundaries.left
  };

  var computedPlacement = Object.keys(sides).sort(function (a, b) {
    return sides[b] - sides[a];
  })[0];
  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * Apply the computed styles to the popper element
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data, options) {
  // apply the final offsets to the popper
  // NOTE: 1 DOM access here
  var styles = {
    position: data.offsets.popper.position
  };

  var attributes = {
    'x-placement': data.placement
  };

  // round top and left to avoid blurry text
  var left = Math.round(data.offsets.popper.left);
  var top = Math.round(data.offsets.popper.top);

  // if gpuAcceleration is set to true and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');
  if (options.gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles.top = 0;
    styles.left = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `left` and `top` properties
    styles.left = left;
    styles.top = top;
    styles.willChange = 'top, left';
  }

  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, _extends({}, styles, data.styles));

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, _extends({}, attributes, data.attributes));

  // if the arrow style has been computed, apply the arrow style
  if (data.offsets.arrow) {
    setStyles(data.arrowElement, data.offsets.arrow);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used to add margins to the popper
 * margins needs to be calculated to get the correct popper offsets
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  options.placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference);

  popper.setAttribute('x-placement', options.placement);
  return options;
}

/**
 * Helper used to know if the given modifier depends from another one.
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  return !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
}

/**
 * Modifier used to move the arrowElements on the edge of the popper to make sure them are always between the popper and the reference element
 * It will use the CSS outer size of the arrowElement element to know how many pixels of conjuction are needed
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    console.warn('WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!');
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var popper = getClientRect(data.offsets.popper);
  var reference = data.offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var side = isVertical ? 'top' : 'left';
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  var sideValue = center - getClientRect(data.offsets.popper)[side];

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = sideValue;
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one/
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
 * Requires the `preventOverflow` modifier before it in order to work.
 * **NOTE:** data.instance modifier will run all its previous modifiers everytime it tries to flip the popper!
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = getClientRect(data.offsets.popper);
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');
      data.offsets.popper = getPopperOffsets(data.instance.state.position, data.instance.popper, data.offsets.reference, data.placement);

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * Modifier used to make sure the popper is always near its reference element
 * It cares only about the first axis, you can still have poppers with margin
 * between the popper and its reference element.
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var popper = getClientRect(data.offsets.popper);
  var reference = data.offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
 * The offsets will shift the popper on the side of its reference element.
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 *      Basic usage allows a number used to nudge the popper by the given amount of pixels.
 *      You can pass a percentage value as string (eg. `20%`) to nudge by the given percentage (relative to reference element size)
 *      Other supported units are `vh` and `vw` (relative to viewport)
 *      Additionally, you can pass a pair of values (eg. `10 20` or `2vh 20%`) to nudge the popper
 *      on both axis.
 *      A note about percentage values, if you want to refer a percentage to the popper size instead of the reference element size,
 *      use `%p` instead of `%` (eg: `20%p`). To make it clearer, you can replace `%` with `%r` and use eg.`10%p 25%r`.
 *      > **Heads up!** The order of the axis is relative to the popper placement: `bottom` or `top` are `X,Y`, the other are `Y,X`
 * @returns {Object} The data object, properly modified
 */
function offset(data, options) {
  var placement = data.placement;
  var popper = data.offsets.popper;

  var offsets = void 0;
  if (isNumeric(options.offset)) {
    offsets = [options.offset, 0];
  } else {
    // split the offset in case we are providing a pair of offsets separated
    // by a blank space
    offsets = options.offset.split(' ');

    // itherate through each offset to compute them in case they are percentages
    offsets = offsets.map(function (offset, index) {
      // separate value from unit
      var split = offset.match(/(\d*\.?\d*)(.*)/);
      var value = +split[1];
      var unit = split[2];

      // use height if placement is left or right and index is 0 otherwise use width
      // in this way the first offset will use an axis and the second one
      // will use the other one
      var useHeight = placement.indexOf('right') !== -1 || placement.indexOf('left') !== -1;

      if (index === 1) {
        useHeight = !useHeight;
      }

      var measurement = useHeight ? 'height' : 'width';

      // if is a percentage relative to the popper (%p), we calculate the value of it using
      // as base the sizes of the popper
      // if is a percentage (% or %r), we calculate the value of it using as base the
      // sizes of the reference element
      if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
          case '%p':
            element = data.offsets.popper;
            break;
          case '%':
          case '$r':
          default:
            element = data.offsets.reference;
        }

        var rect = getClientRect(element);
        var len = rect[measurement];
        return len / 100 * value;
      } else if (unit === 'vh' || unit === 'vw') {
        // if is a vh or vw, we calculate the size based on the viewport
        var size = void 0;
        if (unit === 'vh') {
          size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
          size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
      } else if (unit === 'px') {
        // if is an explicit pixel unit, we get rid of the unit and keep the value
        return +value;
      } else {
        // if is an implicit unit, it's px, and we return just the value
        return +offset;
      }
    });
  }

  if (data.placement.indexOf('left') !== -1) {
    popper.top += offsets[0];
    popper.left -= offsets[1] || 0;
  } else if (data.placement.indexOf('right') !== -1) {
    popper.top += offsets[0];
    popper.left += offsets[1] || 0;
  } else if (data.placement.indexOf('top') !== -1) {
    popper.left += offsets[0];
    popper.top -= offsets[1] || 0;
  } else if (data.placement.indexOf('bottom') !== -1) {
    popper.left += offsets[0];
    popper.top += offsets[1] || 0;
  }
  return data;
}

/**
 * Modifier used to prevent the popper from being positioned outside the boundary.
 *
 * An scenario exists where the reference itself is not within the boundaries. We can
 * say it has "escaped the boundaries" — or just "escaped". In this case we need to
 * decide whether the popper should either:
 *
 * - detach from the reference and remain "trapped" in the boundaries, or
 * - if it should be ignore the boundary and "escape with the reference"
 *
 * When `escapeWithReference` is `true`, and reference is completely outside the
 * boundaries, the popper will overflow (or completely leave) the boundaries in order
 * to remain attached to the edge of the reference.
 *
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = getClientRect(data.offsets.popper);

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * Modifier used to shift the popper on the start or end of its reference element side
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var reference = data.offsets.reference;
    var popper = getClientRect(data.offsets.popper);
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * Modifier used to hide the popper when its reference element is outside of the
 * popper boundaries. It will set an x-hidden attribute which can be used to hide
 * the popper when its reference is out of boundaries.
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    console.warn('WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!');
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * Modifier used to make the popper flow toward the inner of the reference element.
 * By default, when this modifier is disabled, the popper will be placed outside
 * the reference element.
 * @method
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var popper = getClientRect(data.offsets.popper);
  var reference = getClientRect(data.offsets.reference);
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[placement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifiers are plugins used to alter the behavior of your poppers.
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `function` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference element side
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {Number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: shift
  },

  /**
   * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
   * The offsets will shift the popper on the side of its reference element.
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {Number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: offset,
    /** @prop {Number|String} offset=0
     * Basic usage allows a number used to nudge the popper by the given amount of pixels.
     * You can pass a percentage value as string (eg. `20%`) to nudge by the given percentage (relative to reference element size)
     * Other supported units are `vh` and `vw` (relative to viewport)
     * Additionally, you can pass a pair of values (eg. `10 20` or `2vh 20%`) to nudge the popper
     * on both axis.
     * A note about percentage values, if you want to refer a percentage to the popper size instead of the reference element size,
     * use `%p` instead of `%` (eg: `20%p`). To make it clearer, you can replace `%` with `%r` and use eg.`10%p 25%r`.
     * **Heads up!** The order of the axis is relative to the popper placement: `bottom` or `top` are `X,Y`, the other are `Y,X`
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries. We can
   * say it has "escaped the boundaries" — or just "escaped". In this case we need to
   * decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should be ignore the boundary and "escape with the reference"
   *
   * When `escapeWithReference` is `true`, and reference is completely outside the
   * boundaries, the popper will overflow (or completely leave) the boundaries in order
   * to remain attached to the edge of the reference.
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {Number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: preventOverflow,
    /**
     * @prop {Array} priority=['left', 'right', 'top', 'bottom']
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {Number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {Number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: keepTogether
  },

  /**
   * Modifier used to move the `arrowElement` on the edge of the popper to make
   * sure it's always between the popper and its reference element.
   * It will use the CSS outer size of the `arrowElement` element to know how
   * many pixels of conjuction are needed.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {Number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the placement of the popper when the latter starts
   * overlapping its reference element.
   * Requires the `preventOverflow` modifier before it in order to work.
   * **NOTE:** this modifier will run all its previous modifiers everytime it
   * tries to flip the popper!
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {Number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {Number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {Number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {Function} */
    function: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set an x-hidden attribute which can be used to hide
   * the popper when its reference is out of boundaries.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {Number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: hide
  },

  /**
   * Applies the computed styles to the popper element, disabling this modifier,
   * no DOM changes will be performed by Popper.js. You may want to disble it
   * while working with view librararies like React.
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {Number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {Function} */
    function: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true
  }
};

/**
 * Modifiers can edit the `data` object to change the beheavior of the popper.
 * This object contains all the informations used by Popper.js to compute the
 * popper position.
 * The modifier can edit the data as needed, and then `return` it as result.
 *
 * @callback Modifiers~modifier
 * @param {dataObject} data
 * @return {dataObject} modified data
 */

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arro] `top` and `left` offsets, only one of them will be different from 0
 */

// Utils
// Modifiers
/**
 *
 * @callback onCreateCallback
 * @param {dataObject} data
 */

/**
 *
 * @callback onUpdateCallback
 * @param {dataObject} data
 */

/**
 * Default options provided to Popper.js constructor.
 * These can be overriden using the `options` argument of Popper.js.
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of {defaults}, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @namespace defaults
 */
var DEFAULTS = {
  /**
   * Popper's placement
   * @memberof defaults
   * @prop {String} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @memberof defaults
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @memberof defaults
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.
   * By default, is set to no-op.
   * Access Popper.js instance with `data.instance`.
   * @memberof defaults
   * @prop {onCreateCallback}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.
   * By default, is set to no-op.
   * Access Popper.js instance with `data.instance`.
   * @memberof defaults
   * @prop {onUpdateCallback}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @memberof defaults
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * Create a new Popper.js instance
 * @class Popper
 * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Your custom options to override the ones defined in [DEFAULTS](#defaults)
 * @return {Object} instance - The generated Popper.js instance
 */

var Popper = function () {
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // make sure to apply the popper position before any computation
    setStyles(this.popper, { position: 'absolute' });

    // refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(Popper.Defaults.modifiers).map(function (name) {
      return _extends({
        name: name
      }, Popper.Defaults.modifiers[name]);
    });

    // assign default values to modifiers, making sure to override them with
    // the ones defined by user
    this.modifiers = this.modifiers.map(function (defaultConfig) {
      var userConfig = options.modifiers && options.modifiers[defaultConfig.name] || {};
      return _extends({}, defaultConfig, userConfig);
    });

    // add custom modifiers to the modifiers list
    if (options.modifiers) {
      this.options.modifiers = _extends({}, Popper.Defaults.modifiers, options.modifiers);
      Object.keys(options.modifiers).forEach(function (name) {
        // take in account only custom modifiers
        if (Popper.Defaults.modifiers[name] === undefined) {
          var modifier = options.modifiers[name];
          modifier.name = name;
          _this.modifiers.push(modifier);
        }
      });
    }

    // sort the modifiers by order
    this.modifiers = this.modifiers.sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  //
  // Methods
  //

  /**
     * Updates the position of the popper, computing the new offsets and applying the new style
     * Prefer `scheduleUpdate` over `update` because of performance reasons
     * @method
     * @memberof Popper
     */


  createClass(Popper, [{
    key: 'update',
    value: function update() {
      // if popper is destroyed, don't perform any further update
      if (this.state.isDestroyed) {
        return;
      }

      var data = {
        instance: this,
        styles: {},
        attributes: {},
        flipped: false,
        offsets: {}
      };

      // compute reference element offsets
      data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

      // compute auto placement, store placement inside the data object,
      // modifiers will be able to edit `placement` if needed
      // and refer to originalPlacement to know the original value
      data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference);

      // store the computed placement inside `originalPlacement`
      data.originalPlacement = this.options.placement;

      // compute the popper offsets
      data.offsets.popper = getPopperOffsets(this.state, this.popper, data.offsets.reference, data.placement);

      // run the modifiers
      data = runModifiers(this.modifiers, data);

      // the first `update` will call `onCreate` callback
      // the other ones will call `onUpdate` callback
      if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
      } else {
        this.options.onUpdate(data);
      }
    }

    /**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */

  }, {
    key: 'destroy',


    /**
       * Destroy the popper
       * @method
       * @memberof Popper
       */
    value: function destroy() {
      this.state.isDestroyed = true;

      // touch DOM only if `applyStyle` modifier is enabled
      if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.left = '';
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
      }

      this.disableEventListeners();

      // remove the popper if user explicity asked for the deletion on destroy
      // do not use `remove` because IE11 doesn't support it
      if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
      }
      return this;
    }

    /**
       * it will add resize/scroll events and start recalculating
       * position of the popper element when they are triggered
       * @method
       * @memberof Popper
       */

  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners() {
      if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
      }
    }

    /**
       * it will remove resize/scroll events and won't recalculate
       * popper position when they are triggered. It also won't trigger onUpdate callback anymore,
       * unless you call 'update' method manually.
       * @method
       * @memberof Popper
       */

  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners() {
      if (this.state.eventsEnabled) {
        window.cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
      }
    }

    /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       * @memberof Popper
       */


    /**
       * List of accepted placements to use as values of the `placement` option
       * @memberof Popper
       */


    /**
       * Default Popper.js options
       * @memberof Popper
       */

  }]);
  return Popper;
}();

/**
  * The `referenceObject` is an object that provides an interface compatible with Popper.js
  * and lets you use it as replacement of a real DOM node.
  * You can use this method to position a popper relatively to a set of coordinates
  * in case you don't have a DOM node to use as reference.
  * NB: This feature isn't supported in Internet Explorer 10
  * @name referenceObject
  * @property {Function} data.getBoundingClientRect A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
  * @property {Number} data.clientWidth An ES6 getter that will return the width of the virtual reference element.
  * @property {Number} data.clientHeight An ES6 getter that will return the height of the virtual reference element.
  */


Popper.Utils = window.PopperUtils;
Popper.placements = placements;
Popper.Defaults = DEFAULTS;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ })
/******/ ]);
});