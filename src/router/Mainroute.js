import React from 'react';
import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import { Route } from 'react-router-dom';
const Mainroute = () => {
	return (
		<div>
			<Route exact path="/:pgno" component={Dashboard} />
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/detail/:id" component={Detail} />
		</div>
	);
};
export default Mainroute;
