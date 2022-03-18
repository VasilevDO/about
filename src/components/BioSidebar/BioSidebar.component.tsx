import React from 'react';

import bioImage from '../../assets/beautiful-photo.jpg';

import './BioSidebar.scss';

type BioSidebarComponentProps = {
    className:string|undefined|null;
}

const BioSidebarComponent = (props:BioSidebarComponentProps) => {
	const {className} = props;
	const componentClassName = `bio-sidebar ${className}`;

	return (
		<div className={componentClassName}>
			<img src={bioImage} className="bio-image"/>
			<p>kek</p>
		</div>
	);
};

export default BioSidebarComponent;
