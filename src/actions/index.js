import { AsyncStorage} from 'react-native';
import { GET_ALL_DECKS, SAVING_A_DECK, GET_A_DECK, ADD_CARD_TO_DECK } from './types';
import { Actions } from 'react-native-router-flux';

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function gettingAllDecks(dispatch) {
    return dispatch => {
        AsyncStorage.getItem("Decks")
        .then(JSON.parse)
        .then(decks => {
            console.log(decks);
            dispatch(getAllDecks(decks))
        })
        .catch(error => { console.log(error)})
    }
}


export function saveADeck(title) {
    return {
        type: SAVING_A_DECK,
        title
    }
}

export function savingADeck(decktitle, dispatch) {
    return dispatch => {
        let deckobj = {};
        let deckobjProps = {title: decktitle}
        deckobj[decktitle] = deckobjProps;
           AsyncStorage.mergeItem('Decks', JSON.stringify(deckobj))
            .then(response => {
                Actions.deckview({id: decktitle});  
            })
            .catch(error => { console.log(error)});
    }
}

export function getADeck(deck) {
    return {
        type: GET_A_DECK,
        deck
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

export function addingCardToDeck(id, card, dispatch) {
    return dispatch => {
        AsyncStorage.getItem('Decks')
        .then(JSON.parse)
        .then(decks => {
            let theDeck = decks[id];
            console.log(theDeck);
            if(!theDeck.questions) {
                theDeck['questions'] = [];
                theDeck.questions.push(card);
            } else {
                theDeck.questions.push(card);
            }
            AsyncStorage.setItem('Decks', JSON.stringify(theDeck))
            Actions.deckview({id: id})
        })
        .catch(error => { console.log(error)});
    }
}
