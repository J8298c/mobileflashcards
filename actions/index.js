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
            deck = elRes[id];
            dispatch(getADeck(deck));
            
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
            Actions.decklist();  
        })
        .catch(error => { console.log(error)});
    }
}

export function addingCardToDeck(id, card, dispatch) {
    return dispatch => {
        AsyncStorage.getItem('Decks')
        .then(response => {
            //pasring response to json
            let elDeck = JSON.parse(response);
            //pulling out the single deck to edit
            let theDeck = elDeck[id];
            if(!theDeck.questions) {
                theDeck['questions'] = card;
            }
            //pushing new question to questions array on deck
            theDeck.questions.push(card);
            //saving the complete decks obj again
            AsyncStorage.setItem('Decks', JSON.stringify(elDeck));
            Actions.deckview({id: id});
        })
        .catch(error => { console.log(error)});
    }
}

