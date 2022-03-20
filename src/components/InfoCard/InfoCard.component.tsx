import React from 'react';

import {MY_EMAIL, MY_GITHUB, MY_INSTAGRAM, MY_LINKEDIN, MY_NAME, MY_OCCUPATION, MY_PHONE_NUMBER} from '../../consts/app.const';

import './InfoCard.scss';

import GitLogo from '../../assets/GitHub-Mark-32px.png';
import InstagramLogo from '../../assets/instagramLogo.png';
import LinkedinLogo from '../../assets/linkedin-logo.png';
import LogoRef from '../../models/LogoRef.model';
import LogoRefComponent from '../LogoRef/LogoRef.component';

type InfoCardComponentProps = {
    className?:string|undefined|null;
}

const InfoCardComponent = (props:InfoCardComponentProps) => {
	const {className} = props;
	const componentClassName = `info-card${className ? ' ' + className : ''}`;

	const name = MY_NAME;
	const occupation = MY_OCCUPATION;

	const logoRefs = [
		new LogoRef(LinkedinLogo, MY_LINKEDIN, 'linkedin-logo'),
		new LogoRef(GitLogo, MY_GITHUB, 'github-logo'),
		new LogoRef(InstagramLogo, MY_INSTAGRAM, 'instagram-logo'),
	];

	const contacts = [
		MY_EMAIL,
		MY_PHONE_NUMBER,
	];

	return (
		<div className={componentClassName}>
			<div className="info">
				<h1>{name}</h1>
				<h2>{occupation}</h2>
			</div>
			<div className="contacts">
				{contacts.map((u, i) => <p key={i}>{u}</p>)}
				<div className="logos">
					{logoRefs.map((u, i) => <LogoRefComponent key={i} src={u.src} href={u.ref} alt={u.alt}/>)}
				</div>
			</div>
		</div>
	);
};

export default InfoCardComponent;
