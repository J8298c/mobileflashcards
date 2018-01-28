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

    nextQuestion() {
        const { questionNumber } = this.state;
        const howManyQUestions = this.state.deck.questions.length - 1
        console.log(howManyQUestions, '::howmany left');
        if(questionNumber !== howManyQUestions) {
            console.log(questionNumber);
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
                    // this.state.deck.questions.map(quiz => (
                    //     <View key={quiz.question}>
                    //         <View>
                    //         <Text style={styles.titleStyle}>{quiz.question}</Text>
                    //         </View>
                            
                    //         {
                    //             this.state.show ?
                    //         <View>
                    //             <View>
                    //             <Text style={styles.titleStyle}>{quiz.answer}</Text>
                    //         </View>
                    //         <AppButton buttonText='Correct' onPress={() => { this.incrementScore()}} />
                    //         <AppButton buttonText='Not Correct' onPress={() => { this.setState({message: 'Wrong answer'}) }} />
                    //         <AppButton buttonText='Hint' onPress={() => { Actions.Back({hint: quiz.answer})}} />
                    //         </View>
                    //             :<AppButton buttonText='Show Answers' onPress={() => { this.setState({show: true})}}/>
                    //         }
                             
                    //         <View>
                    //             <Text style={styles.titleStyle}>{this.state.score}</Text>
                    //             <Text style={styles.titleStyle}>{this.state.message}</Text>
                    //         </View>
                    //     </View>
                    // ))
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