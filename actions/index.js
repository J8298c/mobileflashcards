import { GET_ALL_DECKS } from './types';
import { AsyncStorage } from 'react-native';

export function getAllDecks(decks) {
    return { 
        type: GET_ALL_DECKS,
        decks
    }
}

export function fetchAllDecks(dispatch) {
    return dispatch => {
        AsyncStorage.getItem('decks')
        .then(response => {
            dispatch(getAllDecks(JSON.parse(response)))
        })
        .catch(error => { console.log(error)});
    }
}

