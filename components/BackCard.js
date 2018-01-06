import React from 'react';
import { View, Text } from 'react-native';


const CardBack = (props) => {
  console.log(props);
  return (
    <View style={styles.hintContainer}>
      <Text style={styles.hintText}>The Answer could be {props.hint.answer}</Text>
    </View>
  )
}

const styles = {
  hintContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hintText: {
    fontSize: 20,
    textAlign: 'center'
  }
}

export default CardBack;
