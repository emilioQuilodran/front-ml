import { Product } from '../../models/Product';
import * as CartRepositoryInterface from '../repositories/CartRepositoryInterface';
export declare class AddProductCart {
    private cartRepository;
    constructor(cartRepository: CartRepositoryInterface.CartRepositoryInterface);
    execute(product: Product): void;
}
