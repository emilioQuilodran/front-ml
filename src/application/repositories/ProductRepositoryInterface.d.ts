import { Product } from '../../models/Product';
export interface ProductRepositoryInterface {
    searchProducts(query: string): Promise<Product[]>;
    getProductDetails(id: string): Promise<Product>;
}
