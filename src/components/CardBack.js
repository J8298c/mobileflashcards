import React from 'react';
import { Text, View } from 'react-native';
import AppButton from './AppButton';


const CardBack = (props) => (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{props.hint}</Text>
    </View>
)

export default CardBack;
const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#392D4F'
    },
    titleStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 85,
        color: '#F34159'
    },
}
