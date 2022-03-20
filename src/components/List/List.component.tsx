import React from 'react';

import './List.scss';

type ListComponentProps={
    className?:string|null|undefined;
    title:string;
    options:string[];
}

const ListComponent = (props:ListComponentProps) => {
	const {className, title, options} = props;

	const componentClassName = `list${className ? ' ' + className : ''}`;
	return (
		<div className={componentClassName}>
			<h3 className="title">{title}</h3>
			<ul >
				{options.map(u =>
					<li key={u} className="option">{u}</li>,
				)}

			</ul>
		</div>

	);
};

export default ListComponent;
