import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import { gettingADeck } from '../actions/index';

class Quiz extends Component {
	state = { score: 0}
	componentDidMount(props) {
		this.props.gettingADeck(this.props.id);
	}

	onQuestionAnswer(answer) {
		let newScore = this.state.score;
		if(answer) { newScore++ }
		console.log(newScore);
		this.setState({ score: newScore});
	}

	render(props) {
		return (
			<ScrollView contentContainerStyle={styles.quizContainer}>
				{
					this.props.deck.questions ?
					this.props.deck.questions.map(question => (
						<View key={question.question} style={styles.viewContaier}>
							<Text style={styles.textContainer}>{question.question}</Text>
							<Text style={styles.textContainer}>{question.answer}</Text>
							<Button buttonText='Correct' onPress={() => { this.onQuestionAnswer(true)}} />
							<Button buttonText='InCorrect' onPress={() => { this.onQuestionAnswer(false)}} />
						</View>
					))
					: null
				}
				<Text style={styles.scoreContainer}>
					Current Score: { this.state.score }
				</Text>
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
