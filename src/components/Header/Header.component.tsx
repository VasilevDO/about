import React from 'react';

import './Header.scss';

const HeaderComponent = () => {
	const title = 'pwnzf/about';
	return (
		<header className="header">
			<span>{title}</span>
		</header>
	);
};

export default HeaderComponent;
