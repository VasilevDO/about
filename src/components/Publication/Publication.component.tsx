import React from 'react';

import './Publication.scss';

type PublicationComponentProps={
    className?:string|null|undefined;
    title:string;
    text:string|string[]|React.ReactNode;
}

const PublicationComponent = (props:PublicationComponentProps) => {
	const {className, title, text} = props;

	const textElement = React.isValidElement(text)
		? text
		: Array.isArray(text)
			? text.map((u, i) => <p key={i} className="text">{u}</p>)
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
