import React from 'react';

import bioImage from '../../assets/my-photo.jpg';

import './PersonalCard.scss';

type PersonalCardComponentProps = {
    className?:string|undefined|null;
}

const PersonalCardComponent = (props:PersonalCardComponentProps) => {
	const {className} = props;
	const componentClassName = `personal-card${className ? ' ' + className : ''}`;

	const title = 'Hello, my name is Dmitrii';
	const text = `And I like to code. I started my journey like 2 years ago 
	when I just opened notepad and created my first HelloWorld.html file. Then
	I realised that no magic happens without big and scary javascript. And php. Thanks god
	that is not true btw. Step by step I was moving forward on the way to create my very
	first web application - my organiser. It was Mongo-Express-React-Node fullstack project
	deployed on a remote hosting that can give you an information about weather, currency 
	rates and also remind you about things that you have to do. Thats how programming
	became my hobby. But why not to try to develop my hobby into something bigger? First of
	all, I started to create something little web applications to organise my (and my colleagues 
	too) current work routines. Then I completed EPAM javascript developer studying program
	and currently Im working as EPAM intership student.`;

	return (
		<div className={componentClassName}>
			<img src={bioImage} className="card-image"/>
			<div className="card-content">
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default PersonalCardComponent;
