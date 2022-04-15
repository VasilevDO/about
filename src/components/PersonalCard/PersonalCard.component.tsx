import React from 'react';

import bioImage from '../../assets/my-photo.jpg';
import Publication from '../../models/Publication.model';
import PublicationComponent from '../Publication/Publication.component';

import './PersonalCard.scss';

type PersonalCardComponentProps = {
    className?:string|undefined|null;
}

const PersonalCardComponent = (props:PersonalCardComponentProps) => {
	const {className} = props;
	const componentClassName = `personal-card${className ? ' ' + className : ''}`;

	const personalTitle = 'Hello, my name is Dmitrii';
	const personalText = <p>And I like to code. After 3 years of working as production management
	engineer I realized that I want to know more about web technologies.
	Started with self-education at <a href="https://www.javascript.info">javascript.info</a> then I
	completed EPAM javascript developer (frontend focused) training program and joined EPAM node.js backend project.
	I really like to be a part of a team making something useful and cool, interact with people, learn something new and grow up
	personally.</p>;

	// Const personalText = `And I like to code. I started my journey like 2 years ago
	// when I just opened notepad and created my first HelloWorld.html file. Then
	// I realised that no magic happens without big and scary javascript. And php. Thanks god
	// that is not true btw. Step by step I was moving forward on the way to create my very
	// first web application - my organiser. It was Mongo-Express-React-Node fullstack project
	// deployed on a remote hosting that can give you an information about weather, currency
	// rates and also remind you about things that you have to do. Thats how programming
	// became my hobby. But why not to try to develop my hobby into something bigger? First of
	// all, I started to create something little web applications to organise my (and my colleagues
	// too) current work routines. Then I completed EPAM javascript developer studying program
	// and currently Im working in EPAMintern.`;

	const personalInfo = new Publication(personalTitle, personalText);

	const publications = [personalInfo];

	return (
		<div className={componentClassName}>
			<img src={bioImage} alt="me" className="card-image"/>
			<div className="card-content">
				{publications.map(u => <PublicationComponent key={u.title} title={u.title} text={u.text}/>)}
			</div>
		</div>
	);
};

export default PersonalCardComponent;
