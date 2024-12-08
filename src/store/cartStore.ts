import {create} from 'zustand';
import { Product } from '../models/Product';

interface CartStore {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

export const useCartStore  = create<CartStore>(set => ({
    cart: [],
    addToCart: (product) => set(state => {
        const exists = state.cart.some(item => item.id === product.id);
        if (!exists) {
            return { cart: [...state.cart, product] }
        }
        return state;
    }),
    removeFromCart: (id) => set(state => ({
        cart: state.cart.filter(product => product.id !== id),
    })),
    clearCart: () => set({ cart: [] }),
}));