import React from 'react';
import { Text, View } from 'react-native';
import Button from './Button';
import { Actions } from 'react-native-router-flux'

const HomePage = () => (
  <View style={styles.containerStyle}>
    <Text style={styles.titleStyle}>
      FlashCards
    </Text>
    <Button onPress={() => { Actions.deck(); }} buttonText='Start'/>
  </View>
)

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleStyle: {
    fontSize: 40,
    fontWeight:'bold'
  }
}

export default HomePage;
