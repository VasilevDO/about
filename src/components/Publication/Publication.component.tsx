import React from 'react';

import './Publication.scss';

type PublicationProps={
    className?:string|null|undefined;
    title:string;
    text:string;
}

const PublicationComponent = (props:PublicationProps) => {
	const {className, title, text} = props;

	const componentClassName = `publication${className ? ' ' + className : ''}`;
	return (
		<div className={componentClassName}>
			<span className="title">{title}</span>
			<hr/>
			<p className="text">{text}</p>
		</div>
	);
};

export default PublicationComponent;
