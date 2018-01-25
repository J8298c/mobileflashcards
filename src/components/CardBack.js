import React from 'react';
import { Text, View } from 'react-native';
import AppButton from './AppButton';

const CardBack = (props) => (
    <View>
        <Text>{props.hint}</Text>
    </View>
)

export default CardBack;
