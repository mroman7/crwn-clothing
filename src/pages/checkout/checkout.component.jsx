import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.seletors';
import CheckoutItems from '../../compontents/checkout-items/checkout-items.component';
import StripeCheckoutButton from '../../compontents/stripe-button/stripe-button.component';
import './checkout.style.scss';

const Checkout = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>

            <div className="header-block">
                <span>Description</span>
            </div>

            <div className="header-block">
                <span>Quantity</span>
            </div>

            <div className="header-block">
                <span>Price</span>
            </div>

            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem} />)            
        }
        <div className="total">Total: ${cartTotal} </div>
        <div className="text-warning">
            Please Use the following test information for Stripe <br />
             4242 4242 4242 4242 4242 , 01/21 , cvc = 123
        </div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal      
});

export default connect(mapStateToProps)(Checkout);