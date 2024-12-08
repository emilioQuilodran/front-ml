import { Product } from "../../models/Product";

export interface CartRepositoryInterface {
    addToCart(product: Product): void;
    getCart(): Product[];
    removeFromCart(id: string): void;
    clearCart(): void;
}