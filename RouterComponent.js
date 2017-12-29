import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Scene, Stack } from 'react-native-router-flux';
import appReducer from './reducer/index';
import Deck from './components/Deck';
import HomePage from './components/HomePage';

const store = createStore(appReducer, {}, applyMiddleware(thunk));

const RouterComponent = () => {
  return (
    <Provider store={store}>
        <Router>
            <Stack>
              <Scene title='Decks' key='deck' component={Deck} />
              <Scene title='HomePage' keys='homepage' component={HomePage} initial/>
            </Stack>
        </Router>
    </Provider>
  )
}
export default RouterComponent;
