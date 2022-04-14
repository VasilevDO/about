import React from 'react';

class Publication {
	title:string;
	text:string|string[]|React.ReactNode;
	date:Date;
	id:number;

	static count = 0;

	constructor(title:string, text:string|string[]|React.ReactNode) {
		this.title = title;
		this.text = text;
		this.date = new Date();
		this.id = ++Publication.count;
	}
}

export default Publication;
