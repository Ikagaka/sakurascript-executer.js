import {SakuraScriptExecuter} from '../src/lib/sakurascript-executer';

import assert from 'power-assert';

/** @test {SakuraScriptExecuter} */
describe('SakuraScriptExecuter', function() {
  lazy('instance', function() { return new SakuraScriptExecuter() });
  /** @test {SakuraScriptExecuter#constructor} */
  context('constructor', function() {
    it('basic', function() { assert(this.instance instanceof SakuraScriptExecuter) });
  });
});
