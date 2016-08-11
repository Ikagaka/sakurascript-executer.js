import {EventEmitter} from 'events';
import {SakuraScript, SakuraScriptToken} from 'sakurascript';

/**
 * SakuraScript Executer
 */
export class SakuraScriptExecuter extends EventEmitter {
  /**
   * constructor
   * @param {object} options options
   */
  constructor(options = {}) {
    super();
    this._quick = options.quick || false;
    this._talk_wait = options.talk_wait || 0;
    this._executing = false;
    this._execute_id = 0; // TODO: 永遠に動かし続けることはできない もっといい手がないか
    this._will_abort_id = 0;
  }

  /**
   * quick mode
   * @type {Boolean}
   */
  get quick() { return this._quick; }

  /**
   * quick mode
   * @type {Boolean}
   */
  set quick(value) { this._quick = value; }

  /**
   * default talk wait
   * @type {number}
   */
  get talk_wait() { return this._talk_wait; }

  /**
   * true if executing
   * @type {Boolean}
   */
  get executing() { return this._executing; }

  /**
   * execute sakura script
   * @param {string} script sakura script
   * @emits {begin_execute()} sakurascript execute begin event
   * @emits {execute(token)} sakurascript execute token event
   * @emits {end_execute(is_abort)} sakurascript execute end event
   * @return {void}
   */
  async execute(script) {
    this.abort_execute(); // abort previous session
    const execute_id = ++this._execute_id;
    const sakurascript = SakuraScript.parse(script);
    this.emit('begin_execute');
    this._initialize_execute_state();
    for (const token of sakurascript.tokens) {
      if (this._wait_until_action_name) {
        await this._wait_until_action(this._wait_until_action_name);
        this._wait_until_action_name = null;
      } else if (!this.quick) {
        if (this._wait_period != null) {
          await this._wait(this._wait_period);
          this._wait_period = null;
        } else if (token instanceof SakuraScriptToken.Char && !this._quick_section) {
          await this._wait(this.talk_wait);
        }
      }
      if (this._will_abort_id >= execute_id) break;
      this.emit('execute', token);
      if (token instanceof SakuraScriptToken.Char) {
        continue;
      } else if (token instanceof SakuraScriptToken.PlayAnimationWait) {
        this._wait_until_action_name = `_animation_finished_${token.animation}`;
      } else if (token instanceof SakuraScriptToken.WaitAnimationEnd) {
        this._wait_until_action_name = `_animation_finished_${token.id}`;
      } else if (token instanceof SakuraScriptToken.WaitFromBeginning) {
        const period = new Date() - this._execute_start_time;
        if (period > 0) this._wait_period = period;
      } else if (token instanceof SakuraScriptToken.ResetBeginning) {
        this._execute_start_time = new Date();
      } else if (token instanceof SakuraScriptToken.WaitClick) {
        this._execute_start_time = new Date();
        this._wait_until_action_name = '_balloon_clicked';
      } else if (token instanceof SakuraScriptToken.SimpleWait) {
        this._wait_period = token.period * 50;
      } else if (token instanceof SakuraScriptToken.PreciseWait) {
        this._wait_period = token.period;
      } else if (token instanceof SakuraScriptToken.ToggleQuick) {
        this._quick_section = !this._quick_section;
      }
    }
    this._finalize_execute_state();
    this.emit('end_execute', this._will_abort_id >= execute_id);
  }

  _initialize_execute_state() {
    this._executing = true;
    this._wait_period = 0;
    this._wait_until_action_name = null;
    this._quick_section = false;
    this._current_wait = null;
    this._execute_start_time = new Date();
  }

  _finalize_execute_state() {
    this._executing = false;
  }

  async _wait(period) {
    return new Promise((resolve) => {
      this._current_wait = resolve;
      setTimeout(() => resolve(period), period);
    }).then(() => {
      this._current_wait = null;
    });
  }

  async _wait_until_action(name) {
    return new Promise((resolve) => {
      this._current_wait = resolve;
      this[name] = resolve;
    }).then(() => {
      this._current_wait = null;
      delete this[name];
    });
  }

  /**
   * call when balloon clicked
   * @return {void}
   */
  balloon_clicked() {
    if (this._balloon_clicked) this._balloon_clicked();
  }

  /**
   * call when animation finished
   * @param {number} animation_id animation id
   * @return {void}
   */
  animation_finished(animation_id) {
    const done = this[`_animation_finished_${animation_id}`];
    if (done) done();
  }

  /**
   * call when you want to abort
   * @return {void}
   */
  abort_execute() {
    this._will_abort_id = this._execute_id;
    if (this._current_wait) this._current_wait();
  }
}
