import { GET_ALL_DECKS, GET_A_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from './types';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
        let deck;
       //get an item from storage by using the id
       AsyncStorage.getItem('Decks')
       .then(response => {
          let elRes = JSON.parse(response);
          console.log(elRes);
          deck = elRes[id];
          console.log(deck);
          dispatch(getADeck(deck))
       })
       .catch(error => { console.log(error)})
    }

}

export function savingDeckTitle(decktitle, dispatch) {
    return dispatch => {
        //settting up new object to save to deck
    let deckobj = {};
    let deckobjProps = {title: decktitle}
    deckobj[decktitle] = deckobjProps;
       AsyncStorage.mergeItem('Decks', JSON.stringify(deckobj))
        .then(response => {
            console.log(response);
            Actions.decklist();  
        })
        .catch(error => { console.log(error)});
    }
}

export function addingCardToDeck(dispatch) {
    return dispatch => {

    }
}

