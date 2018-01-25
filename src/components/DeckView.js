import React, {Component}  from 'react'
import { Text, View, AsyncStorage } from 'react-native';
import AppButton from './AppButton';
import { clearNotifications, setNotifications } from './NotificationHellper';
import { Actions } from 'react-native-router-flux';

class DeckView extends Component {
    state = {
        deck: [],
        hint: false
    }
    componentDidMount(props) {
        console.log(this.props)
        AsyncStorage.getItem('Decks')
        .then(response => {
            let elRes = JSON.parse(response)
            let thisDeck = elRes[this.props.id]
            this.setState({deck: thisDeck})
        })
        .catch(error => { console.log(error)})
    }

    onStartQuiz() {
        clearNotifications()
        .then(setNotifications)
        Actions.Quiz({id: this.props.id})
    }
    render() {
        console.log(this.state);
        return (
            <View>
                {
                    this.state.deck ?
                    <View>
                    <View>
                        <Text>Title {this.state.deck.title}</Text>
                    </View>
                    <View>
                        {this.state.deck.questions ? 
                            <Text>Cards: {this.state.deck.questions.length}</Text>
                            :  <Text>Cards: 0</Text>
                        }
                    </View>
                    </View>
                    :null
                }
                <AppButton onPress={() => { Actions.CreateQuest({id: this.props.id})}} buttonText='Add Question' />
                <AppButton onPress={() => { this.onStartQuiz()}} buttonText='Start Quiz' />
            </View>
        )
    }
}

export default DeckView;