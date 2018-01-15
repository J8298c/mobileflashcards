import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import HomePage from './HomePage';
import DeckListView from './DeckListView';
import DeckCreate from './DeckCreate';
import DeckView from './DeckView';
import Quiz from './Quiz';
import CardBack from './CardBack';
import CardCreate from './CardCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene key='homepage' component={HomePage} title={'Whiz Kid'} />
                <Scene key='decklist' component={DeckListView} title={'Current Decks'} />
                <Scene key='deckcreate' component={DeckCreate} titl={'New Deck'} />
                <Scene key='deckview' component={DeckView} title={'Current Deck'} />
                <Scene key='quiz' component={Quiz} title={'Quiz'} />
                <Scene key='cardback' component={CardBack} title={'Back of card'} />
                <Scene key='createcard' title='New Card' component={CardCreate} />
            </Stack>
        </Router>
    )
}

export default RouterComponent;