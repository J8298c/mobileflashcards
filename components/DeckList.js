import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { gettingAllDecks } from '../actions/index';
import { Entypo } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';


class DeckList extends Component {
    //TODO: local state to grab users input might not need it
    componentDidMount() {
        //fetching decks to displays thier titles
        this.props.gettingAllDecks();
    }

    render() {
        const { containerStyle, textStyle, titleFormContainer, iconStyle } = styles;
        let data;
        this.props.decks ? 
        data = Object.keys(this.props.decks): data = null
        console.log(data);
        return (
            <View style={containerStyle}>
               {
                   data !== null ?
                   data.map(title => (
                       <TouchableHighlight key={title} onPress={() => { Actions.deckview({id: title})}}>
                           <Text style={textStyle}>
                                {title}
                            </Text>
                        </TouchableHighlight>
                   )) : null
               }
               <TouchableHighlight onPress={() => {Actions.deckCreate()}} >
                 <Entypo name='add-to-list' size={35} style={iconStyle}/>  
               </TouchableHighlight>
            </View>
        )
    }
}
function mapStateToProps(state) {
    const { decks } = state;
    console.log(decks)
    return {
        decks
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 25,
    },
    textStyle: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    iconStyle: {
        justifyContent: 'flex-end',
        marginTop: 150
    },
    titleFormContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default connect(mapStateToProps, { gettingAllDecks })(DeckList);