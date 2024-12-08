import { injectable, inject } from 'inversify';
import { Product } from '../../models/Product';
import * as ProductRepositoryInterface from '../repositories/ProductRepositoryInterface';

@injectable()
export class SearchProducts {
    
    constructor(
        @inject('ProductRepositoryInterface')
        private productRepository: ProductRepositoryInterface.ProductRepositoryInterface
    ) {}

    async execute(query: string): Promise<Product[]> {
        return this.productRepository.searchProducts(query);
    }
}