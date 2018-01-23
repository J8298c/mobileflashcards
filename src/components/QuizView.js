import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native';

class QuizView extends Component {
    state ={}
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

    render(props) {
        console.log(this.state)
        return (
            <View>
                <Text>
                    QuizView
                </Text>
            </View>
        )
    }
}

export default QuizView;