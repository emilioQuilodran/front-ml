import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useCartStore } from '../../../store/cartStore';
const CartPopover = ({ isOpen, onClose }) => {
    const cartItems = useCartStore(state => state.cart);
    const [items, setitems] = useState(0);
    useEffect(() => {
        setitems(cartItems.length);
    }, [cartItems.length]);
    if (!isOpen) {
        return null;
    }
    return (_jsxs("div", { className: "cart-popover", children: [_jsx("button", { className: "close-button", onClick: onClose, children: "Cerrar" }), _jsxs("h3", { children: ["Items en el Carrito ", items] }), _jsx("pre", { className: "cart-items", children: JSON.stringify(cartItems, null, 2) })] }));
};
export default CartPopover;
