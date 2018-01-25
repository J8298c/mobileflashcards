import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouterComponent from './src/components/RouterComponent';
import { setNotifications } from './src/components/NotificationHellper';

export default class App extends React.Component {
  componentDidMount(){
    setNotifications()
  }
  render() {
    return (
        <RouterComponent />
    );
  }
}

