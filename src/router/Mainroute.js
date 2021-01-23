import React from 'react';
import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Error from '../pages/Error';
import { Route, Switch } from 'react-router-dom';
const Mainroute = () => {
	return (
		<Route
			render={({ location }) => (
				<Switch location={location}>
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/pg/:pgno" component={Dashboard} />
					<Route exact path="/detail/:id" component={Detail} />
					<Route component={Error} />
				</Switch>
			)}
		/>
	);
};
export default Mainroute;
