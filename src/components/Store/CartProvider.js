import { useState } from 'react';
import CartContext from './cart-contex';

const CartProvider = props => {
    const [items, setItems] = useState([]);
    
    const addItemToCartHandler = (item) => {
        setItems(prevItems => [...prevItems, item]);
    };
    
    const removeItemFromCartHandler = id => {
        setItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== id);
            return updatedItems;
        });
    };

    const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    console.log("inside CartProvider cartContext", cartContext);

    return (
        <CartContext.Provider 
        value={cartContext}>
        {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
