import CartActionType from './cart.types';
const SET_INITIAL_VALUE = {
    hidden: true
};

const CartReducer = (state = SET_INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default CartReducer;