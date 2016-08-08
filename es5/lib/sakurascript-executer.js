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
     * @emits {begin_execute()} sakurascript execute begin event
     * @emits {execute(token)} sakurascript execute token event
     * @emits {end_execute(is_abort)} sakurascript execute end event
     * @return {void}
     */
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(script) {
        var sakurascript, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, token, period;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.abort_execute(); // abort previous session
                sakurascript = _sakurascript.SakuraScript.parse(script);

                this.emit('begin_execute');
                this._initialize_execute_state();
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;
                _iterator = (0, _getIterator3.default)(sakurascript.tokens);

              case 9:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 38;
                  break;
                }

                token = _step.value;

                if (!this._wait_until_action_name) {
                  _context.next = 17;
                  break;
                }

                _context.next = 14;
                return this._wait_until_action(this._wait_until_action_name);

              case 14:
                this._wait_until_action_name = null;
                _context.next = 27;
                break;

              case 17:
                if (this.quick) {
                  _context.next = 27;
                  break;
                }

                if (!(this._wait_period != null)) {
                  _context.next = 24;
                  break;
                }

                _context.next = 21;
                return this._wait(this._wait_period);

              case 21:
                this._wait_period = null;
                _context.next = 27;
                break;

              case 24:
                if (!(token instanceof _sakurascript.SakuraScriptToken.Char && !this._quick_section)) {
                  _context.next = 27;
                  break;
                }

                _context.next = 27;
                return this._wait(this.talk_wait);

              case 27:
                if (!this._will_abort) {
                  _context.next = 29;
                  break;
                }

                return _context.abrupt('break', 38);

              case 29:
                this.emit('execute', token);

                if (!(token instanceof _sakurascript.SakuraScriptToken.Char)) {
                  _context.next = 34;
                  break;
                }

                return _context.abrupt('continue', 35);

              case 34:
                if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
                  this._wait_until_action_name = '_animation_finished_' + token.animation;
                } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
                  this._wait_until_action_name = '_animation_finished_' + token.id;
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

              case 35:
                _iteratorNormalCompletion = true;
                _context.next = 9;
                break;

              case 38:
                _context.next = 44;
                break;

              case 40:
                _context.prev = 40;
                _context.t0 = _context['catch'](7);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 44:
                _context.prev = 44;
                _context.prev = 45;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 47:
                _context.prev = 47;

                if (!_didIteratorError) {
                  _context.next = 50;
                  break;
                }

                throw _iteratorError;

              case 50:
                return _context.finish(47);

              case 51:
                return _context.finish(44);

              case 52:
                this._finalize_execute_state();
                this.emit('end_execute', this._will_abort);

              case 54:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 40, 44, 52], [45,, 47, 51]]);
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
     * @param {number} animation_id animation id
     * @return {void}
     */

  }, {
    key: 'animation_finished',
    value: function animation_finished(animation_id) {
      var done = this['_animation_finished_' + animation_id];
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
  }]);
  return SakuraScriptExecuter;
}(_events.EventEmitter);
//# sourceMappingURL=sakurascript-executer.js.map
