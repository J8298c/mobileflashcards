import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouterComponent from './RouterComponent';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { setLocalNotification } from './components/NotificationsHelper';
import appReducer from './reducers/index';
import thunk from 'redux-thunk';
const store = createStore(appReducer, {}, applyMiddleware(thunk));

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.containerStyle}>
          <RouterComponent />
        </View>
      </Provider>
      )
  }
}

const styles = {
  containerStyle: {
    flex: 1
  }
}
export default App;