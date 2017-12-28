import React, { Component } from 'react';
import { View } from 'react-native';
import Card from './Card';

class Deck extends Component {
  componentDidMount() {
    //deal with the db stuff
  }
  render(props) {
    return(
      <View style={styles.containerStyle}>
      <Card />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export default Deck;
