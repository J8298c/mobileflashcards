import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addingCardToDeck } from '../actions/index';
import Button from './Button';

class CardCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
        this.submitCard = this.submitCard.bind(this);
    }
    
    submitCard(id) {
        console.log(this.state)
        cardObj = {
            question: this.state.question,
            answer: this.state.answer
        }
        this.props.addingCardToDeck(id, cardObj);
    }

    render(props) {
        return (
            <View>
                <TextInput placeholder='Enter your question' 
                onChangeText={(question) => this.setState({question})} />
                <TextInput placeholder='Enter the answer to your question' 
                onChangeText={(answer) => this.setState({answer})} />
                <Button buttonText='Save' onPress={() => { this.submitCard(this.props.id)}} /> 
            </View>
        )
    }
}

export default connect(null, { addingCardToDeck })(CardCreate);