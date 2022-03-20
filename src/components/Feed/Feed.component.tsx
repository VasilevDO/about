import React from 'react';
import ListComponent from '../List/List.component';

import PublicationComponent from '../Publication/Publication.component';
import {MY_EDUCATION_DEPARTMENT, MY_EDUCATION_FACULTY, MY_EDUCATION_GRADES, MY_EDUCATION_UNIVERSITY, MY_INTERESTS, MY_WORK_EXPERIENCE, SKILLS_HARD, SKILLS_SOFT} from '../../consts/app.const';
import Publication from '../../models/Publication.model';

import './Feed.scss';

type FeedComponentProps={
    className?:string;
}

const FeedComponent = (props:FeedComponentProps) => {
	const {className} = props;

	const hardSkillsList = {
		title: 'Hard skills',
		options: SKILLS_HARD.sort((a, b) => a > b ? 1 : -1),
	};

	const softSkillsList = {
		title: 'Soft skills',
		options: SKILLS_SOFT.sort((a, b) => a > b ? 1 : -1),
	};

	const interestsList = {
		title: 'Interests',
		options: MY_INTERESTS.sort((a, b) => a > b ? 1 : -1),
	};

	const lists = [
		hardSkillsList, softSkillsList, interestsList,
	];

	const containerClassName = `feed${className ? ' ' + className : ''}`;

	const additionaTitle = 'Also';
	const additionalText = `I have some experience working with sockets (socket.io), bootstrap and materialize, 
    unix systems and deploying web applications on a remote server, Adobe Photoshop and other graphical tools.`;

	const additionalInfo = new Publication(additionaTitle, additionalText);

	const educationTitle = 'Education';

	const graduation = `Graduation: ${MY_EDUCATION_GRADES.map(u => `${u.grade} (${u.year})`).join(', ')}`;
	const department = `Department: ${MY_EDUCATION_DEPARTMENT}`;
	const faculty = `Faculty: ${MY_EDUCATION_FACULTY}`;
	const university = `University: ${MY_EDUCATION_UNIVERSITY}`;

	const educationText = [graduation, department, faculty, university];
	const educationInfo = new Publication(educationTitle, educationText);

	const workExperienceTitle = 'Work experience';
	const works = MY_WORK_EXPERIENCE.map((u, i) => `${i + 1}) ${u.copmany} as ${u.position} (${u.date})`);

	const workExperienceInfo = new Publication(workExperienceTitle, works);

	const publications = [additionalInfo, educationInfo, workExperienceInfo];

	return (
		<div className={containerClassName}>
			<div className="lists">
				{lists.map(u => <ListComponent key={u.title} title={u.title} options={u.options}/>)}
			</div>
			{publications.map(u => <PublicationComponent key={u.title} title={u.title} text={u.text}/>)}

		</div>

	);
};

export default FeedComponent;
