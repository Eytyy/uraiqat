import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import { fetchProject } from '../actions';
import { getProject, isProjectFetching } from '../reducers';

import CommaSeparatedList from '../components/CommaSpearatedList';
import BodyText from '../components/BodyText';

import Slider from './Slider';
import RelatedPosts from '../components/related/RelatedPosts';

import LoadingPattern from '../components/patterns/LoadingPattern';

class Project extends Component { //eslint-disable-line
	constructor() {
		super();
		this.state = {
			isAboutVisible: false,
			shouldAboutRetract: true,
		};
		this.toggleAbout = this.toggleAbout.bind(this);
	}
	static fetchData(store, id) {
		return store.dispatch(fetchProject(id));
	}
	componentDidMount() {
		const { content, isFetching } = this.props;
		if (!isFetching && typeof content.id === 'undefined') {
			this.fetchData();
		}
		const shouldAboutRetract = document.querySelectorAll('.project__about .field-body p').length > 1 ? true : false;
		this.setState({
			shouldAboutRetract
		});
	}
	toggleAbout() {
		this.setState({
			isAboutVisible: !this.state.isAboutVisible
		});
	}

	fetchData() {
		const { fetchProject, match } = this.props;
		const id = match.params.id;
		fetchProject(id);
	}
	render() {
		const { content, isFetching, match } = this.props;
		if (isFetching || typeof content.id === 'undefined') {
			return <div className="loader"><LoadingPattern /></div>;
		}
		const { title, aboutTheProject, drawings, mainSlider, location, year, budget, area, status, typology } = content;
		return (
			<article className="project">
				<header>
					<h1 className="main-title">{title}</h1>
				</header>
				<div className="project__top">
					<div className="project__media">
						<Slider sliderName="project-main-slider" classList="slider--main" sliderId={`${content.id}m`} imagesQuery={'?fl=progressive&w=826'} content={mainSlider} />
					</div> 
					<div className="project__meta">
						{ typology && <div className="project__meta__item typology">
							<CommaSeparatedList classList="" content={typology} />
						</div> }
						{ location && <div className="project__meta__item">
							<span className="label">Location: </span>{location}
						</div>}
						{ year && <div className="project__meta__item">
							<span className="label">Year: </span>{year}
						</div>}
						{ area && <div className="project__meta__item">
							<span className="label">Area: </span>{area}
						</div>}
						{ budget && <div className="project__meta__item">
							<span className="label">Budget: </span>{budget}
						</div>}
						{ status && <div className="project__meta__item">
							<span className="label">Status: </span>{status}
						</div>}
					</div>
				</div>
				<div className="project__bottom">
					<div className={`project__about ${this.state.isAboutVisible ? 'js-isExpanded' : ''}`}>
						<BodyText content={aboutTheProject} />
						{this.state.shouldAboutRetract && <span className="toggle-project-about" onClick={this.toggleAbout}>
							{ this.state.isAboutVisible ? '- read less' : '+ read more' }
						</span>}
					</div>
					<div className="project__drawings">
						<Slider sliderName="project-drawings-slider" sliderId={`${content.id}d`} classList="slider--small" imagesQuery={'?fl=progressive&w=668'} content={drawings} />
					</div>
				</div>
				<aside className="related-content project__related">
					<RelatedPosts id={match.params.id} />
				</aside>
			</article>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { match } = ownProps;
	const id = match.params.id;
	return {
		content: getProject(state, id),
		isFetching: isProjectFetching(state),
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchProject }, dispatch);

Project.propTypes = {
	content: PropTypes.shape({
		id: PropTypes.string,
	}),
	isFetching: PropTypes.bool.isRequired,
	fetchProject: PropTypes.func.isRequired,
};

Project.defaultProps = {
	content: {},
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Project));