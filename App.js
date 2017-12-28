import React from 'react';
import { View, Text } from 'react-native';
import Deck from './components/Deck';

const App = () => (
  <View style={styles.containerStyle}>
    <Deck />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1
  }
}
export default App;
