import React from 'react';

import './LogoRef.scss';

type LogoRefComponentProps = {
    src:string;
    alt:string;
    href?:string;
    className?:string|undefined|null;
}

const LogoRefComponent = (props:LogoRefComponentProps) => {
	const {className, src, href, alt} = props;
	const componentClassName = `logo-ref${className ? ' ' + className : ''}`;

	return (
		<a className={componentClassName} href={href} target="_blank" rel="noreferrer">
			<img src={src} alt={alt}/>
		</a>
	);
};

export default LogoRefComponent;
