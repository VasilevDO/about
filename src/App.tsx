import React from 'react';

import FooterComponent from './components/Footer/Footer.component';
import HeaderComponent from './components/Header/Header.component';
import BioPage from './pages/Bio/Bio.page';

import './App.scss';

const App = () => {
	const kek = 'w';
	return (
		<div className="app">
			<HeaderComponent/>
			<div className="container">
				<BioPage/>
			</div>
			<FooterComponent/>
		</div>
	);
};

export default App;
