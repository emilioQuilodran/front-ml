import { create } from 'zustand';
export const useCartStore = create(set => ({
    cart: [],
    addToCart: (product) => set(state => {
        const exists = state.cart.some(item => item.id === product.id);
        if (!exists) {
            return { cart: [...state.cart, product] };
        }
        return state;
    }),
    removeFromCart: (id) => set(state => ({
        cart: state.cart.filter(product => product.id !== id),
    })),
    clearCart: () => set({ cart: [] }),
}));
