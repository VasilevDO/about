import React from 'react';

import './Publication.scss';

type PublicationComponentProps={
    className?:string|null|undefined;
    title:string;
    text:string|string[]|React.ReactNode;
}

const PublicationComponent = (props:PublicationComponentProps) => {
	const {className, title, text} = props;

	const textElement = Array.isArray(text)
		? text.map((u, i) => React.isValidElement(u) ? <div key={i}>{u}</div> : <p key={i} className="text">{u}</p>)
		: React.isValidElement(text)
			? text
			: <p className="text">{text}</p>;

	const componentClassName = `publication${className ? ' ' + className : ''}`;
	return (
		<div className={componentClassName}>
			<h3 className="title">{title}</h3>
			{textElement}
		</div>
	);
};

export default PublicationComponent;
