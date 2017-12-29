import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from './Button';
import { Actions } from 'react-native-router-flux'
import { initDeck } from '../helpers';
import { AsyncStorage } from 'react-native';

class HomePage extends Component {
  componentDidMount() {
    initDeck();
  }
  render() {
     AsyncStorage.getItem('decks')
    .then(response => {
      console.log(JSON.parse(response));
    })
    return(
      <View style={styles.containerStyle}>
          <Text style={styles.titleStyle}>
            FlashCards
          </Text>
          <Button onPress={() => { Actions.deck(); }} buttonText='Start'/>
      </View>
    )
  }
}


const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: 90
  },
  titleStyle: {
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 100,
  }
}

export default HomePage;
