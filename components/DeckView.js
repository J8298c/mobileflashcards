import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { gettingADeck } from '../actions/index';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

class DeckView extends Component {
    componentDidMount(props) {
        //get the id from props 
        //and fetch the current deck by id
        this.props.gettingADeck(this.props.id);

    }
    render(props) {
        console.log(this.props.deck, 'deck in props');
        return (
            <View>
                {
                    this.props.deck ?
                    <View style={styles.cardStyle}>
                        <Text style={styles.textStyle}>{this.props.deck.title}</Text>
                        <Text style={styles.textStyle}>Cards: {this.props.deck.questions.length}</Text>  
                    </View>
                    :null
                }
                <Button buttonText='Add Card' onPress={() => {Actions.addcard()}} />
                <Button buttonText='Start Quiz' onPress={() => { Actions.quiz()}} />
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

function mapStateToProps(state) {
    const { deck } = state;
    return {
        deck
    }
}

export default connect(mapStateToProps, { gettingADeck })(DeckView);