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
            <View>
                <Text>Enter the Title of your Deck</Text>
                <TextInput onChangeText={(title) => this.setState({title})}/>
                <AppButton onPress={() => {this.addDeck()}} buttonText='Save' />
            </View>
        )
    }
}
export default CreateDeck;