import { GET_ALL_DECKS } from '../actions/types';

const appReducer = (state={}, action) => {
  switch(action.type) {
    case GET_ALL_DECKS:
      const { decks } = action;
      const newState = Object.assign({}, state, { decks })
      return newState;
    default:
      return state;
  }
}
export default appReducer;
