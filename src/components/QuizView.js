import React, { Component } from 'react'
import { Text, View, AsyncStorage, ScrollView } from 'react-native';
import AppButton from './AppButton';
import { Actions } from 'react-native-router-flux';

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
            <ScrollView style={styles.containerStyle}>
                {
                    this.state.deck ? 
                    this.state.deck.questions.map(quiz => (
                        <View key={quiz.question}>
                            <View>
                            <Text style={styles.titleStyle}>{quiz.question}</Text>
                            </View>
                            <View>
                                <Text style={styles.titleStyle}>{quiz.answer}</Text>
                            </View>
                            <AppButton buttonText='Correct' onPress={() => { this.incrementScore()}} />
                            <AppButton buttonText='Not Correct' onPress={() => { this.setState({message: 'Wrong answer'}) }} />
                            <AppButton buttonText='Hint' onPress={() => { Actions.Back({hint: quiz.answer})}} />
                            <View>
                                <Text style={styles.titleStyle}>{this.state.score}</Text>
                                <Text style={styles.titleStyle}>{this.state.message}</Text>
                            </View>
                        </View>
                    ))
                    :null
                }
            </ScrollView>
        )
    }
}

export default QuizView;

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#392D4F'
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: '#F34159'
    },
    inputStyles: {
        alignSelf: 'center',
        backgroundColor: '#FCFCFC',
        width: 200,
        marginTop: 25,
        height: 40,
        fontSize: 25
    }
   
}