"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
	_inherits(Filter, _Component);

	function Filter() {
		_classCallCheck(this, Filter);

		var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

		_this.state = {
			active: false
		};
		_this.onFilterClick = _this.onFilterClick.bind(_this);
		return _this;
	}

	_createClass(Filter, [{
		key: "onFilterClick",
		value: function onFilterClick() {
			this.setState({
				active: !this.state.active
			});
		}
	}, {
		key: "render",
		value: function render() {
			var content = this.props.content;

			return _react2.default.createElement(
				"span",
				{ onClick: this.onFilterClick, className: "filter link" },
				this.state.active ? _react2.default.createElement(
					"span",
					{ "class": "filterBox" },
					"[",
					_react2.default.createElement(
						"span",
						{ className: "filterBox__state" },
						"x"
					),
					"]"
				) : _react2.default.createElement(
					"span",
					{ "class": "filterBox" },
					"[",
					_react2.default.createElement(
						"span",
						{ className: "filterBox__state" },
						" "
					),
					"]"
				),
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				),
				_react2.default.createElement(
					"span",
					null,
					content
				),
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				),
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				),
				_react2.default.createElement(
					"span",
					{ className: "ws" },
					"-"
				)
			);
		}
	}]);

	return Filter;
}(_react.Component);

exports.default = Filter;