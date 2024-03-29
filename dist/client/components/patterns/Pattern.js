'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PatternLine = require('./PatternLine');

var _PatternLine2 = _interopRequireDefault(_PatternLine);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pattern = function Pattern(_ref) {
	var sliderName = _ref.sliderName,
	    patternconfig = _ref.patternconfig;

	if (typeof window === 'undefined') {
		return _react2.default.createElement('div', { className: 'pattern pattern--slider' });
	}
	var numberOfLines = (0, _helpers.getNoOfChars)(sliderName, patternconfig);
	var fakeArray = Array(numberOfLines.y).fill('pl');

	return _react2.default.createElement(
		'div',
		{ className: 'pattern pattern--slider' },
		fakeArray.map(function (item, index) {
			return _react2.default.createElement(_PatternLine2.default, { key: 'pl-' + index, noOfChars: numberOfLines.x });
		})
	);
};

exports.default = Pattern;