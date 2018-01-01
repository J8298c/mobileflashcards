import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Quiz extends Component {
	componentDidMount(props) {
		//fetch a deck 
	}
	render(props) {
		return (
			<View>
				<Text> Quiz</Text>
			</View>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		state
	}
}

export default connect(mapStateToProps, null)(Quiz);