import BeautifulDate from '../models/BeautifulDate.model';

export const APP_TITLE = 'pwnzf';

export const MY_EMAIL = 'pwnzforever@gmail.com';
export const MY_NAME = 'Dmitrii Vasilev';
export const MY_DATE_OF_BIRTH = new BeautifulDate(new Date(1993, 2, 5)).getDateStr();
export const MY_OCCUPATION = 'Web developer';
export const MY_PHONE_NUMBER = '+7-952-277-02-98';
export const MY_GITHUB = 'https://www.github.com/VasilevDO';
export const MY_INSTAGRAM = 'https://www.instagram.com/pwnzforever';
export const MY_LINKEDIN = 'https://www.linkedin.com/in/dmitrii-vasilev-784883233';
export const MY_INTERESTS = ['Technologies', 'Sports', 'Video games', 'Travel'];
export const MY_EDUCATION_UNIVERSITY = 'SUAI (Saint-Petersburg State University of Aerospace Instrumentation)';
export const MY_EDUCATION_FACULTY = 'Institute of Innovative Technologies in Electromechanics and Robotics';
export const MY_EDUCATION_DEPARTMENT = 'Control in Technical Systems';
export const MY_EDUCATION_GRADES = [{grade: 'Bachelor', year: 2015}, {grade: 'Master', year: 2017}];
export const MY_WORK_EXPERIENCE = [{
	date: '01/2022 - present',
	copmany: 'EPAM Systems, Inc.',
	position: 'javascript developer intern',
},
{
	date: '09/2021 - 12/2021',
	copmany: 'EPAM Systems, Inc.',
	position: 'javascript developer student',
},
{
	date: '09/2017 - present',
	copmany: 'OOO MEGAL',
	position: 'production management engineer',
}];
export const MY_LANGUAGES = [{language: 'Russian', level: 'native'}, {language: 'English', level: 'b2+ (according to EPAM assessment)'}];
export const MY_CURRENT_LOCATION = 'Saint-Petersburg, Russia';

export const SKILLS_HARD = ['HTML', 'JavaScript', 'CSS/SCSS/SASS', 'React', 'Redux', 'Node.js/Express', 'SQL/ElephantSQL/Sequelize', 'Mongoose', 'Webpack', 'Unit testing/Jest', 'Git/Github/Gitlab', 'Jira'];
export const SKILLS_SOFT = ['Agile/Scrum', 'Open minded', 'Self-motivated', 'Self-organized', 'Communication', 'Teammate'];

export const LINKS_GITHUB_POKEDEX_PAGE = 'https://vasilevdo.github.io/pokedex/';
export const LINKS_GITHUB_CHAT = 'https://github.com/VasilevDO/chat';
export const LINKS_GITHUB_FULLSTACK = 'https://github.com/VasilevDO/fs';
export const LINKS_GITHUB_CONCALC = 'https://vasilevdo.github.io/constructor-calc/';
