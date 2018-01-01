/// <reference types="node" />
import {EventEmitter} from "events";
import {SakuraScript, SakuraScriptToken} from "sakurascript";

/**
 * SakuraScript Executer
 */
export class SakuraScriptExecuter extends EventEmitter {
  private _quick: boolean;
  private _talkWait: number;
  private _executing: boolean;
  private _executeId: number;
  private _willAbortId: number;
  private _waitUntilActionId: "_balloonClicked" | number | null;
  private _waitPeriod: number | null;
  private _executeStartTime: Date;
  private _quickSection: boolean;
  private _currentWait: (() => void) | null;
  private _balloonClicked: (() => void) | null;
  private _animationFinished: {[id: string]: (() => void) | null};

  /**
   * constructor
   * @param options options
   * @param quick quick section flag
   * @param talkWait talk wait
   */
  constructor(options: {quick?: boolean, talkWait?: number} = {}) {
    super();
    this._quick = options.quick || false;
    this._talkWait = options.talkWait || 0;
    this._executing = false;
    this._executeId = 0; // TODO: 永遠に動かし続けることはできない もっといい手がないか
    this._willAbortId = 0;
    this._animationFinished = {};
  }

  /**
   * quick mode
   */
  get quick() { return this._quick; }

  /**
   * quick mode
   */
  set quick(value) { this._quick = value; }

  /**
   * default talk wait
   */
  get talkWait() { return this._talkWait; }

  /**
   * default talk wait
   */
  set talkWait(value) { this._talkWait = value; }

  /**
   * true if executing
   */
  get executing() { return this._executing; }

  on(event: "beginExecute", listener: () => void): this;
  on(event: "execute", listener: (token: SakuraScriptToken) => void): this;
  on(event: "endExecute", listener: (aborted: boolean) => void): this;
  on(event: string, listener: Function) {
    return super.on(event, listener);
  }

  emit(event: "beginExecute"): boolean;
  emit(event: "execute", token: SakuraScriptToken): boolean;
  emit(event: "endExecute", aborted: boolean): boolean;
  emit(event: string, ...args: any[]) {
    return super.emit(event, ...args);
  }

  /**
   * execute sakura script
   * @param script sakura script
   * @emits {beginExecute()} sakurascript execute begin event
   * @emits {execute(token)} sakurascript execute token event
   * @emits {endExecute(aborted)} sakurascript execute end event
   */
  async execute(script: string) {
    this.abortExecute(); // abort previous session
    const executeId = ++this._executeId;
    const sakuraScript = SakuraScript.parse(script);
    this.emit("beginExecute");
    this._initializeExecuteState();
    for (const token of sakuraScript.tokens) {
      if (this._waitUntilActionId) {
        await this._waitUntilAction(this._waitUntilActionId);
        this._waitUntilActionId = null;
      } else if (!this.quick) {
        if (this._waitPeriod != null) {
          await this._wait(this._waitPeriod);
          this._waitPeriod = null;
        } else if (token instanceof SakuraScriptToken.Char && !this._quickSection) {
          await this._wait(this.talkWait);
        }
      }
      if (this._willAbortId >= executeId) break;
      this.emit("execute", token);
      if (token instanceof SakuraScriptToken.Char) {
        continue;
      } else if (token instanceof SakuraScriptToken.PlayAnimationWait) {
        this._waitUntilActionId = token.animation;
      } else if (token instanceof SakuraScriptToken.WaitAnimationEnd) {
        this._waitUntilActionId = token.id;
      } else if (token instanceof SakuraScriptToken.WaitFromBeginning) {
        const period = new Date().getTime() - this._executeStartTime.getTime();
        if (period > 0) this._waitPeriod = period;
      } else if (token instanceof SakuraScriptToken.ResetBeginning) {
        this._executeStartTime = new Date();
      } else if (token instanceof SakuraScriptToken.WaitClick) {
        this._executeStartTime = new Date();
        this._waitUntilActionId = "_balloonClicked";
      } else if (token instanceof SakuraScriptToken.SimpleWait) {
        this._waitPeriod = token.period * 50;
      } else if (token instanceof SakuraScriptToken.PreciseWait) {
        this._waitPeriod = token.period;
      } else if (token instanceof SakuraScriptToken.ToggleQuick) {
        this._quickSection = !this._quickSection;
      }
    }
    this._finalizeExecuteState();
    this.emit("endExecute", this._willAbortId >= executeId);
  }

  /**
   * call when balloon clicked
   */
  balloonClicked() {
    if (this._balloonClicked) this._balloonClicked();
  }

  /**
   * call when animation finished
   * @param animationId animation id
   */
  animationFinished(animationId: number) {
    const done = this._animationFinished[animationId];
    if (done) done();
  }

  /**
   * call when you want to abort
   */
  abortExecute() {
    this._willAbortId = this._executeId;
    if (this._currentWait) this._currentWait();
  }

  private _initializeExecuteState() {
    this._executing = true;
    this._waitPeriod = 0;
    this._waitUntilActionId = null;
    this._quickSection = false;
    this._currentWait = null;
    this._executeStartTime = new Date();
  }

  private _finalizeExecuteState() {
    this._executing = false;
  }

  private async _wait(period: number) {
    await new Promise((resolve) => {
      this._currentWait = resolve;
      setTimeout(() => resolve(period), period);
    }).then(() => {
      this._currentWait = null;
    });
  }

  private async _waitUntilAction(_waitUntilActionId: "_balloonClicked" | number) {
    await new Promise((resolve) => {
      this._currentWait = resolve;
      if (_waitUntilActionId === "_balloonClicked") {
        this._balloonClicked = resolve;
      } else {
        this._animationFinished[_waitUntilActionId] = resolve;
      }
    }).then(() => {
      this._currentWait = null;
      if (_waitUntilActionId === "_balloonClicked") {
        this._balloonClicked = null;
      } else {
        this._animationFinished[_waitUntilActionId] = null;
      }
    });
  }
}
