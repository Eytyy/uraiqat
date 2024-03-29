'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternChunk = function PatternChunk(_ref) {
	var noOfGlyphs = _ref.noOfGlyphs;

	var count = 1;

	var generatePattern = function generatePattern() {
		var pattern = '';
		var glyphs = ['-', '-', '/', '\\', '-', '-', '|', '-', '>', '-', '<', '\\', '-', '|', '-', '-', '|', '-', '|', '-', '/', '-', '-', '-', '/', '-', '\\', '-'];
		for (count; count <= noOfGlyphs; count++) {
			pattern += (0, _helpers.getRandomGlyph)(glyphs);
		}
		return pattern;
	};
	return _react2.default.createElement(
		'span',
		{ className: 'glyphs-chunk' },
		generatePattern()
	);
};

var HeaderPatternChunkFixed = function HeaderPatternChunkFixed(_ref2) {
	var fixed = _ref2.fixed;
	return _react2.default.createElement(PatternChunk, { noOfGlyphs: fixed });
};

var HeaderPatternChunkReserved = function HeaderPatternChunkReserved(_ref3) {
	var reserved = _ref3.reserved;

	var maxWidth = (0, _helpers.getMaxWidth)();
	var config = {
		w: maxWidth,
		h: 1
	};

	var maxNoOfChars = (0, _helpers.getNoOfChars)('navigation', config);

	var noOfAllowedChars = maxNoOfChars.x - reserved;
	return _react2.default.createElement(PatternChunk, { noOfGlyphs: noOfAllowedChars });
};

var HeaderPatternChunk = function HeaderPatternChunk(_ref4) {
	var fixed = _ref4.fixed,
	    reserved = _ref4.reserved;

	return typeof fixed !== 'undefined' ? _react2.default.createElement(HeaderPatternChunkFixed, { fixed: fixed }) : _react2.default.createElement(HeaderPatternChunkReserved, { reserved: reserved });
};

exports.default = HeaderPatternChunk;