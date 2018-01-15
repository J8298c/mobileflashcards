import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { gettingADeck } from '../actions/index';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

class DeckView extends Component {
    componentDidMount(props) {
        console.log(this.props.id);
        this.props.gettingADeck(this.props.id)
    }
    componentWillReceiveProps(nextprops) {
        if(this.props.deck !== nextprops.deck) {
            this.props.deck = nextprops.deck
        }
    }
    render() {
        console.log('decks',this.props.deck)
        return (
            <View>
               {/* {
                   this.props.deck ?
                   <View style={styles.cardStyle}>
                   <Text style={styles.textStyle}>{this.props.deck.title}</Text>
                   <Text style={styles.textStyle}>Cards: {this.props.deck.questions ? 
                       this.props.deck.questions.length 
                       :  0 + ' create a card for your deck'}</Text>  
               </View>
               :null
               } */}
                 <Button buttonText='Add Card' onPress={() => {Actions.createcard({id: this.props.id})}} />
                <Button buttonText='Start Quiz' onPress={() => { Actions.quiz({id: this.props.id})}} />
            </View>

        )
    }
}

const styles = {
    cardStyle : {
        alignItems: 'center'
    },
    textStyle : {
        fontSize: 40,
    }
}

function mapDispatchToProps({deck}) {
    console.log(deck);
    return {
        deck
    }
}
export default connect(mapDispatchToProps, { gettingADeck })(DeckView)