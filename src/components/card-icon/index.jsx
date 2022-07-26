import { useContext } from 'react';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';

import './style.scss';

const CardIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const tooggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
        console.log('bunda');
    }

    console.log(cartCount);

    return (
        <div className='cart-icon-container' onClick={tooggleIsCartOpen}>
            <img src={ShoppingIcon} alt="" />
            <span className='item-count' >{cartCount}</span>
        </div>

    )
}

export default CardIcon