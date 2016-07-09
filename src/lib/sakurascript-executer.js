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
    /** @type {Object} surface mapping */
    this.surface_mapping = options.surface_mapping || {};
    /** @type {number} talk default wait */
    this.talk_wait = options.talk_wait || 0;
    /** @type {Boolean} quick mode */
    this.quick = options.quick || false;
  }

  /**
   * execute sakura script
   * @param {string} script sakura script
   * @emits {sakurascript} sakura script token event
   * @return {void}
   */
  async execute(script) {
    const sakurascript = SakuraScript.parse(script);
    this._initialize_execute_state();
    for (const token of sakurascript.tokens) {
      if (this.wait_until_action) {
        await this._wait_until_action(this.wait_until_action);
        this.wait_until_action = null;
      } else if (!this.quick) {
        if (this.wait != null) {
          await this._wait(this.wait);
          this.wait = null;
        } else if (token instanceof Char && !this.quick_section) {
          await this._wait(this.talk_wait);
        }
      }
      if (this.will_abort) break;
      this.emit('sakurascript', token);
      if (token instanceof SakuraScriptToken.Char) {
        continue;
      } else if (token instanceof SakuraScriptToken.Surface) {
        this.surface_id = token.surface;
      } else if (token instanceof SakuraScriptToken.SurfaceAlias) {
        const surface_id = this.surface_mapping[token.surface_alias];
        if (surface_id) this.surface_id = surface_id;
      } else if (token instanceof SakuraScriptToken.PlayAnimationWait) {
        this.wait_until_action = `_animation_finished_${this.surface_id}_${token.animation}`;
      } else if (token instanceof SakuraScriptToken.WaitAnimationEnd) {
        this.wait_until_action = `_animation_finished_${this.surface_id}_${token.id}`;
      } else if (token instanceof SakuraScriptToken.WaitFromBeginning) {
        const period = new Date() - this.execute_start_time;
        if (period > 0) this.wait = period;
      } else if (token instanceof SakuraScriptToken.ResetBeginning) {
        this.execute_start_time = new Date();
      } else if (token instanceof SakuraScriptToken.WaitClick) {
        this.execute_start_time = new Date();
        this.wait_until_action = '_balloon_clicked';
      } else if (token instanceof SakuraScriptToken.SimpleWait) {
        this.wait = token.period * 50;
      } else if (token instanceof SakuraScriptToken.PreciseWait) {
        this.wait = token.period;
      } else if (token instanceof SakuraScriptToken.ToggleQuick) {
        this.quick_section = !this.quick_section;
      }
    }
    this._finalize_execute_state();
  }

  _initialize_execute_state() {
    this.executing = true;
    this.wait = 0;
    this.wait_until_action = null;
    this.quick_section = false;
    this.will_abort = false;
    this.current_wait = null;
    this.execute_start_time = new Date();
  }

  _finalize_execute_state() {
    this.executing = false;
  }

  async _wait(period) {
    return new Promise((resolve) => {
      this.current_wait = resolve;
      setTimeout(() => resolve(period), period);
    }).then(() => {
      this.current_wait = null;
    });
  }

  async _wait_until_action(name) {
    return new Promise((resolve) => {
      this.current_wait = resolve;
      this[name] = resolve;
    }).then(() => {
      this.current_wait = null;
      delete this[name];
    });
  }

  /**
   * call when balloon clicked
   * @return {void}
   */
  balloon_clicked() {
    if (this._balloon_clicked) this.balloon_clicked();
  }

  /**
   * call when animation finished
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
    this.will_abort = true;
    if (this.current_wait) this.current_wait();
  }
}
