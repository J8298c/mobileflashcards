import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native';
import AppButton from './AppButton';

class QuizView extends Component {
    state = {
        score: 0,
        message: ''
    }
    componentDidMount(props) {
        AsyncStorage.getItem('Decks')
        .then(response => {
            let elRes = JSON.parse(response)
            console.log(elRes, 'the res');
            let theDeck = elRes[this.props.id]
            console.log(theDeck);
            this.setState({deck: theDeck})
        })
        .catch(error => { console.log(error)})
    }

    incrementScore() {
      const {score} = this.state;
      let newScore = score + 1;
      this.setState({ score: newScore, message: '' })
    }


    render(props) {
        console.log(this.state)
        return (
            <View>
                {
                    this.state.deck ? 
                    this.state.deck.questions.map(quiz => (
                        <View key={quiz.question}>
                            <View>
                            <Text>{quiz.question}</Text>
                            </View>
                            <View>
                                <Text>{quiz.answer}</Text>
                            </View>
                            <AppButton buttonText='Correct' onPress={() => { this.incrementScore()}} />
                            <AppButton buttonText='Not Correct' onPress={() => { this.setState({message: 'Wrong answer'}) }} />
                            <View>
                                <Text>{this.state.score}</Text>
                                <Text>{this.state.message}</Text>
                            </View>
                        </View>
                    ))
                    :null
                }
            </View>
        )
    }
}

export default QuizView;

const style = {
    errorBtn: {
        backgroundColor: 'red'
    }
}