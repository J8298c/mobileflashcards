import { GET_ALL_DECKS, GET_A_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from '../actions/types';

const appReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_DECKS:

            const { decks } = action;
            const newDecksState = Object.assign({}, state, { decks});
            return newDecksState;

        case GET_A_DECK:

            const { deck } = action;
            const newDeckState = Object.assign({}, state, { deck });
            return newDeckState;

        default:
            return state;
    }
}

export default appReducer;