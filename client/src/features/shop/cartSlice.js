import * as ActionTypes from './ActionTypes';

export const Cart = ( state = {
    cart: [],
    message: ''
}, action) => {

    if (action.type === ActionTypes.UPDATE_CART) {
        let find = state.cart.find(cartItem => cartItem.id === action.itemId);

        if (find) {
            const newQuantity = parseInt(find.quantity) + parseInt(action.quantity);
            const update = state.cart.map(cartItem => 
                cartItem.id === action.itemId ? {...cartItem, quantity: parseInt(newQuantity)} 
                : cartItem);
            return {...state, cart: update}
            
        } else {
            const newCartItem = {
                id: action.itemId,
                quantity: parseInt(action.quantity)
            };
            return {...state, cart: state.cart.concat(newCartItem)}
        }

    } else if (action.type === ActionTypes.REMOVE_CART_ITEM) {
        const update = state.cart.filter(cartItem => cartItem.id !== action.itemId);
        return {...state, cart: update}

    } else if (action.type === ActionTypes.EMPTY_CART) {
        return {...state, cart: []}

    } else {
        return state;
    }
};