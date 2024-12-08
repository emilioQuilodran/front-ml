import React, { useState } from 'react';
import CartPopover from '../molecules/CartPopover';
import { ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    const togglePopover = () => {
        setPopoverOpen(!isPopoverOpen);
    };

    return (
        <footer>
            <ShoppingCart
                className="cart-icon"
                onClick={togglePopover}
            />
            <CartPopover isOpen={isPopoverOpen} onClose={() => setPopoverOpen(false)} />
        </footer>
    );
};

export default Footer;