import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from './Button';

const HomePage = () => {
	return ( 
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}> Whiz Kid </Text>
			<Button onPress={() => { Action.decklist()}} buttonText='Start' />
		</View>
	)
}

export default HomePage;

const styles = {
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleStyle: {
		fontSize: 55,
	}
}