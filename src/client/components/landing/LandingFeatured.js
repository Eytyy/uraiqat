import React from 'react';
import Post from '../home/Post';
import ProjectPreview from '../work/ProjectPreview';

const Content = ({ content, page }) => {
	switch(page) {
	case 'work':
		return content.map((post) => <ProjectPreview {...post} id={post.id} key={post.id} />);
	default:
		return content.map((post) => <Post {...post} id={post.id} key={post.id} />);
	}
};

const LandingFeatured = ({ content, page }) => {
	if (typeof content === 'undefined') {
		return null;
	}
	return (
		<section className="landing-section landing-section--featured">
			<Content content={content} page={page} />
		</section>
	);
};

export default LandingFeatured;