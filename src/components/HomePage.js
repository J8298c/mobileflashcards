import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './Button';
import deckdata from '../mockdata';

const HomePage = () => {
    const data = JSON.stringify(deckdata);
	AsyncStorage.setItem('Decks', data)
	 .then(response => { console.log('success')})
	.catch(error => { console.log(error)})
	return ( 
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}> Whiz Kid </Text>
			<Button onPress={() => { Actions.decklist()}} buttonText='Start' buttonColor='#5186EC'/>
		</View>
	)
}

export default HomePage;

const styles = {
	containerStyle: {
		flex: 1,
		alignItems: 'center',
	},
	titleStyle: {
		fontSize: 65,
		marginTop: 100,
		marginBottom: 120
	}
}