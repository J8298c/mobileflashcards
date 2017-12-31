import { GET_ALL_DECKS, GET_A_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from './types';
import { AsyncStorage } from 'react-native';

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks,
    }
}

export function getADeck(deck) {
    return {
        type: GET_A_DECK,
        deck
    }
}

export function saveADeckTitle(title) {
    return {
        type: SAVE_DECK_TITLE,
        title
    }
}

export function addCardToDeck(card) {
    return {
        type: ADD_CARD_TO_DECK,
        card
    }
}

export function gettingAllDecks(dispatch) {
    return dispatch => {
        AsyncStorage.getItem('Decks')
        .then(response => {
            dispatch(getAllDecks(JSON.parse(response)))
        })
        .catch(error => { console.log(error)})
    }
}

export function gettingADeck(id, dispatch) {
    return dispatch => {
       //get an item from storage by using the id
    }
}

export function savingDeckTitle(title, dispatch) {
    return dispatch => {
      console.log(title)
        //save a title
    }
}

export function addingCardToDeck(dispatch) {
    return dispatch => {

    }
}

