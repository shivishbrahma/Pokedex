import React from 'react';
import { HashRouter } from 'react-router-dom';
import Mainroute from './router/Mainroute';
function App() {
	return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Mainroute />
		</HashRouter>
	);
}

export default App;
