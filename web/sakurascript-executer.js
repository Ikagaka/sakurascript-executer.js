var sakuraScriptExecuter =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SakuraScriptExecuter = undefined;
	
	var _promise = __webpack_require__(1);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _regenerator = __webpack_require__(69);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(73);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _asyncToGenerator2 = __webpack_require__(76);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(77);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(81);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(82);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(86);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(104);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _events = __webpack_require__(111);
	
	var _sakurascript = __webpack_require__(112);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * SakuraScript Executer
	 */
	
	var SakuraScriptExecuter = exports.SakuraScriptExecuter = function (_EventEmitter) {
	  (0, _inherits3.default)(SakuraScriptExecuter, _EventEmitter);
	
	  /**
	   * constructor
	   * @param {object} options options
	   */
	
	  function SakuraScriptExecuter() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    (0, _classCallCheck3.default)(this, SakuraScriptExecuter);
	
	    /** @type {Object} surface mapping */
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SakuraScriptExecuter).call(this));
	
	    _this.surface_mapping = options.surface_mapping || {};
	    /** @type {number} talk default wait */
	    _this.talk_wait = options.talk_wait || 0;
	    /** @type {Boolean} quick mode */
	    _this.quick = options.quick || false;
	    return _this;
	  }
	
	  /**
	   * execute sakura script
	   * @param {string} script sakura script
	   * @emits {sakurascript} sakura script token event
	   * @return {void}
	   */
	
	
	  (0, _createClass3.default)(SakuraScriptExecuter, [{
	    key: 'execute',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(script) {
	        var sakurascript, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, token, surface_id, period;
	
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                sakurascript = _sakurascript.SakuraScript.parse(script);
	
	                this._initialize_execute_state();
	                _iteratorNormalCompletion = true;
	                _didIteratorError = false;
	                _iteratorError = undefined;
	                _context.prev = 5;
	                _iterator = (0, _getIterator3.default)(sakurascript.tokens);
	
	              case 7:
	                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                  _context.next = 36;
	                  break;
	                }
	
	                token = _step.value;
	
	                if (!this.wait_until_action) {
	                  _context.next = 15;
	                  break;
	                }
	
	                _context.next = 12;
	                return this._wait_until_action(this.wait_until_action);
	
	              case 12:
	                this.wait_until_action = null;
	                _context.next = 25;
	                break;
	
	              case 15:
	                if (this.quick) {
	                  _context.next = 25;
	                  break;
	                }
	
	                if (!(this.wait != null)) {
	                  _context.next = 22;
	                  break;
	                }
	
	                _context.next = 19;
	                return this._wait(this.wait);
	
	              case 19:
	                this.wait = null;
	                _context.next = 25;
	                break;
	
	              case 22:
	                if (!(token instanceof Char && !this.quick_section)) {
	                  _context.next = 25;
	                  break;
	                }
	
	                _context.next = 25;
	                return this._wait(this.talk_wait);
	
	              case 25:
	                if (!this.will_abort) {
	                  _context.next = 27;
	                  break;
	                }
	
	                return _context.abrupt('break', 36);
	
	              case 27:
	                this.emit('sakurascript', token);
	
	                if (!(token instanceof _sakurascript.SakuraScriptToken.Char)) {
	                  _context.next = 32;
	                  break;
	                }
	
	                return _context.abrupt('continue', 33);
	
	              case 32:
	                if (token instanceof _sakurascript.SakuraScriptToken.Surface) {
	                  this.surface_id = token.surface;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.SurfaceAlias) {
	                  surface_id = this.surface_mapping[token.surface_alias];
	
	                  if (surface_id) this.surface_id = surface_id;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
	                  this.wait_until_action = '_animation_finished_' + this.surface_id + '_' + token.animation;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
	                  this.wait_until_action = '_animation_finished_' + this.surface_id + '_' + token.id;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitFromBeginning) {
	                  period = new Date() - this.execute_start_time;
	
	                  if (period > 0) this.wait = period;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.ResetBeginning) {
	                  this.execute_start_time = new Date();
	                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitClick) {
	                  this.execute_start_time = new Date();
	                  this.wait_until_action = '_balloon_clicked';
	                } else if (token instanceof _sakurascript.SakuraScriptToken.SimpleWait) {
	                  this.wait = token.period * 50;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.PreciseWait) {
	                  this.wait = token.period;
	                } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleQuick) {
	                  this.quick_section = !this.quick_section;
	                }
	
	              case 33:
	                _iteratorNormalCompletion = true;
	                _context.next = 7;
	                break;
	
	              case 36:
	                _context.next = 42;
	                break;
	
	              case 38:
	                _context.prev = 38;
	                _context.t0 = _context['catch'](5);
	                _didIteratorError = true;
	                _iteratorError = _context.t0;
	
	              case 42:
	                _context.prev = 42;
	                _context.prev = 43;
	
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	
	              case 45:
	                _context.prev = 45;
	
	                if (!_didIteratorError) {
	                  _context.next = 48;
	                  break;
	                }
	
	                throw _iteratorError;
	
	              case 48:
	                return _context.finish(45);
	
	              case 49:
	                return _context.finish(42);
	
	              case 50:
	                this._finalize_execute_state();
	
	              case 51:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[5, 38, 42, 50], [43,, 45, 49]]);
	      }));
	
	      function execute(_x2) {
	        return _ref.apply(this, arguments);
	      }
	
	      return execute;
	    }()
	  }, {
	    key: '_initialize_execute_state',
	    value: function _initialize_execute_state() {
	      this.executing = true;
	      this.wait = 0;
	      this.wait_until_action = null;
	      this.quick_section = false;
	      this.will_abort = false;
	      this.current_wait = null;
	      this.execute_start_time = new Date();
	    }
	  }, {
	    key: '_finalize_execute_state',
	    value: function _finalize_execute_state() {
	      this.executing = false;
	    }
	  }, {
	    key: '_wait',
	    value: function () {
	      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(period) {
	        var _this2 = this;
	
	        return _regenerator2.default.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                return _context2.abrupt('return', new _promise2.default(function (resolve) {
	                  _this2.current_wait = resolve;
	                  setTimeout(function () {
	                    return resolve(period);
	                  }, period);
	                }).then(function () {
	                  _this2.current_wait = null;
	                }));
	
	              case 1:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function _wait(_x3) {
	        return _ref2.apply(this, arguments);
	      }
	
	      return _wait;
	    }()
	  }, {
	    key: '_wait_until_action',
	    value: function () {
	      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(name) {
	        var _this3 = this;
	
	        return _regenerator2.default.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                return _context3.abrupt('return', new _promise2.default(function (resolve) {
	                  _this3.current_wait = resolve;
	                  _this3[name] = resolve;
	                }).then(function () {
	                  _this3.current_wait = null;
	                  delete _this3[name];
	                }));
	
	              case 1:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	
	      function _wait_until_action(_x4) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return _wait_until_action;
	    }()
	
	    /**
	     * call when balloon clicked
	     * @return {void}
	     */
	
	  }, {
	    key: 'balloon_clicked',
	    value: function balloon_clicked() {
	      if (this._balloon_clicked) this.balloon_clicked();
	    }
	
	    /**
	     * call when animation finished
	     * @return {void}
	     */
	
	  }, {
	    key: 'animation_finished',
	    value: function animation_finished(surface_id, animation_id) {
	      var done = this['_animation_finished_' + surface_id + '_' + animation_id];
	      if (done) done();
	    }
	
	    /**
	     * call when you want to abort
	     * @return {void}
	     */
	
	  }, {
	    key: 'abort_execute',
	    value: function abort_execute() {
	      this.will_abort = true;
	      if (this.current_wait) this.current_wait();
	    }
	  }]);
	  return SakuraScriptExecuter;
	}(_events.EventEmitter);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(48);
	__webpack_require__(52);
	module.exports = __webpack_require__(12).Promise;

