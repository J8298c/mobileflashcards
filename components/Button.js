import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const Button = (props) => {
    return (
      <TouchableHighlight onPress={props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          { props.buttonText }
        </Text>
      </TouchableHighlight>
    )
}

const styles = {
  buttonStyle: {
    backgroundColor: 'blue',
    marginTop: 25,
    alignSelf: 'stretch',
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 10
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
    color: 'yellow'
  }
}

export default Button;
