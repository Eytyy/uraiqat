'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Post = require('../home/Post');

var _Post2 = _interopRequireDefault(_Post);

var _ProjectPreview = require('../work/ProjectPreview');

var _ProjectPreview2 = _interopRequireDefault(_ProjectPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(_ref) {
	var content = _ref.content,
	    page = _ref.page;

	switch (page) {
		case 'work':
			return content.map(function (post) {
				return _react2.default.createElement(_ProjectPreview2.default, _extends({}, post, { id: post.id, key: post.id }));
			});
		default:
			return content.map(function (post) {
				return _react2.default.createElement(_Post2.default, _extends({}, post, { id: post.id, key: post.id }));
			});
	}
};

var LandingChrono = function LandingChrono(_ref2) {
	var content = _ref2.content,
	    page = _ref2.page;

	if (typeof content === 'undefined') {
		return null;
	}
	var sorted = page === 'journal' ? content.sort(function (a, b) {
		return parseInt(b.date, 10) - parseInt(a.date, 10);
	}) : content.sort(function (a, b) {
		return parseInt(b.year, 10) - parseInt(a.year, 10);
	});
	return _react2.default.createElement(
		'section',
		{ className: 'landing-section landing-section--main' },
		_react2.default.createElement(Content, { content: sorted, page: page })
	);
};

exports.default = LandingChrono;