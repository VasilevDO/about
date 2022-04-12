import React from 'react';
import {APP_TITLE} from '../../consts/app.const';

import './Footer.scss';

const FooterComponent = () => {
	const footerText = APP_TITLE;
	const date = new Date().getFullYear();
	return (
		<footer className="footer">
			<span>{footerText}</span>
			<span>{date}</span>
		</footer>
	);
};

export default FooterComponent;
