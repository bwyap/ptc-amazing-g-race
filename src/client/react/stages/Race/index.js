import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from '../../pages';
import AppContainer from '../../../../../lib/react/components/AppContainer';
import Login from '../Login';


class Race extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<AppContainer>
					<Switch>
						
						<Route exact path='/'>
							<Login notAnimated/>
						</Route>
						
						<Route component={NotFoundPage}/>

					</Switch>
				</AppContainer>
			</BrowserRouter>

		);
	}
}


export default Race;
