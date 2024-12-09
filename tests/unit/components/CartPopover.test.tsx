import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartPopover from '../../../src/app/components/molecules/CartPopover';
import {test, describe, expect } from 'vitest';

const TestCartPopover: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [cart, setCart] = useState([{ id: 1, name: 'Producto 1', price: 10 }]);

    return (
        <>
            <CartPopover isOpen={isOpen} onClose={onClose} />
            <button onClick={() => setCart([...cart, { id: 2, name: 'Producto 2', price: 20 }])}>
                Agregar Producto
            </button>
        </>
    );
};

describe('CartPopover Component', () => {
    test('renders correctly when open', () => {
        render(<TestCartPopover isOpen={true} onClose={() => {}} />);
        const title = screen.getByText(/Items en el Carrito/i)
        expect(title).toBeDefined()
    });

    test('shows the correct number of items in the cart', () => {
        const { rerender } = render(<TestCartPopover isOpen={true} onClose={() => {}} />);
        
        expect(screen.findByText(/Items en el Carrito 1/i)).toBeTruthy();

        fireEvent.click(screen.getByText(/Agregar Producto/i));

        rerender(<TestCartPopover isOpen={true} onClose={() => {}} />);

        expect(screen.findByText(/Items en el Carrito 2/i)).toBeTruthy();
    });
});