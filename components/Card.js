import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

const Card = (props) => (
    <View style={styles.viewContaier}>
        <Text style={styles.questionText}>
            {props.cardQuestion}
        </Text>
        <Text style={styles.textContainer}>
            {props.answer}
        </Text>
        <Button buttonText='Correct Answer' onPress={props.oncorrectPress} />
        <Button buttonText='InCorrect Answer' onPress={props.onInCorrectPress} />
    </View>
);

export default Card;

const styles = {
    viewContaier: {
        marginTop: 20,
        marginBottom: 55
    },
    textContainer: {
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50
    },
    questionText: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 15
    }
}
