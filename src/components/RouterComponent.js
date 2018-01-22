import React from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import HomePage from './Hompage';
import DeckList from './DeckList';
import CreateDeck from './CreateDeck';


const RouterComponent = () => (
    <Router>
        <Stack>
            <Scene key='Home' component={HomePage} title='WhizKid' />
            <Scene key='Decks' component={DeckList} title='Decks' />
            <Scene key='CreateDeck' component={CreateDeck} title='Create a Deck' />
        </Stack>
    </Router>
)

export default RouterComponent;

