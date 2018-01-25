import React, { Component } from 'react';
import  { View, Text, TextInput, AsyncStorage } from 'react-native';
import AppButton from './AppButton';
import { Actions } from 'react-native-router-flux';

class CreateQuestion extends Component {
    state = {}
    onSave() {
        const {question, answer} = this.state;
        AsyncStorage.getItem('Decks')
        .then(response => {
            let elDeck = JSON.parse(response);
            console.log(elDeck)
            const card = {
                question,
                answer
            }
            let theDeck = elDeck[this.props.id]
            if(!theDeck.questions) {
                theDeck['questions'] = [];
                theDeck.questions.push(card)
                console.log(theDeck)
            } else {
                theDeck.questions.push(card);
            }
            AsyncStorage.setItem('Decks', JSON.stringify(elDeck));
            Actions.Deck({id: this.props.id})
        })
        .catch(error => { console.log(error)})
    }
    render(props) {
        return (
            <View style={styles.containerStyle}>
                <View>
                 <Text style={styles.titleStyle}>Create a question</Text>   
                 <TextInput onChangeText={(question) => this.setState({question})} 
                    placeholder='Add your question' style={styles.inputStyles}/>
                </View>
                <View>
                <Text style={styles.titleStyle}>Add an answer</Text>   
                 <TextInput onChangeText={(answer) => this.setState({answer})} 
                    placeholder='Add your answer' style={styles.inputStyles} />
                </View>
                <AppButton buttonText='Save' onPress={() => { this.onSave()}} />
            </View>
        )
    }
}

export default CreateQuestion;

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#392D4F'
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 85,
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