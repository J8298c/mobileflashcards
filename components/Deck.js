import React, { Component } from 'react';
import { View } from 'react-native';
import Card from './Card';
import { connect } from 'react-redux';
import { fetchAllDecks } from '../actions/index';

class Deck extends Component {
  componentDidMount() {
   this.props.fetchAllDecks();

  }
  render(props) {
    return(
      <View style={styles.containerStyle}>
      {
       this.props.decks ? 
       this.props.decks.map(deck => (
          <Card deck={deck}/>
       ))
         : null
      }
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    state
  }
}
export default connect(mapStateToProps, { fetchAllDecks })(Deck);
