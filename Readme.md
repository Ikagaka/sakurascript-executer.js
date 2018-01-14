# [sakurascript-executer](https://github.com/Ikagaka/sakurascript-executer.js)

[![npm](https://img.shields.io/npm/v/sakurascript-executer.svg)](https://www.npmjs.com/package/sakurascript-executer)
[![npm license](https://img.shields.io/npm/l/sakurascript-executer.svg)](https://www.npmjs.com/package/sakurascript-executer)
[![npm download total](https://img.shields.io/npm/dt/sakurascript-executer.svg)](https://www.npmjs.com/package/sakurascript-executer)
[![npm download by month](https://img.shields.io/npm/dm/sakurascript-executer.svg)](https://www.npmjs.com/package/sakurascript-executer)

[![Dependency Status](https://david-dm.org/Ikagaka/sakurascript-executer.js/status.svg)](https://david-dm.org/Ikagaka/sakurascript-executer.js)
[![devDependency Status](https://david-dm.org/Ikagaka/sakurascript-executer.js/dev-status.svg)](https://david-dm.org/Ikagaka/sakurascript-executer.js?type=dev)
[![Travis Build Status](https://travis-ci.org/Ikagaka/sakurascript-executer.js.svg?branch=master)](https://travis-ci.org/Ikagaka/sakurascript-executer.js)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Ikagaka/sakurascript-executer.js?svg=true&branch=master)](https://ci.appveyor.com/project/Narazaka/sakurascript-executer-js)
[![codecov.io](https://codecov.io/github/Ikagaka/sakurascript-executer.js/coverage.svg?branch=master)](https://codecov.io/github/Ikagaka/sakurascript-executer.js?branch=master)
[![Code Climate](https://codeclimate.com/github/Ikagaka/sakurascript-executer.js/badges/gpa.svg)](https://codeclimate.com/github/Ikagaka/sakurascript-executer.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b9230230c79d419595d927e8cb55ae9b)](https://www.codacy.com/app/narazaka/sakurascript-executer-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Ikagaka/sakurascript-executer.js&amp;utm_campaign=Badge_Grade)
[![Greenkeeper badge](https://badges.greenkeeper.io/Ikagaka/sakurascript-executer.js.svg)](https://greenkeeper.io/)

さくらスクリプト実行機(イベントエミッタ)

さくらスクリプトの待ち時間を適切に管理し、トークンごとにイベントを発行します。

## Install

npm:
```
npm install sakurascript-executer
```

bower:
```
bower install sakurascript-executer
```

## Usage

node.js(ES2015):
```javascript
import {SakuraScriptExecuter} from 'sakurascript-executer';
import {SakuraScriptToken} from 'sakurascript';
const sakurascript_executer = new SakuraScriptExecuter({talk_wait: 100});
sakurascript_executer.on('execute', (token) => {
  if (token instanceof SakuraScriptToken.Char) process.stdout.write(token.char);
});
sakurascript_executer.execute("\\h\\s[0]\\u\\s[10]Hello world!\\e");
```

node.js(ES5):
```javascript
var sakuraScriptExecuter = require('sakurascript-executer');
var SakuraScriptExecuter = sakuraScriptExecuter.SakuraScriptExecuter;
var SakuraScriptToken = require('sakurascript').SakuraScriptToken;
var sakurascript_executer = new SakuraScriptExecuter({talk_wait: 100});
sakurascript_executer.on('execute', function(token) {
  if (token instanceof SakuraScriptToken.Char) process.stdout.write(token.char);
});
sakurascript_executer.execute("\\h\\s[0]\\u\\s[10]Hello world!\\e");
```

browser:
```html
<script src="sakurascript-executer.js"></script>
var SakuraScriptExecuter = sakuraScriptExecuter.SakuraScriptExecuter;
```

## API

[API Document](https://ikagaka.github.io/sakurascript-executer.js/)

## License

This is released under [MIT License](https://narazaka.net/license/MIT?2016).