/***/ },
/* 3 */
/***/ function(module, exports) {



/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(5)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(8)(String, 'String', function(iterated){
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6)
	  , defined   = __webpack_require__(7);
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(9)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(25)
	  , hide           = __webpack_require__(15)
	  , has            = __webpack_require__(26)
	  , Iterators      = __webpack_require__(27)
	  , $iterCreate    = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(46)
	  , ITERATOR       = __webpack_require__(45)('iterator')
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , ctx       = __webpack_require__(13)
	  , hide      = __webpack_require__(15)
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

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
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

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(16)
	  , createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(20) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(23)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(21)(function(){
	  return Object.defineProperty(__webpack_require__(22)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(21)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
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

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(29)
	  , descriptor     = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(44)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(45)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(17)
	  , dPs         = __webpack_require__(30)
	  , enumBugKeys = __webpack_require__(42)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(22)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(43).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(16)
	  , anObject = __webpack_require__(17)
	  , getKeys  = __webpack_require__(31);
	
	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(42);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(26)
	  , toIObject    = __webpack_require__(33)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');
	
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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(38);
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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(6)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys')
	  , uid    = __webpack_require__(41);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(16).f
	  , has = __webpack_require__(26)
	  , TAG = __webpack_require__(45)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(40)('wks')
	  , uid        = __webpack_require__(41)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(26)
	  , toObject    = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(49);
	var global        = __webpack_require__(11)
	  , hide          = __webpack_require__(15)
	  , Iterators     = __webpack_require__(27)
	  , TO_STRING_TAG = __webpack_require__(45)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(50)
	  , step             = __webpack_require__(51)
	  , Iterators        = __webpack_require__(27)
	  , toIObject        = __webpack_require__(33);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(8)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(9)
	  , global             = __webpack_require__(11)
	  , ctx                = __webpack_require__(13)
	  , classof            = __webpack_require__(53)
	  , $export            = __webpack_require__(10)
	  , isObject           = __webpack_require__(18)
	  , anObject           = __webpack_require__(17)
	  , aFunction          = __webpack_require__(14)
	  , anInstance         = __webpack_require__(54)
	  , forOf              = __webpack_require__(55)
	  , setProto           = __webpack_require__(59).set
	  , speciesConstructor = __webpack_require__(62)
	  , task               = __webpack_require__(63).set
	  , microtask          = __webpack_require__(65)()
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
	      , FakePromise = (promise.constructor = {})[__webpack_require__(45)('species')] = function(exec){ exec(empty, empty); };
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
	  Internal.prototype = __webpack_require__(66)($Promise.prototype, {
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
	__webpack_require__(44)($Promise, PROMISE);
	__webpack_require__(67)(PROMISE);
	Wrapper = __webpack_require__(12)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(68)(function(iter){
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

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35)
	  , TAG = __webpack_require__(45)('toStringTag')
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

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(13)
	  , call        = __webpack_require__(56)
	  , isArrayIter = __webpack_require__(57)
	  , anObject    = __webpack_require__(17)
	  , toLength    = __webpack_require__(37)
	  , getIterFn   = __webpack_require__(58)
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

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(17);
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

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(27)
	  , ITERATOR   = __webpack_require__(45)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(45)('iterator')
	  , Iterators = __webpack_require__(27);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(17);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(13)(Function.call, __webpack_require__(60).f(Object.prototype, '__proto__').set, 2);
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

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(61)
	  , createDesc     = __webpack_require__(24)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(23)
	  , has            = __webpack_require__(26)
	  , IE8_DOM_DEFINE = __webpack_require__(19)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(17)
	  , aFunction = __webpack_require__(14)
	  , SPECIES   = __webpack_require__(45)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(13)
	  , invoke             = __webpack_require__(64)
	  , html               = __webpack_require__(43)
	  , cel                = __webpack_require__(22)
	  , global             = __webpack_require__(11)
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
	  if(__webpack_require__(35)(process) == 'process'){
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

/***/ },
/* 64 */
/***/ function(module, exports) {

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

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , macrotask = __webpack_require__(63).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(35)(process) == 'process';
	
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

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(15);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(11)
	  , core        = __webpack_require__(12)
	  , dP          = __webpack_require__(16)
	  , DESCRIPTORS = __webpack_require__(20)
	  , SPECIES     = __webpack_require__(45)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(45)('iterator')
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

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70);


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(71);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(72)))

/***/ },
/* 72 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	__webpack_require__(4);
	module.exports = __webpack_require__(75);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(17)
	  , get      = __webpack_require__(58);
	module.exports = __webpack_require__(12).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(1);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            return step("next", value);
	          }, function (err) {
	            return step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	module.exports = __webpack_require__(12).Object.getPrototypeOf;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(47)
	  , $getPrototypeOf = __webpack_require__(46);
	
	__webpack_require__(80)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(12)
	  , fails   = __webpack_require__(21);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(83);
	
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

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	var $Object = __webpack_require__(12).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(16).f});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(87);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(88);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(91);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(48);
	module.exports = __webpack_require__(90).f('iterator');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(45);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	__webpack_require__(3);
	__webpack_require__(102);
	__webpack_require__(103);
	module.exports = __webpack_require__(12).Symbol;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(11)
	  , has            = __webpack_require__(26)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(25)
	  , META           = __webpack_require__(94).KEY
	  , $fails         = __webpack_require__(21)
	  , shared         = __webpack_require__(40)
	  , setToStringTag = __webpack_require__(44)
	  , uid            = __webpack_require__(41)
	  , wks            = __webpack_require__(45)
	  , wksExt         = __webpack_require__(90)
	  , wksDefine      = __webpack_require__(95)
	  , keyOf          = __webpack_require__(96)
	  , enumKeys       = __webpack_require__(97)
	  , isArray        = __webpack_require__(99)
	  , anObject       = __webpack_require__(17)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(23)
	  , createDesc     = __webpack_require__(24)
	  , _create        = __webpack_require__(29)
	  , gOPNExt        = __webpack_require__(100)
	  , $GOPD          = __webpack_require__(60)
	  , $DP            = __webpack_require__(16)
	  , $keys          = __webpack_require__(31)
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
	  __webpack_require__(101).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(61).f  = $propertyIsEnumerable;
	  __webpack_require__(98).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(9)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(41)('meta')
	  , isObject = __webpack_require__(18)
	  , has      = __webpack_require__(26)
	  , setDesc  = __webpack_require__(16).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(21)(function(){
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

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(11)
	  , core           = __webpack_require__(12)
	  , LIBRARY        = __webpack_require__(9)
	  , wksExt         = __webpack_require__(90)
	  , defineProperty = __webpack_require__(16).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(31)
	  , toIObject = __webpack_require__(33);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31)
	  , gOPS    = __webpack_require__(98)
	  , pIE     = __webpack_require__(61);
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

/***/ },
/* 98 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
	  , gOPN      = __webpack_require__(101).f
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


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(32)
	  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95)('asyncIterator');

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(95)('observable');

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(105);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(108);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(87);
	
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

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(12).Object.setPrototypeOf;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(59).set});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110);
	var $Object = __webpack_require__(12).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(29)});

/***/ },
/* 111 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function() {
	  var SakuraScript, SakuraScriptToken, joinargs, splitargs,
	    slice = [].slice,
	    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	    hasProp = {}.hasOwnProperty;
	
	  splitargs = function(str) {
	    return str.replace(/"((?:\\\\|\\"|[^"])*)"/g, function(all, quoted) {
	      return quoted.replace(/,/g, '\0');
	    }).split(/\s*\,\s*/).map(function(arg) {
	      return arg.replace(/\0/g, ',').replace(/\\(.)/, '$1');
	    });
	  };
	
	  joinargs = function(args) {
	    return args.map(function(arg) {
	      return arg.replace(/\\/, '\\\\').replace(/\]/, '\\]');
	    }).map(function(arg) {
	      if (/[,"]/.test(arg)) {
	        return '"' + arg.replace(/"/, '\\"') + '"';
	      } else {
	        return arg;
	      }
	    }).join(',');
	  };
	
	  SakuraScript = (function() {
	    SakuraScript.fromObject = function(json) {
	      var i, len, token, tokens;
	      tokens = [];
	      for (i = 0, len = json.length; i < len; i++) {
	        token = json[i];
	        tokens.push(SakuraScriptToken.fromObject(token));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    SakuraScript.parse = function(script) {
	      var i, len, ref, tag, tokens;
	      tokens = [];
	      while (script.length) {
	        tag = null;
	        ref = SakuraScript.tags;
	        for (i = 0, len = ref.length; i < len; i++) {
	          tag = ref[i];
	          if (tag.re.test(script)) {
	            break;
	          }
	        }
	        script = script.replace(tag.re, (function(_this) {
	          return function() {
	            var all, group, j, offset;
	            group = 3 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 2) : (j = 0, []), offset = arguments[j++], all = arguments[j++];
	            tokens.push(tag.match.call(_this, group));
	            return '';
	          };
	        })(this));
	      }
	      return new SakuraScript(tokens);
	    };
	
	    function SakuraScript(tokens1) {
	      this.tokens = tokens1 != null ? tokens1 : [];
	    }
	
	    SakuraScript.prototype.toObject = function() {
	      var i, len, ref, results, token;
	      ref = this.tokens;
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        token = ref[i];
	        results.push(token.toObject());
	      }
	      return results;
	    };
	
	    SakuraScript.prototype.toSakuraScript = function() {
	      var token;
	      return ((function() {
	        var i, len, ref, results;
	        ref = this.tokens;
	        results = [];
	        for (i = 0, len = ref.length; i < len; i++) {
	          token = ref[i];
	          results.push(token.toSakuraScript());
	        }
	        return results;
	      }).call(this)).join('');
	    };
	
	    return SakuraScript;
	
	  })();
	
	  SakuraScriptToken = (function() {
	    SakuraScriptToken.fromObject = function(json) {
	      var i, instance, key, len, ref;
	      instance = new SakuraScriptToken[json["class"]]();
	      ref = Object.keys(json);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        if (key !== "class") {
	          instance[key] = json[key];
	        }
	      }
	      return instance;
	    };
	
	    function SakuraScriptToken() {}
	
	    SakuraScriptToken.prototype.toObject = function() {
	      var class_name, i, json, key, len, ref;
	      class_name = this.constructor.toString().slice(9).match(/^[^\s(]+/)[0];
	      json = {
	        "class": class_name
	      };
	      ref = Object.keys(this);
	      for (i = 0, len = ref.length; i < len; i++) {
	        key = ref[i];
	        json[key] = this[key];
	      }
	      return json;
	    };
	
	    SakuraScriptToken.prototype.toSakuraScript = function() {
	      throw new Error("not implemented");
	    };
	
	    return SakuraScriptToken;
	
	  })();
	
	  SakuraScriptToken.Scope = (function(superClass) {
	    extend(Scope, superClass);
	
	    function Scope(scope, view) {
	      this.scope = scope;
	      this.view = view;
	    }
	
	    Scope.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\p[" + this.scope + "]";
	        case "nobracket":
	          return "\\p" + this.scope;
	        default:
	          return "\\" + this.view;
	      }
	    };
	
	    return Scope;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Surface = (function(superClass) {
	    extend(Surface, superClass);
	
	    function Surface(surface, view) {
	      this.surface = surface;
	      this.view = view;
	    }
	
	    Surface.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\s[" + this.surface + "]";
	        case "nobracket":
	          return "\\s" + this.surface;
	      }
	    };
	
	    return Surface;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SurfaceAlias = (function(superClass) {
	    extend(SurfaceAlias, superClass);
	
	    function SurfaceAlias(surface_alias) {
	      this.surface_alias = surface_alias;
	    }
	
	    SurfaceAlias.prototype.toSakuraScript = function() {
	      return "\\s[" + (joinargs([this.surface_alias])) + "]";
	    };
	
	    return SurfaceAlias;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Balloon = (function(superClass) {
	    extend(Balloon, superClass);
	
	    function Balloon(balloon, view) {
	      this.balloon = balloon;
	      this.view = view;
	    }
	
	    Balloon.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\b[" + this.balloon + "]";
	        case "nobracket":
	          return "\\b" + this.balloon;
	      }
	    };
	
	    return Balloon;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimation = (function(superClass) {
	    extend(PlayAnimation, superClass);
	
	    function PlayAnimation(animation, view) {
	      this.animation = animation;
	      this.view = view;
	    }
	
	    PlayAnimation.prototype.toSakuraScript = function() {
	      switch (this.view) {
	        case "bracket":
	          return "\\i[" + this.animation + "]";
	        case "nobracket":
	          return "\\i" + this.animation;
	      }
	    };
	
	    return PlayAnimation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PlayAnimationWait = (function(superClass) {
	    extend(PlayAnimationWait, superClass);
	
	    function PlayAnimationWait(animation) {
	      this.animation = animation;
	    }
	
	    PlayAnimationWait.prototype.toSakuraScript = function() {
	      return "\\i[" + this.animation + ",wait]";
	    };
	
	    return PlayAnimationWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.SimpleWait = (function(superClass) {
	    extend(SimpleWait, superClass);
	
	    function SimpleWait(period) {
	      this.period = period;
	    }
	
	    SimpleWait.prototype.toSakuraScript = function() {
	      return "\\w" + this.period;
	    };
	
	    return SimpleWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PreciseWait = (function(superClass) {
	    extend(PreciseWait, superClass);
	
	    function PreciseWait(period) {
	      this.period = period;
	    }
	
	    PreciseWait.prototype.toSakuraScript = function() {
	      return "\\_w[" + this.period + "]";
	    };
	
	    return PreciseWait;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitFromBeginning = (function(superClass) {
	    extend(WaitFromBeginning, superClass);
	
	    function WaitFromBeginning(period) {
	      this.period = period;
	    }
	
	    WaitFromBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[" + this.period + "]";
	    };
	
	    return WaitFromBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ResetBeginning = (function(superClass) {
	    extend(ResetBeginning, superClass);
	
	    function ResetBeginning() {}
	
	    ResetBeginning.prototype.toSakuraScript = function() {
	      return "\\__w[clear]";
	    };
	
	    return ResetBeginning;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitAnimationEnd = (function(superClass) {
	    extend(WaitAnimationEnd, superClass);
	
	    function WaitAnimationEnd(id) {
	      this.id = id;
	    }
	
	    WaitAnimationEnd.prototype.toSakuraScript = function() {
	      return "\\__w[animation," + this.id + "]";
	    };
	
	    return WaitAnimationEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleQuick = (function(superClass) {
	    extend(ToggleQuick, superClass);
	
	    function ToggleQuick() {}
	
	    ToggleQuick.prototype.toSakuraScript = function() {
	      return "\\_q";
	    };
	
	    return ToggleQuick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleSynchronize = (function(superClass) {
	    extend(ToggleSynchronize, superClass);
	
	    function ToggleSynchronize(scopes) {
	      this.scopes = scopes != null ? scopes : [];
	    }
	
	    ToggleSynchronize.prototype.toSakuraScript = function() {
	      return "\\_s" + (this.scopes.length ? "[" + (joinargs(this.scopes)) + "]" : "");
	    };
	
	    return ToggleSynchronize;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.TimeCritical = (function(superClass) {
	    extend(TimeCritical, superClass);
	
	    function TimeCritical() {}
	
	    TimeCritical.prototype.toSakuraScript = function() {
	      return "\\t";
	    };
	
	    return TimeCritical;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.WaitClick = (function(superClass) {
	    extend(WaitClick, superClass);
	
	    function WaitClick(noclear) {
	      this.noclear = noclear != null ? noclear : false;
	    }
	
	    WaitClick.prototype.toSakuraScript = function() {
	      return "\\x";
	    };
	
	    return WaitClick;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NoChoiceTimeout = (function(superClass) {
	    extend(NoChoiceTimeout, superClass);
	
	    function NoChoiceTimeout() {}
	
	    NoChoiceTimeout.prototype.toSakuraScript = function() {
	      return "\\*";
	    };
	
	    return NoChoiceTimeout;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EventChoice = (function(superClass) {
	    extend(EventChoice, superClass);
	
	    function EventChoice(text, event, references) {
	      this.text = text;
	      this.event = event;
	      this.references = references;
	    }
	
	    EventChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, this.event].concat(this.references))) + "]";
	    };
	
	    return EventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ReferencesChoice = (function(superClass) {
	    extend(ReferencesChoice, superClass);
	
	    function ReferencesChoice(text, references) {
	      this.text = text;
	      this.references = references;
	    }
	
	    ReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text].concat(this.references))) + "]";
	    };
	
	    return ReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ScriptChoice = (function(superClass) {
	    extend(ScriptChoice, superClass);
	
	    function ScriptChoice(text, script1) {
	      this.text = text;
	      this.script = script1;
	    }
	
	    ScriptChoice.prototype.toSakuraScript = function() {
	      return "\\q[" + (joinargs([this.text, "script:" + this.script])) + "]";
	    };
	
	    return ScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldReferenceChoice = (function(superClass) {
	    extend(OldReferenceChoice, superClass);
	
	    function OldReferenceChoice(text, reference, view) {
	      this.text = text;
	      this.reference = reference;
	      this.view = view;
	    }
	
	    OldReferenceChoice.prototype.toSakuraScript = function() {
	      return "\\q" + (this.view || '') + "[" + (joinargs([this.reference])) + "][" + (joinargs([this.text])) + "]";
	    };
	
	    return OldReferenceChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventChoice = (function(superClass) {
	    extend(BeginEventChoice, superClass);
	
	    function BeginEventChoice(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesChoice = (function(superClass) {
	    extend(BeginReferencesChoice, superClass);
	
	    function BeginReferencesChoice(references) {
	      this.references = references;
	    }
	
	    BeginReferencesChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptChoice = (function(superClass) {
	    extend(BeginScriptChoice, superClass);
	
	    function BeginScriptChoice(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptChoice.prototype.toSakuraScript = function() {
	      return "\\__q[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndChoice = (function(superClass) {
	    extend(EndChoice, superClass);
	
	    function EndChoice() {}
	
	    EndChoice.prototype.toSakuraScript = function() {
	      return "\\__q";
	    };
	
	    return EndChoice;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginEventAnchor = (function(superClass) {
	    extend(BeginEventAnchor, superClass);
	
	    function BeginEventAnchor(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    BeginEventAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return BeginEventAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginReferencesAnchor = (function(superClass) {
	    extend(BeginReferencesAnchor, superClass);
	
	    function BeginReferencesAnchor(references) {
	      this.references = references;
	    }
	
	    BeginReferencesAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(this.references)) + "]";
	    };
	
	    return BeginReferencesAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeginScriptAnchor = (function(superClass) {
	    extend(BeginScriptAnchor, superClass);
	
	    function BeginScriptAnchor(script1) {
	      this.script = script1;
	    }
	
	    BeginScriptAnchor.prototype.toSakuraScript = function() {
	      return "\\_a[" + (joinargs(["script:" + this.script])) + "]";
	    };
	
	    return BeginScriptAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EndAnchor = (function(superClass) {
	    extend(EndAnchor, superClass);
	
	    function EndAnchor() {}
	
	    EndAnchor.prototype.toSakuraScript = function() {
	      return "\\_a";
	    };
	
	    return EndAnchor;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LineBreak = (function(superClass) {
	    extend(LineBreak, superClass);
	
	    function LineBreak() {}
	
	    LineBreak.prototype.toSakuraScript = function() {
	      return "\\n";
	    };
	
	    return LineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.HalfLineBreak = (function(superClass) {
	    extend(HalfLineBreak, superClass);
	
	    function HalfLineBreak() {}
	
	    HalfLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[half]";
	    };
	
	    return HalfLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.PercentLineBreak = (function(superClass) {
	    extend(PercentLineBreak, superClass);
	
	    function PercentLineBreak(percent) {
	      this.percent = percent;
	    }
	
	    PercentLineBreak.prototype.toSakuraScript = function() {
	      return "\\n[" + this.percent + "]";
	    };
	
	    return PercentLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.ToggleNoAutoLineBreak = (function(superClass) {
	    extend(ToggleNoAutoLineBreak, superClass);
	
	    function ToggleNoAutoLineBreak() {}
	
	    ToggleNoAutoLineBreak.prototype.toSakuraScript = function() {
	      return "\\_n";
	    };
	
	    return ToggleNoAutoLineBreak;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Location = (function(superClass) {
	    extend(Location, superClass);
	
	    function Location(x1, y1) {
	      this.x = x1;
	      this.y = y1;
	    }
	
	    Location.prototype.toSakuraScript = function() {
	      return "\\_l[" + ([this.x, this.y].join(',')) + "]";
	    };
	
	    return Location;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Image = (function(superClass) {
	    extend(Image, superClass);
	
	    function Image(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    Image.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, this.x, this.y].concat(this.args).join(',')) + "]";
	    };
	
	    return Image;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.InlineImage = (function(superClass) {
	    extend(InlineImage, superClass);
	
	    function InlineImage(path, x1, y1, args1) {
	      this.path = path;
	      this.x = x1;
	      this.y = y1;
	      this.args = args1;
	    }
	
	    InlineImage.prototype.toSakuraScript = function() {
	      return "\\_b[" + ([this.path, 'inline'].concat(this.args).join(',')) + "]";
	    };
	
	    return InlineImage;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Font = (function(superClass) {
	    extend(Font, superClass);
	
	    function Font(name, args1) {
	      this.name = name;
	      this.args = args1;
	    }
	
	    Font.prototype.toSakuraScript = function() {
	      return "\\f[" + (joinargs([this.name].concat(this.args))) + "]";
	    };
	
	    return Font;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeFar = (function(superClass) {
	    extend(BeFar, superClass);
	
	    function BeFar() {}
	
	    BeFar.prototype.toSakuraScript = function() {
	      return "\\4";
	    };
	
	    return BeFar;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.BeNear = (function(superClass) {
	    extend(BeNear, superClass);
	
	    function BeNear() {}
	
	    BeNear.prototype.toSakuraScript = function() {
	      return "\\5";
	    };
	
	    return BeNear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Clear = (function(superClass) {
	    extend(Clear, superClass);
	
	    function Clear() {}
	
	    Clear.prototype.toSakuraScript = function() {
	      return "\\c";
	    };
	
	    return Clear;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.End = (function(superClass) {
	    extend(End, superClass);
	
	    function End() {}
	
	    End.prototype.toSakuraScript = function() {
	      return "\\e";
	    };
	
	    return End;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OldChoiceEnd = (function(superClass) {
	    extend(OldChoiceEnd, superClass);
	
	    function OldChoiceEnd() {}
	
	    OldChoiceEnd.prototype.toSakuraScript = function() {
	      return "\\z";
	    };
	
	    return OldChoiceEnd;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenCommunicateBox = (function(superClass) {
	    extend(OpenCommunicateBox, superClass);
	
	    function OpenCommunicateBox() {}
	
	    OpenCommunicateBox.prototype.toSakuraScript = function() {
	      return "\\__c";
	    };
	
	    return OpenCommunicateBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.OpenTeachBox = (function(superClass) {
	    extend(OpenTeachBox, superClass);
	
	    function OpenTeachBox() {}
	
	    OpenTeachBox.prototype.toSakuraScript = function() {
	      return "\\__t";
	    };
	
	    return OpenTeachBox;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Halt = (function(superClass) {
	    extend(Halt, superClass);
	
	    function Halt() {}
	
	    Halt.prototype.toSakuraScript = function() {
	      return "\\-";
	    };
	
	    return Halt;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Marker = (function(superClass) {
	    extend(Marker, superClass);
	
	    function Marker() {}
	
	    Marker.prototype.toSakuraScript = function() {
	      return "\\![*]";
	    };
	
	    return Marker;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Char = (function(superClass) {
	    extend(Char, superClass);
	
	    function Char(raw_char) {
	      this.raw_char = raw_char;
	      if (this.raw_char) {
	        this.char = this.raw_char.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;');
	      }
	    }
	
	    Char.prototype.toSakuraScript = function() {
	      return this.raw_char;
	    };
	
	    return Char;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.EscapeChar = (function(superClass) {
	    extend(EscapeChar, superClass);
	
	    function EscapeChar() {
	      this.char = "\\";
	    }
	
	    EscapeChar.prototype.toSakuraScript = function() {
	      return "\\\\";
	    };
	
	    return EscapeChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.UCSChar = (function(superClass) {
	    extend(UCSChar, superClass);
	
	    function UCSChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    UCSChar.prototype.toSakuraScript = function() {
	      return "\\_u[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return UCSChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.AsciiChar = (function(superClass) {
	    extend(AsciiChar, superClass);
	
	    function AsciiChar(code_point) {
	      this.code_point = code_point;
	      this.char = "&#" + this.code_point + ";";
	    }
	
	    AsciiChar.prototype.toSakuraScript = function() {
	      return "\\_m[0x" + (this.code_point.toString(16)) + "]";
	    };
	
	    return AsciiChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.EntityChar = (function(superClass) {
	    extend(EntityChar, superClass);
	
	    function EntityChar(entity) {
	      this.entity = entity;
	      this.char = "&" + this.entity + ";";
	    }
	
	    EntityChar.prototype.toSakuraScript = function() {
	      return "\\&[" + this.entity + "]";
	    };
	
	    return EntityChar;
	
	  })(SakuraScriptToken.Char);
	
	  SakuraScriptToken.Animation = (function(superClass) {
	    extend(Animation, superClass);
	
	    function Animation(command, id, args1) {
	      this.command = command;
	      this.id = id;
	      this.args = args1;
	    }
	
	    Animation.prototype.toSakuraScript = function() {
	      return "\\![anim," + (joinargs([this.command, this.id].concat(this.args))) + "]";
	    };
	
	    return Animation;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Bind = (function(superClass) {
	    extend(Bind, superClass);
	
	    function Bind(category, parts, dress_up) {
	      this.category = category;
	      this.parts = parts;
	      this.dress_up = dress_up;
	    }
	
	    Bind.prototype.toSakuraScript = function() {
	      return "\\![bind," + (joinargs([this.category, this.parts, this.dress_up])) + "]";
	    };
	
	    return Bind;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.LockRepaint = (function(superClass) {
	    extend(LockRepaint, superClass);
	
	    function LockRepaint() {}
	
	    LockRepaint.prototype.toSakuraScript = function() {
	      return "\\![lock,repaint]";
	    };
	
	    return LockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.UnlockRepaint = (function(superClass) {
	    extend(UnlockRepaint, superClass);
	
	    function UnlockRepaint() {}
	
	    UnlockRepaint.prototype.toSakuraScript = function() {
	      return "\\![unlock,repaint]";
	    };
	
	    return UnlockRepaint;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Move = (function(superClass) {
	    extend(Move, superClass);
	
	    function Move(x1, y1, duration, origin_type, source_origin, target_origin) {
	      this.x = x1;
	      this.y = y1;
	      this.duration = duration;
	      this.origin_type = origin_type;
	      this.source_origin = source_origin;
	      this.target_origin = target_origin;
	    }
	
	    Move.prototype.toSakuraScript = function() {
	      return "\\![move," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return Move;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.MoveAsync = (function(superClass) {
	    extend(MoveAsync, superClass);
	
	    function MoveAsync() {
	      return MoveAsync.__super__.constructor.apply(this, arguments);
	    }
	
	    MoveAsync.prototype.toSakuraScript = function() {
	      return "\\![moveasync," + (joinargs([this.x, this.y, this.duration, this.origin_type, this.source_origin, this.target_origin])) + "]";
	    };
	
	    return MoveAsync;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.MoveAsyncCancel = (function(superClass) {
	    extend(MoveAsyncCancel, superClass);
	
	    function MoveAsyncCancel() {}
	
	    MoveAsyncCancel.prototype.toSakuraScript = function() {
	      return "\\![moveasync,cancel]";
	    };
	
	    return MoveAsyncCancel;
	
	  })(SakuraScriptToken.Move);
	
	  SakuraScriptToken.Raise = (function(superClass) {
	    extend(Raise, superClass);
	
	    function Raise(event, references) {
	      this.event = event;
	      this.references = references;
	    }
	
	    Raise.prototype.toSakuraScript = function() {
	      return "\\![raise," + (joinargs([this.event].concat(this.references))) + "]";
	    };
	
	    return Raise;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Set = (function(superClass) {
	    extend(Set, superClass);
	
	    function Set(id, args1) {
	      this.id = id;
	      this.args = args1;
	    }
	
	    Set.prototype.toSakuraScript = function() {
	      return "\\![set," + (joinargs([this.id].concat(this.args))) + "]";
	    };
	
	    return Set;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.Open = (function(superClass) {
	    extend(Open, superClass);
	
	    function Open(id, args1) {
	      this.id = id;
	      this.args = args1;
	    }
	
	    Open.prototype.toSakuraScript = function() {
	      return "\\![open," + (joinargs([this.id].concat(this.args))) + "]";
	    };
	
	    return Open;
	
	  })(SakuraScriptToken);
	
	  SakuraScriptToken.NotImplemented = (function(superClass) {
	    extend(NotImplemented, superClass);
	
	    function NotImplemented(str1) {
	      this.str = str1;
	    }
	
	    NotImplemented.prototype.toSakuraScript = function() {
	      return this.str;
	    };
	
	    return NotImplemented;
	
	  })(SakuraScriptToken);
	
	  SakuraScript.tags = [
	    {
	      re: /^\\([h0])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(0, group[1]);
	      }
	    }, {
	      re: /^\\([u1])/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(1, group[1]);
	      }
	    }, {
	      re: /^\\p\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\p(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Scope(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Surface(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\s\[([^\]]+)\]/,
	      match: function(group) {
	        if (isNaN(group[1])) {
	          return new SakuraScriptToken.SurfaceAlias(group[1]);
	        } else {
	          return new SakuraScriptToken.Surface(Number(group[1]), "bracket");
	        }
	      }
	    }, {
	      re: /^\\b(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\b\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Balloon(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "nobracket");
	      }
	    }, {
	      re: /^\\i\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimation(Number(group[1]), "bracket");
	      }
	    }, {
	      re: /^\\i\[(\d+),wait\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PlayAnimationWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\w(\d)/,
	      match: function(group) {
	        return new SakuraScriptToken.SimpleWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\_w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PreciseWait(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[animation,(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitAnimationEnd(Number(group[1]));
	      }
	    }, {
	      re: /^\\__w\[clear\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ResetBeginning();
	      }
	    }, {
	      re: /^\\__w\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitFromBeginning(Number(group[1]));
	      }
	    }, {
	      re: /^\\_q/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleQuick();
	      }
	    }, {
	      re: /^\\_s\[([^\]]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize(splitargs(group[1]).map(function(n) {
	          return Number(n);
	        }));
	      }
	    }, {
	      re: /^\\_s/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleSynchronize();
	      }
	    }, {
	      re: /^\\t/,
	      match: function(group) {
	        return new SakuraScriptToken.TimeCritical();
	      }
	    }, {
	      re: /^\\x(\[noclear\])?/,
	      match: function(group) {
	        return new SakuraScriptToken.WaitClick(!!group[1]);
	      }
	    }, {
	      re: /^\\\*/,
	      match: function(group) {
	        return new SakuraScriptToken.NoChoiceTimeout();
	      }
	    }, {
	      re: /^\\q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[1])) {
	          return new SakuraScriptToken.EventChoice(args[0], args[1], args.slice(2));
	        } else if (/^script:/.test(args[1])) {
	          return new SakuraScriptToken.ScriptChoice(args[0], args[1].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.ReferencesChoice(args[0], args.slice(1));
	        }
	      }
	    }, {
	      re: /^\\__q\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventChoice(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptChoice(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesChoice(args);
	        }
	      }
	    }, {
	      re: /^\\__q/,
	      match: function(group) {
	        return new SakuraScriptToken.EndChoice();
	      }
	    }, {
	      re: /^\\q(\d*)\[((?:\\\\|\\\]|[^\]])+)\]\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.OldReferenceChoice(group[3], group[2], group[1]);
	      }
	    }, {
	      re: /^\\_a\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (/^On/.test(args[0])) {
	          return new SakuraScriptToken.BeginEventAnchor(args[0], args.slice(1));
	        } else if (/^script:/.test(args[0])) {
	          return new SakuraScriptToken.BeginScriptAnchor(args[0].replace(/^script:/, ''));
	        } else {
	          return new SakuraScriptToken.BeginReferencesAnchor(args);
	        }
	      }
	    }, {
	      re: /^\\_a/,
	      match: function(group) {
	        return new SakuraScriptToken.EndAnchor();
	      }
	    }, {
	      re: /^\\n\[half\]/,
	      match: function(group) {
	        return new SakuraScriptToken.HalfLineBreak();
	      }
	    }, {
	      re: /^\\n\[(\d+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.PercentLineBreak(Number(group[1]));
	      }
	    }, {
	      re: /^\\n/,
	      match: function(group) {
	        return new SakuraScriptToken.LineBreak();
	      }
	    }, {
	      re: /^\\_n/,
	      match: function(group) {
	        return new SakuraScriptToken.ToggleNoAutoLineBreak();
	      }
	    }, {
	      re: /^\\_l\[([^\]]+)\]/,
	      match: function(group) {
	        var ref, x, y;
	        ref = splitargs(group[1]), x = ref[0], y = ref[1];
	        return new SakuraScriptToken.Location(x, y);
	      }
	    }, {
	      re: /^\\_b\[((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        if (args[1] === "inline") {
	          return new SakuraScriptToken.InlineImage(args[0], args.slice(2));
	        } else {
	          return new SakuraScriptToken.Image(args[0], args[1], args[2], args.slice(3));
	        }
	      }
	    }, {
	      re: /^\\f\[([^\]]+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Font(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\4/,
	      match: function(group) {
	        return new SakuraScriptToken.BeFar();
	      }
	    }, {
	      re: /^\\5/,
	      match: function(group) {
	        return new SakuraScriptToken.BeNear();
	      }
	    }, {
	      re: /^\\c/,
	      match: function(group) {
	        return new SakuraScriptToken.Clear();
	      }
	    }, {
	      re: /^\\e/,
	      match: function(group) {
	        return new SakuraScriptToken.End();
	      }
	    }, {
	      re: /^\\z/,
	      match: function(group) {
	        return new SakuraScriptToken.OldChoiceEnd();
	      }
	    }, {
	      re: /^\\-/,
	      match: function(group) {
	        return new SakuraScriptToken.Halt();
	      }
	    }, {
	      re: /^\\\\/,
	      match: function(group) {
	        return new SakuraScriptToken.EscapeChar();
	      }
	    }, {
	      re: /^\\!\[anim,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Animation(args[0], args[1], args.slice(2));
	      }
	    }, {
	      re: /^\\!\[bind,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Bind(args[0], args[1], args[2]);
	      }
	    }, {
	      re: /^\\!\[moveasync,cancel\]/,
	      match: function(group) {
	        return new SakuraScriptToken.MoveAsyncCancel();
	      }
	    }, {
	      re: /^\\!\[move(async)?,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args, use_class;
	        use_class = group[1] ? SakuraScriptToken.MoveAsync : SakuraScriptToken.Move;
	        args = splitargs(group[2]);
	        return new use_class(args[0], args[1], args[2], args[3], args[4], args[5]);
	      }
	    }, {
	      re: /^\\!\[lock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.LockRepaint();
	      }
	    }, {
	      re: /^\\!\[unlock,repaint\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UnlockRepaint();
	      }
	    }, {
	      re: /^\\!\[set,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Set(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[open,((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Open(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\__c/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenCommunicateBox();
	      }
	    }, {
	      re: /^\\__t/,
	      match: function(group) {
	        return new SakuraScriptToken.OpenTeachBox();
	      }
	    }, {
	      re: /^\\!\[\s*raise\s*,\s*((?:\\\\|\\\]|[^\]])+)\]/,
	      match: function(group) {
	        var args;
	        args = splitargs(group[1]);
	        return new SakuraScriptToken.Raise(args[0], args.slice(1));
	      }
	    }, {
	      re: /^\\!\[\*\]/,
	      match: function(group) {
	        return new SakuraScriptToken.Marker();
	      }
	    }, {
	      re: /^\\_u\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.UCSChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\_m\[([A-Fa-fXx0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.AsciiChar(Number(group[1]));
	      }
	    }, {
	      re: /^\\&\[([A-Za-z0-9]+)\]/,
	      match: function(group) {
	        return new SakuraScriptToken.EntityChar(group[1]);
	      }
	    }, {
	      re: /^\\[C67+v8]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[+V]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\[8j]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\_[!?v]\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^\\!\[.*?\]/,
	      match: function(group) {
	        return new SakuraScriptToken.NotImplemented(group[0]);
	      }
	    }, {
	      re: /^./,
	      match: function(group) {
	        return new SakuraScriptToken.Char(group[0]);
	      }
	    }
	  ];
	
	  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
	    module.exports = {
	      SakuraScript: SakuraScript,
	      SakuraScriptToken: SakuraScriptToken
	    };
	  } else {
	    this.SakuraScript = SakuraScript;
	    this.SakuraScriptToken = SakuraScriptToken;
	  }
	
	}).call(this);
	
	//# sourceMappingURL=sakurascript.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(113)(module)))

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=sakurascript-executer.js.map