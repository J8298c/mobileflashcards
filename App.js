import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouterComponent from './RouterComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/index';
const store = createStore(appReducer, {});

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.containerStyle}>
        <RouterComponent />
      </View>
    </Provider>
      
    )
}

const styles = {
  containerStyle: {
    flex: 1
  }
}
export default App;