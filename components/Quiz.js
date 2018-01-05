import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import Card from './Card';
import { gettingADeck } from '../actions/index';

class Quiz extends Component {
	state ={score: 0}

	render(props) {
		return (
			<ScrollView>
				{
					this.props.deck ?
					this.props.deck.map(decker => (
						<View>
							<View>
								<Text>
									{decker.question}
								</Text>
								<Text>
									{decker.answer}
								</Text>
							</View>
						</View>
					))
					:null
				}
			</ScrollView>
		)
	}
}

const styles = {
	quizContainer: {
		flex: 1,
		paddingVertical: 20
	},
	viewContaier: {
		marginTop: 20,
		marginBottom: 55
	},
	textContainer: {
		alignItems: 'center',
		marginLeft: 50,
		marginRight: 50
	},
	scoreContainer: {
		fontSize: 20,
		color: 'blue',
		alignItems: 'center'
	}
}

function mapStateToProps(state) {
	console.log(state)
	const { deck } = state;
	return {
		deck
	}
}

export default connect(mapStateToProps, {gettingADeck})(Quiz);
