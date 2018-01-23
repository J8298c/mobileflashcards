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
            <View>
                <View>
                 <Text>Create a question</Text>   
                 <TextInput onChangeText={(question) => this.setState({question})} 
                    placeholder='Add your question'/>
                </View>
                <View>
                <Text>Add an answer</Text>   
                 <TextInput onChangeText={(answer) => this.setState({answer})} 
                    placeholder='Add your answer'/>
                </View>
                <AppButton buttonText='Save' onPress={() => { this.onSave()}} />
            </View>
        )
    }
}

export default CreateQuestion;