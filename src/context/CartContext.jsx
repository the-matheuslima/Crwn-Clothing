import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decressCartItem = (cartItems, cartItemToDecress) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToDecress.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItems) => cartItems.id !== cartItemToDecress.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToDecress.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};

const removeCartItem = (cartItems, cartItemToRemove) => {

    return cartItems.filter((cartItems) => cartItems.id !== cartItemToRemove.id)
}
export const CartContext = createContext({
    idcartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    decressItemFromCart: () => { },
    removeItemToCart: () => { },
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        console.log(cartItems);
    }

    const decressItemFromCart = (cartItemTodecress) => {
        setCartItems(decressCartItem(cartItems, cartItemTodecress));
    }

    const removeItemToCart = (cartItemTodecress) => {
        setCartItems(removeCartItem(cartItems, cartItemTodecress));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, decressItemFromCart, removeItemToCart, cartTotal };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>

    )

}