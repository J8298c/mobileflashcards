import React from 'react';
import { ScrollView, Text } from 'react-native';
import { gettingADeck } from '../actions/index';
import { connect } from 'react-redux';


class Quiz extends Component {
	componentDidMount(){
		this.props.gettingADeck(this.props.id)
	}
	render() {
		return (
			<ScrollView>

			</ScrollView>
		)
	}
}

function mapStateToProps(state) {
	const { deck } = state;
	return {
		deck
	}
}

export default connect(mapStateToProps, { gettingADeck })(Quiz);
