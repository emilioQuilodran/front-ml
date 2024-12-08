import { CartRepositoryInterface } from '../application/repositories/CartRepositoryInterface';
import { Product } from '../models/Product';

export class CartRepository implements CartRepositoryInterface {
    private cart: Product[] = [];

    addToCart(product: Product): void {
        this.cart.push(product);
    }

    getCart(): Product[] {
        return this.cart;
    }

    removeFromCart(id: string): void {
        this.cart = this.cart.filter(product => product.id !== id);
    }

    clearCart(): void {
        this.cart = [];
    }
}