import { GET_ALL_DECKS, GET_A_DECK } from '../actions/types';

const appReducers = (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_DECKS: {
            return Object.assign({}, state, { decks: action.decks });
        }
        case GET_A_DECK: {
            return Object.assign({}, state, { deck: action.deck})
        }
        default: 
            return state;
    }
}

export default appReducers;