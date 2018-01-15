import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import { savingADeck } from '../actions/index';


class DeckCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.savingADeck(this.state.text);
    }

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <TextInput 
                    placeholder='Enter the title of your new Deck'
                    onChangeText={(text) => this.setState({text})}
                    style={styles.inputStyle}
                />
                <Button buttonText='Save' onPress={this.onSubmit} />
            </View>
        )
    }
}

export default connect(null, { savingADeck })(DeckCreate);

const styles = {
    containerStyle: {
        flex: 1,
    },
    inputStyle: {
        alignItems: 'center',
        marginTop: 45,
        marginBottom: 55,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginLeft: 55,
        marginRight: 55
    }
}