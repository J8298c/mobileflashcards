import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouterComponent from './RouterComponent';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers/index';
import thunk from 'redux-thunk';
const store = createStore(appReducer, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.containerStyle}>
        <RouterComponent />
      </View>
    </Provider>
      //check git 
    )
}

const styles = {
  containerStyle: {
    flex: 1
  }
}
export default App;