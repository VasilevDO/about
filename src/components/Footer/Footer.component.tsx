import React from 'react';
import {APP_TITLE} from '../../consts/app.const';

import './Footer.scss';

const FooterComponent = () => {
	const footerText = APP_TITLE;
	const date = new Date().getFullYear();
	return (
		<div className="footer">
			<span>{footerText}</span>
			<span>{date}</span>
		</div>
	);
};

export default FooterComponent;
