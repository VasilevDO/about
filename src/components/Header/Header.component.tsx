import React from 'react';

import './Header.scss';

const HeaderComponent = () => {
	const title = 'pwnzf/bio';
	return (
		<div className="header">
			<span>{title}</span>
		</div>
	);
};

export default HeaderComponent;
