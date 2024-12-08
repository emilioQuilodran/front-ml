import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import CartPopover from '../molecules/CartPopover';
import { ShoppingCart } from 'lucide-react';
const Footer = () => {
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const togglePopover = () => {
        setPopoverOpen(!isPopoverOpen);
    };
    return (_jsxs("footer", { children: [_jsx(ShoppingCart, { className: "cart-icon", onClick: togglePopover }), _jsx(CartPopover, { isOpen: isPopoverOpen, onClose: () => setPopoverOpen(false) })] }));
};
export default Footer;
