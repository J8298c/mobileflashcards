import React, {Component} from 'react';
import { View, TextInput, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppButton from './AppButton';

class CreateDeck extends Component {
    state ={}
    addDeck() {
      let deckTitle = this.state.title
      let newDeck = {};
      let newDeckProps = {title: deckTitle};
      newDeck[deckTitle] = newDeckProps;
      console.log(newDeck);
      AsyncStorage.mergeItem('Decks', JSON.stringify(newDeck))
      .then(response => { 
          console.log(`Added your new deck ${newDeck}`)
          Actions.Deck({id: deckTitle});
        })
      .catch(error => { console.log(error)})

    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>Enter the Title of your Deck</Text>
                <TextInput style={styles.inputStyles} onChangeText={(title) => this.setState({title})}/>
                <AppButton onPress={() => {this.addDeck()}} buttonText='Save' />
            </View>
        )
    }
}
export default CreateDeck;

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#392D4F'
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 85,
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