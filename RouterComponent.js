import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import DeckList from './components/DeckList';
import DeckCreate from './components/DeckCreate';


const RouterComponent = () => {
	return (
		<Router>
			<Stack>
				<Scene key='homepage' title='WhizKid' component={HomePage} />
				<Scene key='decklist' title="DeckList" component={DeckList} />
				<Scene key='deckCreate' title='Create New Deck' component={DeckCreate} />
			</Stack>
		</Router>
	)
}
export default RouterComponent;
