import { CartRepositoryInterface } from '../application/repositories/CartRepositoryInterface';
import { Product } from '../models/Product';
export declare class CartRepository implements CartRepositoryInterface {
    private cart;
    addToCart(product: Product): void;
    getCart(): Product[];
    removeFromCart(id: string): void;
    clearCart(): void;
}
