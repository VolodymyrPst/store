import React from 'react';

import './error-indicator.css';
import icon from './error.png';

const ErroIndicator = () => {
	return(
		<div className="error-indicator">
			<img className="error-icon" src={icon} alt="error icon"/>
			<span className="boom">BOOM!</span>
			<span>Something gone wrong...</span>
			<span>But it's OK!</span>
		</div>
	);
};

export default ErroIndicator;