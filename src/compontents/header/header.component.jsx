import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utile';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import './header.style.scss';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.seletors';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to='/shop'>Shop</Link>
            <Link className="option" to='/shop'>Contact</Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()} > SignOut </div>) :
                    (<Link className="option" to="/signin">SignIn</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : ( <CartDropDown /> ) 
        } 
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser, 
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);