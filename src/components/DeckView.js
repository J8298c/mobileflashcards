import React, {Component}  from 'react'
import { Text, View, AsyncStorage } from 'react-native';
import AppButton from './AppButton';
import { clearNotifications, setNotifications } from './NotificationHelper';
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
            <View style={styles.containerStyle}>
                {
                    this.state.deck ?
                    <View>
                    <View>
                        <Text style={styles.titleStyle}>Title {this.state.deck.title}</Text>
                    </View>
                    <View>
                        {this.state.deck.questions ? 
                            <Text style={styles.titleStyle}>Cards: {this.state.deck.questions.length}</Text>
                            :  <Text style={styles.titleStyle}>Cards: 0</Text>
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