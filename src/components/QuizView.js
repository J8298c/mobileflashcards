import React, { Component } from 'react'
import { Text, View, AsyncStorage, ScrollView } from 'react-native';
import AppButton from './AppButton';
import { Actions } from 'react-native-router-flux';

class QuizView extends Component {
    state = {
        score: 0,
        message: '',
        show: false,
        questionNumber: 0,
        scoreScreen: false
    }

    componentDidMount(props) {
        AsyncStorage.getItem('Decks')
        .then(response => {
            let elRes = JSON.parse(response)
            let theDeck = elRes[this.props.id]
            this.setState({deck: theDeck})
        })
        .catch(error => { console.log(error)})
    }

    incrementScore() {
      const {score} = this.state;
      let newScore = score + 1;
      this.setState({ score: newScore, message: '' })
    }

    nextQuestion() {
        const { questionNumber } = this.state;
        const howManyQUestions = this.state.deck.questions.length - 1
        if(questionNumber !== howManyQUestions) {
            this.setState({questionNumber: questionNumber + 1})
        } else {
            this.setState({scoreScreen: true})
        }
    }

    render(props) {
        console.log(this.state.deck)
        return (
            <ScrollView style={styles.containerStyle}>
                {
                    this.state.deck ? 
                    <View>
                       {
                           !this.state.scoreScreen ?
                           <View>
                           <View>
                               <Text style={styles.titleStyle}>{this.state.deck.questions[this.state.questionNumber].question}</Text>
                           </View>
                           <View>
                               {
                                   this.state.show ? <AppButton buttonText='Correct' onPress={() => { this.incrementScore}} /> 
                                   : <AppButton buttonText='Show Answer' onPress={() => { this.setState({show: true})}} /> 
                               }
                           </View>
                            <AppButton buttonText='Next' onPress={() => {this.nextQuestion()}} />
                           </View>
                           :
                           <View>
                                <Text style={styles.titleStyle}>{this.state.score}</Text>
                           </View>
                       }
                        
                    </View>
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