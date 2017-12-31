import React, { Component } from 'react';
import { Text, View } from 'react-native';

class DeckView extends Component {
    componentDidMount(props) {
        //get the id from props 
        //and fetch the current deck by id
        console.log(this.props);
    }
    render(props) {
        return (
            <View>
                <Text>IM the view for deckview</Text>
            </View>
        )
    }
}

export default DeckView;
