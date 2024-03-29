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

var FlexibleImageComponent = function (_Component) {
	_inherits(FlexibleImageComponent, _Component);

	function FlexibleImageComponent() {
		_classCallCheck(this, FlexibleImageComponent);

		return _possibleConstructorReturn(this, (FlexibleImageComponent.__proto__ || Object.getPrototypeOf(FlexibleImageComponent)).apply(this, arguments));
	}

	_createClass(FlexibleImageComponent, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var content = this.props.content;
			var _content$fields = content.fields,
			    description = _content$fields.description,
			    file = _content$fields.file;

			return _react2.default.createElement(
				"div",
				{ ref: function ref(el) {
						return _this2.wrapper = el;
					}, className: "post__media post__media--image" },
				_react2.default.createElement(
					"div",
					{ className: "post__media__image" },
					_react2.default.createElement("img", { src: file.url })
				),
				description && _react2.default.createElement(
					"div",
					{ className: "post__media__caption" },
					description
				)
			);
		}
	}]);

	return FlexibleImageComponent;
}(_react.Component);

exports.default = FlexibleImageComponent;