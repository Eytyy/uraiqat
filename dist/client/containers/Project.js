'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = require('../actions');

var _reducers = require('../reducers');

var _CommaSpearatedList = require('../components/CommaSpearatedList');

var _CommaSpearatedList2 = _interopRequireDefault(_CommaSpearatedList);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_Component) {
	_inherits(Project, _Component);

	function Project() {
		_classCallCheck(this, Project);

		return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    content = _props.content,
			    isFetching = _props.isFetching;

			if (!isFetching && typeof content.id === 'undefined') {
				this.fetchData();
			}
		}
	}, {
		key: 'fetchData',
		value: function fetchData() {
			var _props2 = this.props,
			    fetchProject = _props2.fetchProject,
			    match = _props2.match;

			var id = match.params.id;
			fetchProject(id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    content = _props3.content,
			    isFetching = _props3.isFetching;

			if (isFetching || typeof content.id === 'undefined') {
				return _react2.default.createElement(
					'div',
					null,
					'Loading post...'
				);
			}
			var projectName = content.projectName,
			    aboutTheProject = content.aboutTheProject,
			    drawings = content.drawings,
			    mainImagevideo = content.mainImagevideo,
			    location = content.location,
			    year = content.year,
			    budget = content.budget,
			    area = content.area,
			    status = content.status,
			    typology = content.typology;

			return _react2.default.createElement(
				'article',
				{ className: 'project' },
				_react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'h1',
						{ className: 'main-title' },
						projectName
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'project__top' },
					_react2.default.createElement(
						'div',
						{ className: 'project__media' },
						_react2.default.createElement(_Slider2.default, { classList: 'slider--main', imagesQuery: '?fl=progressive&w=826&h=512', content: mainImagevideo })
					),
					_react2.default.createElement(
						'div',
						{ className: 'project__meta' },
						_react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(_CommaSpearatedList2.default, { classList: '', content: typology })
						),
						location && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Location: '
							),
							location
						),
						year && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Year: '
							),
							year
						),
						area && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Area: '
							),
							area
						),
						budget && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Budget: '
							),
							budget
						),
						status && _react2.default.createElement(
							'div',
							{ className: 'project__meta__item' },
							_react2.default.createElement(
								'span',
								{ className: 'label' },
								'Status: '
							),
							status
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'project__bottom' },
					_react2.default.createElement(
						'div',
						{ className: 'project__about' },
						aboutTheProject
					),
					_react2.default.createElement(
						'div',
						{ className: 'project__drawings' },
						_react2.default.createElement(_Slider2.default, { classList: 'slider--small', imagesQuery: '?fl=progressive&w=334&h=256', content: drawings })
					)
				)
			);
		}
	}], [{
		key: 'fetchData',
		//eslint-disable-line
		value: function fetchData(store, id) {
			return store.dispatch((0, _actions.fetchProject)(id));
		}
	}]);

	return Project;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	var match = ownProps.match;

	var id = match.params.id;
	return {
		content: (0, _reducers.getProject)(state, id),
		isFetching: (0, _reducers.isProjectFetching)(state)
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({ fetchProject: _actions.fetchProject }, dispatch);
};

Project.propTypes = {
	content: _propTypes2.default.shape({
		id: _propTypes2.default.string
	}),
	isFetching: _propTypes2.default.bool.isRequired,
	fetchProject: _propTypes2.default.func.isRequired
};

Project.defaultProps = {
	content: {}
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Project));