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
    this._surface_mapping = options.surface_mapping || {};
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
   * surface mapping
   * @type {Object}
   */
  get surface_mapping() { return this._surface_mapping; }

  /**
   * execute sakura script
   * @param {string} script sakura script
   * @emits {execute} sakurascript token event
   * @return {void}
   */
  async execute(script) {
    const sakurascript = SakuraScript.parse(script);
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
      if (this._will_abort) break;
      this.emit('execute', token);
      if (token instanceof SakuraScriptToken.Char) {
        continue;
      } else if (token instanceof SakuraScriptToken.Surface) {
        this._surface_id = token.surface;
      } else if (token instanceof SakuraScriptToken.SurfaceAlias) {
        const surface_id = this.surface_mapping[token.surface_alias];
        if (surface_id) this._surface_id = surface_id;
      } else if (token instanceof SakuraScriptToken.PlayAnimationWait) {
        this._wait_until_action_name = `_animation_finished_${this._surface_id}_${token.animation}`;
      } else if (token instanceof SakuraScriptToken.WaitAnimationEnd) {
        this._wait_until_action_name = `_animation_finished_${this._surface_id}_${token.id}`;
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
  }

  _initialize_execute_state() {
    this._executing = true;
    this._wait_period = 0;
    this._wait_until_action_name = null;
    this._quick_section = false;
    this._will_abort = false;
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
   * @param {number} surface_id surface id
   * @param {number} animation_id animation id
   * @return {void}
   */
  animation_finished(surface_id, animation_id) {
    const done = this[`_animation_finished_${surface_id}_${animation_id}`];
    if (done) done();
  }

  /**
   * call when you want to abort
   * @return {void}
   */
  abort_execute() {
    this._will_abort = true;
    if (this._current_wait) this._current_wait();
  }
}
