import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { gettingAllDecks } from '../actions/index';

class DeckList extends Component {
    //TODO: local state to grab users input might not need it
    state ={};
    componentDidMount() {
        //fetching decks to displays thier titles
        this.props.gettingAllDecks();
    }

    addNewDeck = (title) => {
        //TODO: set up meth to add a new deck to the list
        //by taking a title from users input
    }

    render() {
        return (
            <View>
                <Text>
                    Ill be displaying the titles of decks
                </Text>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, { gettingAllDecks })(DeckList);