import React from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import HomePage from './Hompage';
import DeckList from './DeckList';
import CreateDeck from './CreateDeck';
import DeckView from './DeckView';
import CreateQuestion from './CreateQuestion';
import QuizView from './QuizView';

const RouterComponent = () => (
    <Router>
        <Stack>
            <Scene key='Home' component={HomePage} title='WhizKid' />
            <Scene key='Decks' component={DeckList} title='Decks' />
            <Scene key='CreateDeck' component={CreateDeck} title='Create a Deck' />
            <Scene key='Deck' component={DeckView} title='Deck' />
            <Scene key='CreateQuest'component={CreateQuestion} title='Question create' />
            <Scene key='Quiz'component={QuizView} title='Quiz' />
        </Stack>
    </Router>
)

export default RouterComponent;

