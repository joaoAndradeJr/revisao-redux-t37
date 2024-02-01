import { AnyAction } from 'redux';
import { ADD_TO_CART, SET_NAME } from '../actions';

const INITIAL_STATE = {
  name: '',
  total: 0,
  cart: [],
}

function cartReducer(state = INITIAL_STATE, action: AnyAction) {
  switch(action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price,
      };
    default:
    return state;
  }
}

export default cartReducer;
