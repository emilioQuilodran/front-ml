import { Product } from '../models/Product';
interface ProductStore {
    products: Product[];
    product: Product;
    setProducts: (products: Product[]) => void;
    setProduct: (product: Product) => void;
}
export declare const useProductStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ProductStore>>;
export {};
