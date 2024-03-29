import React from 'react';
import PatternLine from './PatternLine';
import { getNoOfChars, getWindowDimensions, getFontValues, getMaxWidth } from '../../helpers';

const LoadingPattern = () => {
	if (typeof window === 'undefined') {
		return <div className="pattern pattern--loading"></div>;
	}
	const windowSize = getWindowDimensions();
	let maxWidth = getMaxWidth();

	const font = getFontValues();
	const config = {
		w: maxWidth,
		h: windowSize.h - (font.characterHeight * 2),
	};
	const numberOfLines = getNoOfChars('loading', config);
	const fakeArray = Array(numberOfLines.y).fill('pl');
	
	return (
		<div className="pattern pattern--loading">
			{ fakeArray.map((item, index) => <PatternLine key={`pl-${index}`} noOfChars={numberOfLines.x} />)}
		</div>
	);
};


export default LoadingPattern;