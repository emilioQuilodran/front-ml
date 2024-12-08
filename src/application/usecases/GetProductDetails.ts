import { injectable, inject } from 'inversify';
import { Product } from '../../models/Product';
import * as ProductRepositoryInterface from '../repositories/ProductRepositoryInterface';

@injectable()
export class GetProductDetails {
    constructor(
        @inject('ProductRepositoryInterface') private productRepository: ProductRepositoryInterface.ProductRepositoryInterface
    ) {}

    async execute(id: string): Promise<Product> {
        return this.productRepository.getProductDetails(id);
    }
}