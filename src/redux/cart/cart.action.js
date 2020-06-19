import CartActionType from './cart.types';

export const ToggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN
});
 
export const addItems = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionType.CLEAR_ITEMS_FROM_CART,
    payload: item
});
export const removeItem = item => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
});