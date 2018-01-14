import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { gettingADeck } from '../actions/index';
import { Actions } from 'react-native-router-flux';
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
		return (
			<ScrollView>
				{
					this.props.deck.questions ?
						this.props.deck.questions.map(q => (
							<View style={{display: this.state.display}} key={q.answer}>
								<View style={styles.questContainer}>
									<Text style={styles.textContainer}>{q.question}</Text>
									<Text style={styles.answerContainer}>{q.answer}</Text>
									<Button buttonText='Get Hint' onPress={() => { Actions.cardback({hint: q})}} />
								</View>
								<Button buttonText='Yes' onPress={() => { this.onQuestionAnswer(true)} } />
								<Button buttonText='No' onPress={() => { this.onQuestionAnswer(false)} } />
							</View>
						)): 
						<View style={styles.textContainer}>
							<Text style={styles.text}>No Questions for this subject how about creating some</Text>
							<Button buttonText='Add Card' onPress={() => {Actions.createcard({id: this.props.id})}} />
						</View>
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
	},
	text: {
		fontSize: 17
	}
}
