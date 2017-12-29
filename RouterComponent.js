import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomePage from './components/HomePage';

const RouterComponent = () => {
	return (
		<Router>
			<Stack>
				<Scene key='homepage' title='WhizKid' component={HomePage} />
			</Stack>
		</Router>
	)
}
export default RouterComponent;
