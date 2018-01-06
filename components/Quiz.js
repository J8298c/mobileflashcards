import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { gettingADeck } from '../actions/index';
import Button from './Button';

class Quiz extends Component {
	state = {
			score: 0,

		}

	componentDidMount() {
		this.props.gettingADeck(this.props.id);
	}

	onQuestionAnswer(answer) {
		//check the answer and if its true grant a point
		if(answer) {
			this.incrementScore(this.props.state)
		}
	}
	incrementScore(prevstate) {
		let theScore = this.state.score;

		this.setState({score :  theScore +=1})
	}

	onNextQuestion() {
			//display the next questions and hide prev question
	}

	render() {
		console.log(this.state.score);
		return (
			<ScrollView>
				{
					this.props.deck ?
						this.props.deck.questions.map(q => (
							<View style={{display: this.state.display}}>
								<View style={styles.questContainer}>
									<Text style={styles.textContainer}>{q.question}</Text>
									<Text style={styles.answerContainer}>{q.answer}</Text>
								</View>
								<Button buttonText='Yes' onPress={() => { this.onQuestionAnswer(true)} } />
								<Button buttonText='No' onPress={() => { this.onQuestionAnswer(false)} } />
							</View>
						)): null
				}
				<View style={styles.scoreContainer}>
					<Text style={styles.scoreText}>{this.state.score}</Text>
				</View>
			</ScrollView>
		)
	}
}

function mapStateToProps(state) {
	const { deck } = state;
	return {
		deck
	}
}

export default connect(mapStateToProps, { gettingADeck })(Quiz);

const styles = {
	questContainer: {
		flex: 1,
		alignItems: 'center'
	},
	textContainer: {
		fontSize: 25,
		textAlign: 'center'
	},
	answerContainer: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 24,
		marginBottom: 36
	},
	scoreContainer: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
	},
	scoreText: {
		fontSize: 40,
		textAlign: 'center',
	}
}
