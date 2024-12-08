import { Product } from '../models/Product';
interface CartStore {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}
export declare const useCartStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CartStore>>;
export {};
