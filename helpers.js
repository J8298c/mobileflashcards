import { AsyncStorage } from 'react-native';
import DeckData from './testdecks';

export function initDeck() {
  let obj1 = JSON.stringify(DeckData.JavaScript);
  let obj2 = JSON.stringify(DeckData.React);
  AsyncStorage.setItem('decks', obj1);
  AsyncStorage.setItem('decks', obj2);
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
