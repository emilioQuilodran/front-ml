import { injectable, inject } from 'inversify';
import { Product } from '../../models/Product';
import * as CartRepositoryInterface from '../repositories/CartRepositoryInterface';

@injectable()
export class AddProductCart {
    constructor(
        @inject('CartRepositoryInterface') private cartRepository: CartRepositoryInterface.CartRepositoryInterface
    ) {}
    
    execute(product: Product): void {
        return this.cartRepository.addToCart(product);
    }
}