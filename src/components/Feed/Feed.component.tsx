import React from 'react';
import ListComponent from '../List/List.component';

import PublicationComponent from '../Publication/Publication.component';
import {LINKS_GITHUB_CHAT, LINKS_GITHUB_FULLSTACK, LINKS_GITHUB_POKEDEX_PAGE, MY_CURRENT_LOCATION, MY_DATE_OF_BIRTH, MY_EDUCATION_DEPARTMENT, MY_EDUCATION_FACULTY, MY_EDUCATION_GRADES, MY_EDUCATION_UNIVERSITY, MY_INTERESTS, MY_LANGUAGES, MY_WORK_EXPERIENCE, SKILLS_HARD, SKILLS_SOFT} from '../../consts/app.const';
import Publication from '../../models/Publication.model';

import './Feed.scss';

type FeedComponentProps={
    className?:string;
}

const FeedComponent = (props:FeedComponentProps) => {
	const {className} = props;

	const componentClassName = `feed${className ? ' ' + className : ''}`;

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

	const additionaTitle = 'Also';
	const additionalText = `I have some experience working with sockets (socket.io), bootstrap and materialize, 
    unix systems and deploying web applications on a remote server, Adobe Photoshop and other graphical tools.`;
	const additionalInfo = new Publication(additionaTitle, additionalText);

	const projectsTitle = 'Projects';
	const pokedexProjectComponent = <p><a href={LINKS_GITHUB_POKEDEX_PAGE} target="_blank" rel="noreferrer">Pokedex</a> - frontend project where u can browse and catch pokemons.
	Built with React and custom Webpack configuration (no react-scripts).</p>;
	const chatProjectComponent = <p><a href={LINKS_GITHUB_CHAT} target="_blank" rel="noreferrer">Chat</a> - fullstack (React + Express) chat demo based on WebSocket (socket.io).</p>;
	const fullstackProjectComponent = <p><a href={LINKS_GITHUB_FULLSTACK} target="_blank" rel="noreffer noreferrer">Fullstack</a> - fullstack (MongoDB, Express, React and Node.js) organizer.
	Login server, calculator, weather table, currency table, todo list, blog and little games (tictactoe, sudoku). Currently dead because I cant get access to my MongoDB account.
	</p>;
	const projectsContent = [pokedexProjectComponent, chatProjectComponent, fullstackProjectComponent];

	const projectInfo = new Publication(projectsTitle, projectsContent);

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

	const languagesTitle = 'Languages';
	const languages = MY_LANGUAGES.map(u => `${u.language} - ${u.level}`);
	const languagesInfo = new Publication(languagesTitle, languages);

	const otherTitle = 'Other';
	const otherText = [
		`Date of birth: ${MY_DATE_OF_BIRTH}`, `Current location: ${MY_CURRENT_LOCATION}`,
	];

	const otherInfo = new Publication(otherTitle, otherText);

	const publications = [educationInfo, languagesInfo, workExperienceInfo, otherInfo];

	return (
		<div className={componentClassName}>
			<div className="lists">
				{lists.map(u => <ListComponent key={u.title} title={u.title} options={u.options}/>)}
				<PublicationComponent title={additionalInfo.title} text={additionalInfo.text}/>
				<PublicationComponent title={projectInfo.title} text={projectInfo.text}/>
			</div>
			{publications.map(u => <PublicationComponent key={u.title} title={u.title} text={u.text}/>)}
		</div>

	);
};

export default FeedComponent;
