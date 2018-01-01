import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { gettingADeck } from '../actions/index';


class Quiz extends Component {
	componentDidMount(props) {
		//fetch a deck 
		this.props.gettingADeck(this.props.id);
	}
	render(props) {
		return (
			<View>
				{
					this.props.deck ?
					this.props.deck.questions.map(question => (
						<View key={question.question}>
							<Text>
								{question.question}
							</Text>
						</View>
					))
					: null
				}
			</View>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	const { deck } = state;
	return {
		deck
	}
}

export default connect(mapStateToProps, { gettingADeck })(Quiz);