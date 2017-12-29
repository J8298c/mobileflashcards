import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const Button = (props) => {
    return (
      <TouchableHighlight onPress={props.onPress} style={styles.buttonStyle}>
        <Text>
          { props.buttonText }
        </Text>
      </TouchableHighlight>
    )
}

const styles = {
  buttonStyle: {
    backgroundColor: 'blue',
    marginTop: 20,
    width: 34
  }
}

export default Button;
