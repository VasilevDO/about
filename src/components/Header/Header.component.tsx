import React from 'react';

import './Header.scss';

const HeaderComponent = () => {
	const title = 'pwnzf/about';
	return (
		<div className="header">
			<span>{title}</span>
		</div>
	);
};

export default HeaderComponent;
