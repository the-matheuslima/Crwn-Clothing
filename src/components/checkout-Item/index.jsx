import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './style.scss'
const CartItemCheckout = ({ cartItem }) => {
    const { decressItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const { name, quantity, price, imageUrl } = cartItem;

    const HandlerDecressQuantity = () => {
        decressItemFromCart(cartItem)
    }

    const HandlerAddQuantity = () => {
        addItemToCart(cartItem)
    }


    const HandlerRemoveItem = () => {
        removeItemToCart(cartItem)
    }

    return (
        <div className='checkout-item-container'>
            <div className="image-container">

                <img src={imageUrl} alt={name} />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={HandlerDecressQuantity}>
                    &#10094;
                </div>

                <span className="value">{quantity}</span>

                <div className="arrow" onClick={HandlerAddQuantity}>
                    &#10095;

                </div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={HandlerRemoveItem}>&#10005;</div>

        </div>
    );
}

export default CartItemCheckout;
