import { Product } from '../../models/Product';
import * as ProductRepositoryInterface from '../repositories/ProductRepositoryInterface';
export declare class SearchProducts {
    private productRepository;
    constructor(productRepository: ProductRepositoryInterface.ProductRepositoryInterface);
    execute(query: string): Promise<Product[]>;
}
