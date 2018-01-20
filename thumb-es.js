'use strict';

var _index = require('index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ele = document.getElementsByClassName('hand')[0];
console.log(ele);
var tumb = new _index2.default(0, ele);
tumb.clickButton();
