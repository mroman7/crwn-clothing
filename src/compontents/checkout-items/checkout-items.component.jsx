import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItems, removeItem } from '../../redux/cart/cart.action';

import './checkout-item.component.scss';

const CheckoutItems = ({ cartItem, clearItem, addItem, removeItems }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItems(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)} >&#10005;</div>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItems(item)),
    removeItems: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItems);