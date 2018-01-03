import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Card = (props) => {
    //need to fill an array with different answers
    let answers = [];
    const { answer } = props;
    answers.push(answer);
    let fakeAnswer = 'its a delorean';
    let nextAnswer = 'up up down down left right left right';
    answers.push(fakeAnswer, nextAnswer);
    return (
        <View>
        <Text>
            {props.cardQuestion}
        </Text>
            {
                answers.map(elAnswer => (
                    <View key={elAnswer}>
                      <Text>
                       { elAnswer}
                    </Text>
                    <TouchableOpacity onPress={props.onPress}>
                        <Text>Select</Text>
                    </TouchableOpacity>  
                    </View>
                    
                ))
            }
    </View>
    )
};
export default Card;