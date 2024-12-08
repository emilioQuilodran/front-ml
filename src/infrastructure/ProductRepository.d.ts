import { Product } from '../models/Product';
import { ProductRepositoryInterface } from '../application/repositories/ProductRepositoryInterface';
export declare class ProductRepository implements ProductRepositoryInterface {
    private apiUrlSearch;
    constructor();
    searchProducts(query: string): Promise<Product[]>;
    getProductDetails(id: string): Promise<Product>;
}
