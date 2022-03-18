import React from 'react';

import BioSidebarComponent from '../../components/BioSidebar/BioSidebar.component';
import FeedContainer from '../../containers/Feed/Feed.container';

import './Bio.scss';

const BioPage = () => {
	const kek = 'w';
	return (
		<div className="bio-page">
			<FeedContainer className="main"/>
			<BioSidebarComponent className="sidebar"/>
		</div>
	);
};

export default BioPage;
