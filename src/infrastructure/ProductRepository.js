var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { injectable } from 'inversify';
import { useProductStore } from '../store/productStore';
let ProductRepository = class ProductRepository {
    constructor() {
        Object.defineProperty(this, "apiUrlSearch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.apiUrlSearch = import.meta.env.VITE_API_URL_SEARCH;
    }
    async searchProducts(query) {
        const response = await fetch(`${this.apiUrlSearch}?q=${query}`);
        const data = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filteredProducts = data.items.slice(0, 4).map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.picture,
            condition: item.condition,
            free_shipping: item.free_shipping,
            state_name: item.state_name,
        }));
        useProductStore.getState().setProducts(filteredProducts);
        return filteredProducts;
    }
    async getProductDetails(id) {
        const response = await fetch(`${this.apiUrlSearch}${id}`);
        const { item } = await response.json();
        return {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.picture,
            condition: item.condition,
            free_shipping: item.free_shipping,
            state_name: item.state_name,
            description: item.description,
        };
    }
};
ProductRepository = __decorate([
    injectable(),
    __metadata("design:paramtypes", [])
], ProductRepository);
export { ProductRepository };
