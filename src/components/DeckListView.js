import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { gettingAllDecks } from '../actions/index';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { Entypo } from '@expo/vector-icons';

class DeckListView extends Component {
    componentDidMount() {
        //return all decks
        this.props.gettingAllDecks();
    }


    render() {
        let data;
        this.props.decks ? data = this.props.decks : data = null
        return (
            <ScrollView style={styles.mainContainer}>
                {
                    this.props.decks ? 
                    _.map(data, (deck) => (
                        <View key={deck.title} style={styles.deckContainer}>
                            <TouchableOpacity onPress={() => { Actions.deckview({ id: deck.title})}}>
                                <Text style={styles.textStyle}>Deck Name: {deck.title}</Text>
                            </TouchableOpacity>
                            <Text style={styles.textStyle}> Deck Cards {deck.questions? deck.questions.length : 0}</Text>
                        </View>
                    ))
                   : null
                }
                <View style={styles.iconContainer}>
               <TouchableOpacity onPress={() => {Actions.deckcreate()}} >
                 <Entypo name='add-to-list' size={35} style={styles.iconStyle}/>  
               </TouchableOpacity>
               </View>
            </ScrollView>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1,
    }, 
    deckContainer: {
        alignItems: 'center',
        marginTop: 25,
    },
    textStyle: {
        fontSize: 18,

    },
    iconStyle: {
        justifyContent: 'flex-end',
        marginTop: 75,
        alignItems: 'center'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
    }
}
function mapStateToProps({decks}) {
    console.log(decks)
    return {
        decks
    }
}
export default connect(mapStateToProps, { gettingAllDecks })(DeckListView)