import React from 'react';

import FooterComponent from './components/Footer/Footer.component';
import HeaderComponent from './components/Header/Header.component';
import BioPage from './pages/Bio/Bio.page';

const App = () => {
	const kek = 'w';
	return (
		<>
			<HeaderComponent/>
			<main className="container">
				<BioPage/>
			</main>
			<FooterComponent/>
		</>
	);
};

export default App;
