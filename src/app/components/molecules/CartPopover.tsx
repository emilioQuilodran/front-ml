import React, { useEffect, useState } from 'react';
import { useCartStore } from '../../../store/cartStore';

const CartPopover: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const cartItems = useCartStore(state => state.cart);
    const [items, setitems] = useState(0)
    
    useEffect(() => {
        setitems(cartItems.length)
    }, [cartItems.length])
    
    
    if (!isOpen) {
        return null;
    }

    return (
        <div className="cart-popover">
            <button className="close-button" onClick={onClose}>Cerrar</button>
            <h3>Items en el Carrito {items}</h3>
            <pre className="cart-items">{JSON.stringify(cartItems, null, 2)}</pre>
        </div>
    );
};

export default CartPopover;