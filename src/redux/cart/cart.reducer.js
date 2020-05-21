import CartActionType from './cart.types';
import { addItemsToCart } from './cart.utils';

const SET_INITIAL_VALUE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = SET_INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)

            };
        default:
            return state;
    }
};

export default CartReducer;