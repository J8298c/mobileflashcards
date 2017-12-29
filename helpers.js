import { AsyncStorage } from 'react-native';
import DeckData from './testdecks';

//sets inital data into async storage
export function initDeck() {
  AsyncStorage.setItem('React_Deck', JSON.stringify(DeckData.React))
    .then(response => { console.log('success')})
    .catch(error => { console.log(error)});

  AsyncStorage.setItem('JavaScript_Deck', JSON.stringify(DeckData.JavaScript))
    .then(response => { console.log('success')})
    .catch(error => { console.log(error)});

}

export function getDecks() {
  //do something
}

export function getDeck(id) {

}

export function setDeckTitle(title) {

}

export function addCardToDeck(title, card) {
  
}

export function deleteDecks() {
  
}