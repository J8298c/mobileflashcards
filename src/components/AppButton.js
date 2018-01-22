import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const AppButton = (props) => (
    <TouchableHighlight 
        style={styles.buttonStyle}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableHighlight>
)

export default AppButton;

const styles = {
    buttonStyle: {
        width: 250,
        borderRadius: 10,
        backgroundColor: '#F34159',
        alignSelf: 'center',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 55,
        height: 35
    },
    buttonText: {
        textAlign: 'center',
        color: '#FCFCFC',
        marginTop: 10
    }
}