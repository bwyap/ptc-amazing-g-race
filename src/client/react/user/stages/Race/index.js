import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from '../../../pages/NotFound';
import AppContainer from '../../../../../../lib/react/components/AppContainer';
import Login from '../../components/Login';
import InRaceDashboard from '../../components/dashboards/InRaceDashboard';


class Race extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<AppContainer>
					<Switch>
						
						<Route exact path='/'>
							<Login notAnimated/>
						</Route>
						<Route exact path='/login'>
							<Login notAnimated/>
						</Route>

						<Route path='/dashboard' component={InRaceDashboard}/>
						
						<Route component={NotFoundPage}/>

					</Switch>
				</AppContainer>
			</BrowserRouter>

		);
	}
}


export default Race;
