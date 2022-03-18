import React from 'react';
import PublicationComponent from '../../components/Publication/Publication.component';

type FeedContainerProps={
    className?:string;
}

const FeedContainer = (props:FeedContainerProps) => {
	class Publication {
		title:string;
		text:string;
		date:Date;
		id:number;

		static count = 0;

		constructor(title:string, text:string) {
			this.title = title;
			this.text = text;
			this.date = new Date();
			this.id = ++Publication.count;
		}
	}

	const feed = [
		new Publication('kek', 'wait'),
		new Publication('lul', 'c'),
	];

	const {className} = props;

	const containerClassName = `feed ${className ? className : ''}`;

	return (
		<div className={containerClassName}>
			{feed.map((u:Publication) => (<PublicationComponent key={u.id} title={u.title} text={u.text}/>))}
		</div>

	);
};

export default FeedContainer;
