import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.seletors';
import { ToggleCartHidden } from '../../redux/cart/cart.action';
import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? 
                (cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))) 
                : (<span className="empty-message">Your Cart is Empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(ToggleCartHidden());   
        }}>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state)
});


export default withRouter(connect(mapStateToProps)(CartDropDown));