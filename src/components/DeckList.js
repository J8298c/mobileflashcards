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
            <View style={styles.containerStyle}>
              {
                  this.state.decks ?
                  _.map(this.state.decks, deck => (
                    <ScrollView key={deck.title}>
                        <TouchableHighlight onPress={() => { Actions.Deck({id: deck.title})}}>
                            <View style={{marginTop: 5}}>
                            <Text style={styles.titleStyle}>Deck {deck.title}</Text>
                            <Text style={styles.titleStyle}>Questions {deck.questions ? deck.questions.length : 0}</Text>
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

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#392D4F'
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: '#F34159'
    },
    inputStyles: {
        alignSelf: 'center',
        backgroundColor: '#FCFCFC',
        width: 200,
        marginTop: 25,
        height: 40,
        fontSize: 25
    }
   
}