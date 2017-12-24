import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HomePage />
      </View>
    );
  }
}

