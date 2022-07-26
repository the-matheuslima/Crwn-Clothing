import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import Button from '../button/';
import CartItem from '../cart-item/index';

import './style.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToPageCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems ? cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                )) : 'null'}
            </div>
            <Button onClick={goToPageCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;
