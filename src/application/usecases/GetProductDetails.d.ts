import { Product } from '../../models/Product';
import * as ProductRepositoryInterface from '../repositories/ProductRepositoryInterface';
export declare class GetProductDetails {
    private productRepository;
    constructor(productRepository: ProductRepositoryInterface.ProductRepositoryInterface);
    execute(id: string): Promise<Product>;
}
