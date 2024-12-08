import { create } from 'zustand';
export const useProductStore = create(set => ({
    products: [],
    product: {
        id: '',
        title: '',
        price: {
            amount: 0,
            currency: ''
        },
        image: '',
        condition: '',
        free_shipping: false,
        state_name: ''
    },
    setProducts: (products) => set({ products }),
    setProduct: (product) => set({ product }),
}));
