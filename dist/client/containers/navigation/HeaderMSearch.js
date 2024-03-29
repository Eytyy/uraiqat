'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var actions = _interopRequireWildcard(_actions);

var _helpers = require('../../helpers');

var _HeaderPatternChunk = require('./HeaderPatternChunk');

var _HeaderPatternChunk2 = _interopRequireDefault(_HeaderPatternChunk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderMSearch = function (_Component) {
	_inherits(HeaderMSearch, _Component);

	function HeaderMSearch() {
		_classCallCheck(this, HeaderMSearch);

		var _this = _possibleConstructorReturn(this, (HeaderMSearch.__proto__ || Object.getPrototypeOf(HeaderMSearch)).call(this));

		_this.state = {
			searchIsVisible: false
		};
		_this.onSearchClick = _this.onSearchClick.bind(_this);
		_this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
		_this.clearSearch = _this.clearSearch.bind(_this);
		return _this;
	}

	_createClass(HeaderMSearch, [{
		key: 'clearSearch',
		value: function clearSearch() {
			if (this.search) {
				this.search.value = '';
			}
		}
	}, {
		key: 'onSearchClick',
		value: function onSearchClick() {
			this.setState({
				searchIsVisible: !this.state.searchIsVisible
			});
		}
	}, {
		key: 'onSearchSubmit',
		value: function onSearchSubmit(event) {
			var fetchSearchResults = this.props.fetchSearchResults;

			var keyword = new FormData(event.target).get('keyword');
			fetchSearchResults(keyword);
			event.preventDefault();
			this.props.history.push('/search?keyword=' + keyword);
			this.clearSearch();
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var config = {
				name: 'Search',
				glyph: { className: 'ind', content: ':' },
				searchInputSize: 19,
				spacesAfter: 4
			};
			var font = (0, _helpers.getFontValues)();
			var formStyle = {
				width: config.searchInputSize * font.characterWidth + 'px'
			};
			var reservedInputSpace = config.name.length + config.searchInputSize + config.spacesAfter;
			var reservedInactiveSpace = config.name.length + config.spacesAfter;
			return _react2.default.createElement(
				'div',
				{ className: 'search ' + (this.state.searchIsVisible ? 'is-visible' : 'is-hidden') + ' header-mobile__search' },
				_react2.default.createElement(
					'span',
					{ className: 'search-link link', onClick: this.onSearchClick },
					config.name
				),
				this.state.searchIsVisible ? _react2.default.createElement(
					'span',
					{ className: 'link' },
					config.glyph.content
				) : ' ',
				_react2.default.createElement(
					'span',
					{ className: 'ws' },
					'-'
				),
				this.state.searchIsVisible ? _react2.default.createElement(
					'form',
					{ onSubmit: this.onSearchSubmit, className: 'search' },
					_react2.default.createElement('input', { style: formStyle, autoComplete: 'off',
						name: 'keyword',
						className: 'search__input', type: 'text',
						placeholder: 'Enter keyword'
					}),
					_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: reservedInputSpace }),
					_react2.default.createElement(
						'span',
						{ className: 'link', onClick: this.onSearchClick },
						'x'
					)
				) : _react2.default.createElement(
					'span',
					{ className: 'header-mobile__search__glyphs' },
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(
						'span',
						{ className: 'ws' },
						'-'
					),
					_react2.default.createElement(_HeaderPatternChunk2.default, { reserved: reservedInactiveSpace })
				)
			);
		}
	}]);

	return HeaderMSearch;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(null, actions)(HeaderMSearch));