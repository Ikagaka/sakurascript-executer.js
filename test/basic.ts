/// <reference types="mocha" />
import * as assert from "power-assert";
import {SakuraScriptExecuter} from "../src/lib/sakurascript-executer";

describe("SakuraScriptExecuter", () => {
  describe("constructor", () => {
    it("basic", () => {
      assert(new SakuraScriptExecuter() instanceof SakuraScriptExecuter);
    });
  });
});
