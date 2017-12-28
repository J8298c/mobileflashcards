import React from 'react';
import { View, Text } from 'react-native';
import Deck from './components/Deck';
import RouterComponent from './RouterComponent';

const App = () => (
  <View style={styles.containerStyle}>
    <RouterComponent />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1
  }
}
export default App;
