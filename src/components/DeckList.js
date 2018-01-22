import React, { Component } from 'react';
import { Text, View, AsyncStorage, ScrollView, TouchableHighlight } from 'react-native';
import * as _ from 'lodash';
import AppButton from './AppButton';
import { Actions } from 'react-native-router-flux';

class DeckList extends Component {
    state = {}
    componentDidMount() {
        AsyncStorage.getItem('Decks')
        .then(JSON.parse)
        .then(decks => {
            let thedecksArr =[];
            _.forIn(decks, deck => {
                thedecksArr.push(deck)
            })
            this.setState({ decks: thedecksArr})
        })
        .catch(error => {error})
    }

    render() {
        console.log(this.state);
        return (
            <View>
              {
                  this.state.decks ?
                  _.map(this.state.decks, deck => (
                    <ScrollView key={deck.title}>
                        <TouchableHighlight onPress={() => { Actions.Deck({id: deck.title})}}>
                            <View>
                            <Text>Deck {deck.title}</Text>
                            <Text>Questions {deck.questions ? deck.questions.length : 0}</Text>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                  ))
                  : 
                  <Text>Looks empty in here lets add a new deck</Text>
              }
                <AppButton onPress={() => { Actions.CreateDeck()}} buttonText='Add' />
            </View>
        )
    }
}

export default DeckList;