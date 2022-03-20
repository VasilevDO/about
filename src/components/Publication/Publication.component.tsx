import React from 'react';

import './Publication.scss';

type PublicationComponentProps={
    className?:string|null|undefined;
    title:string;
    text:string|string[];
}

const PublicationComponent = (props:PublicationComponentProps) => {
	const {className, title, text} = props;

	const componentClassName = `publication${className ? ' ' + className : ''}`;
	return (
		<div className={componentClassName}>
			<h3 className="title">{title}</h3>
			{Array.isArray(text)
				? text.map(u => <p key={u} className="text">{u}</p>)
				: <p className="text">{text}</p>
			}

		</div>
	);
};

export default PublicationComponent;
