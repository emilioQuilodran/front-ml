import {create} from 'zustand';
import { Product } from '../models/Product';

interface ProductStore {
    products: Product[];
    product: Product;
    setProducts: (products: Product[]) => void;
    setProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>(set => ({
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