import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import data from '../DeckData';
import AppButton from './AppButton'

class HomePage extends Component {
    componentDidMount() {
        //filling async storage with data on app init
        const deckData = JSON.stringify(data);
        AsyncStorage.setItem('Decks', deckData)
        .then(() => { console.log('successfully added deck data')})
        .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>WhizKid</Text>
                <AppButton onPress={() => Actions.Decks()}
                    buttonText='Start' />
            </View>
        )
    }
}

export default HomePage;

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#392D4F'
    },
    titleStyle: {
        fontSize: 45,
        textAlign: 'center',
        marginTop: 85,
        color: '#F34159'
    },
   
}