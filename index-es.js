'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
	function PraiseButton(num, ele) {
		_classCallCheck(this, PraiseButton);

		this.num = num;
		this.ele = ele;
	}

	_createClass(PraiseButton, [{
		key: 'clickButton',
		value: function clickButton() {
			var _this = this;

			this.ele.onclick = function () {
				if (_this.num > 10) {
					_this.num = 0;
					for (var i = 0; i < _this.ele.childNodes.length; i++) {
						if (!!_this.ele.children[i]) {
							_this.ele.children[i].style.backgroundColor = '#f1f1f1';
							if (_this.ele.children[i].className === 'arm') {
								_this.ele.children[i].style.borderTop = '2px solid #e4e4e4';
							} else if (_this.ele.children[i].className === 'finger') {
								_this.ele.children[i].style.border = '1px solid #e4e4e4';
								_this.ele.children[i].style.borderLeft = '0';
							}
						}
						_this.ele.style.backgroundColor = '#f1f1f1';
					}
				} else if (_this.num === 1) {
					for (var _i = 0; _i < _this.ele.childNodes.length; _i++) {
						if (!!_this.ele.children[_i]) {
							_this.ele.children[_i].style.backgroundColor = 'rgb(239,184,157)';
							if (_this.ele.children[_i].className === 'arm') {
								_this.ele.children[_i].style.borderTop = '2px solid rgb(185,122,79)';
							} else if (_this.ele.children[_i].className === 'finger') {
								_this.ele.children[_i].style.border = '1px solid rgb(185,122,79)';
								_this.ele.children[_i].style.borderLeft = '0';
							}
						}
						_this.ele.style.backgroundColor = 'rgb(239,184,157)';
					}
				}
				console.log(_this.num);
				_this.num++;
			};
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(num, ele) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, ele));
	}

	return Thumb;
}(PraiseButton);

var ele = document.getElementsByClassName('hand')[0];
console.log(ele);
var tumb = new Thumb(0, ele);
tumb.clickButton();
