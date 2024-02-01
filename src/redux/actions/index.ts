import { ProductType } from '../../types';

export const SET_NAME = 'SET_NAME';
export const ADD_TO_CART = 'ADD_TO_CART';

export const setNameAction = (payload: string) => ({
  type: SET_NAME,
  payload,
});

export const addToCartAction = (payload: ProductType) => ({
  type: ADD_TO_CART,
  payload,
});
