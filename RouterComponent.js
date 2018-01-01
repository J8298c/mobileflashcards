import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import DeckList from './components/DeckList';
import DeckCreate from './components/DeckCreate';
import DeckView from './components/DeckView';
import CardCreate from './components/CardCreate';
import Quiz from './components/Quiz';


const RouterComponent = () => {
	return (
		<Router>
			<Stack>
				<Scene key='homepage' title='WhizKid' component={HomePage} />
				<Scene key='decklist' title="DeckList" component={DeckList} />
				<Scene key='deckCreate' title='Create New Deck' component={DeckCreate} />
				<Scene key='deckview' title='Deck' component={DeckView} />
				<Scene key='createcard' title='New Card' component={CardCreate} />
				<Scene key='quiz' title='Whiz Quiz' component={Quiz} />
			</Stack>
		</Router>
	)
}
export default RouterComponent;
