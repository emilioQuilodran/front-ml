import { injectable } from 'inversify';
import { Product } from '../models/Product';
import { ProductRepositoryInterface } from '../application/repositories/ProductRepositoryInterface';
import { useProductStore } from '../store/productStore';

@injectable()
export class ProductRepository implements ProductRepositoryInterface {
    private apiUrlSearch: string;
    
    constructor() {
        this.apiUrlSearch = import.meta.env.VITE_API_URL_SEARCH;
    }
    async searchProducts(query: string): Promise<Product[]> {
        const response = await fetch(`${this.apiUrlSearch}?q=${query}`);
        const data = await response.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filteredProducts = data.items.slice(0, 4).map((item: any) => ({
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

    async getProductDetails(id: string): Promise<Product> {
        const response = await fetch(`${this.apiUrlSearch}${id}`);
        const {item} = await response.json();

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
}