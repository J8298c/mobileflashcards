import React from 'react';
import { Text } from 'react-native';

const Card = (props) => {
  console.log(props);
  return <Text style={styles.textStyles}> Flash Card </Text>
}

const styles = {
  textStyles: {
    fontSize: 20
  }
}
export default Card;
