import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY} from '../actions/cartTypes'

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {

    let cart = state.cart;

    switch (action.type) {

        case ADD_TO_CART:
let addNewcart = cart;
addNewcart.push(action.payload);

            return {
                ...state,
                cart: addNewcart
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: cart.filter(item => item.product.id !== action.payload.productId)
            };

        case UPDATE_CART_QUANTITY:

            let item = cart.find(item => item.product.id === action.payload.productId);

            let newCart = cart.filter(item => item.product.id !== action.payload.productId);

            item.quantity = action.payload.quantity;

            newCart.push(item);

            return {
                ...state,
                cart: newCart
            };

        default:
            return state;
    }
};

export default cartReducer;