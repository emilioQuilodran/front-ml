export class CartRepository {
    constructor() {
        Object.defineProperty(this, "cart", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    addToCart(product) {
        this.cart.push(product);
    }
    getCart() {
        return this.cart;
    }
    removeFromCart(id) {
        this.cart = this.cart.filter(product => product.id !== id);
    }
    clearCart() {
        this.cart = [];
    }
}
