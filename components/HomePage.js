import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from './Button';
import { Actions } from 'react-native-router-flux'
import { initDeck } from '../helpers';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { fetchAllDecks } from '../actions/index';
class HomePage extends Component {
  render() {
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
