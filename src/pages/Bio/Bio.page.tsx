import React from 'react';
import FeedComponent from '../../components/Feed/Feed.component';

import InfoCardComponent from '../../components/InfoCard/InfoCard.component';
import PersonalCardComponent from '../../components/PersonalCard/PersonalCard.component';

import './Bio.scss';

const BioPage = () => {
	const kek = 'w';
	return (
		<div className="bio-page">
			<InfoCardComponent/>
			<PersonalCardComponent/>
			<FeedComponent className="main"/>
		</div>
	);
};

export default BioPage;
