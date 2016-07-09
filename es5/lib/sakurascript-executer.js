'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SakuraScriptExecuter = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = require('events');

var _sakurascript = require('sakurascript');

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

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SakuraScriptExecuter).call(this));

    _this._quick = options.quick || false;
    _this._talk_wait = options.talk_wait || 0;
    _this._executing = false;
    _this._surface_mapping = options.surface_mapping || {};
    return _this;
  }

  /**
   * quick mode
   * @type {Boolean}
   */


  (0, _createClass3.default)(SakuraScriptExecuter, [{
    key: 'execute',


    /**
     * execute sakura script
     * @param {string} script sakura script
     * @emits {execute} sakurascript token event
     * @return {void}
     */
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

                if (!this._wait_until_action_name) {
                  _context.next = 15;
                  break;
                }

                _context.next = 12;
                return this._wait_until_action(this._wait_until_action_name);

              case 12:
                this._wait_until_action_name = null;
                _context.next = 25;
                break;

              case 15:
                if (this.quick) {
                  _context.next = 25;
                  break;
                }

                if (!(this._wait_period != null)) {
                  _context.next = 22;
                  break;
                }

                _context.next = 19;
                return this._wait(this._wait_period);

              case 19:
                this._wait_period = null;
                _context.next = 25;
                break;

              case 22:
                if (!(token instanceof _sakurascript.SakuraScriptToken.Char && !this._quick_section)) {
                  _context.next = 25;
                  break;
                }

                _context.next = 25;
                return this._wait(this.talk_wait);

              case 25:
                if (!this._will_abort) {
                  _context.next = 27;
                  break;
                }

                return _context.abrupt('break', 36);

              case 27:
                this.emit('execute', token);

                if (!(token instanceof _sakurascript.SakuraScriptToken.Char)) {
                  _context.next = 32;
                  break;
                }

                return _context.abrupt('continue', 33);

              case 32:
                if (token instanceof _sakurascript.SakuraScriptToken.Surface) {
                  this._surface_id = token.surface;
                } else if (token instanceof _sakurascript.SakuraScriptToken.SurfaceAlias) {
                  surface_id = this.surface_mapping[token.surface_alias];

                  if (surface_id) this._surface_id = surface_id;
                } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
                  this._wait_until_action_name = '_animation_finished_' + this._surface_id + '_' + token.animation;
                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
                  this._wait_until_action_name = '_animation_finished_' + this._surface_id + '_' + token.id;
                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitFromBeginning) {
                  period = new Date() - this._execute_start_time;

                  if (period > 0) this._wait_period = period;
                } else if (token instanceof _sakurascript.SakuraScriptToken.ResetBeginning) {
                  this._execute_start_time = new Date();
                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitClick) {
                  this._execute_start_time = new Date();
                  this._wait_until_action_name = '_balloon_clicked';
                } else if (token instanceof _sakurascript.SakuraScriptToken.SimpleWait) {
                  this._wait_period = token.period * 50;
                } else if (token instanceof _sakurascript.SakuraScriptToken.PreciseWait) {
                  this._wait_period = token.period;
                } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleQuick) {
                  this._quick_section = !this._quick_section;
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
      this._executing = true;
      this._wait_period = 0;
      this._wait_until_action_name = null;
      this._quick_section = false;
      this._will_abort = false;
      this._current_wait = null;
      this._execute_start_time = new Date();
    }
  }, {
    key: '_finalize_execute_state',
    value: function _finalize_execute_state() {
      this._executing = false;
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
                  _this2._current_wait = resolve;
                  setTimeout(function () {
                    return resolve(period);
                  }, period);
                }).then(function () {
                  _this2._current_wait = null;
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
                  _this3._current_wait = resolve;
                  _this3[name] = resolve;
                }).then(function () {
                  _this3._current_wait = null;
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
      if (this._balloon_clicked) this._balloon_clicked();
    }

    /**
     * call when animation finished
     * @param {number} surface_id surface id
     * @param {number} animation_id animation id
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
      this._will_abort = true;
      if (this._current_wait) this._current_wait();
    }
  }, {
    key: 'quick',
    get: function get() {
      return this._quick;
    }

    /**
     * quick mode
     * @type {Boolean}
     */
    ,
    set: function set(value) {
      this._quick = value;
    }

    /**
     * default talk wait
     * @type {number}
     */

  }, {
    key: 'talk_wait',
    get: function get() {
      return this._talk_wait;
    }

    /**
     * true if executing
     * @type {Boolean}
     */

  }, {
    key: 'executing',
    get: function get() {
      return this._executing;
    }

    /**
     * surface mapping
     * @type {Object}
     */

  }, {
    key: 'surface_mapping',
    get: function get() {
      return this._surface_mapping;
    }
  }]);
  return SakuraScriptExecuter;
}(_events.EventEmitter);
//# sourceMappingURL=sakurascript-executer.js.map
