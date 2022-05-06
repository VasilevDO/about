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
	const personalText = <div><p>And I like to code. After 3 years of working as production management
	engineer I realized that I want to know more about web technologies.
	Started with self-education at <a href="https://www.javascript.info">javascript.info</a> then I
	completed EPAM javascript developer (frontend focused) training program and joined EPAM node.js backend project.
	I really like to be a part of a team making something useful and cool, interact with people, learn something new and reach new goals<br/>
	Now I have almost 2 years of experience in developing web applications. <br/>
	My core stack: </p>
	<h4>React+Node+Express+PosgtreSQL</h4></div>;

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
