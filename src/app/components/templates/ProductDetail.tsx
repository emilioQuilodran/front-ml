import React from 'react';
import { Container } from 'inversify';
import 'reflect-metadata';
import Header from '../organism/Header';
import { GetProductDetails } from '../../../application/usecases/GetProductDetails';
import { ProductRepository } from '../../../infrastructure/ProductRepository';
import ProductDetailController from '../../../interface/controllers/ProductDetailController';
import Footer from '../organism/Footer';
import { CartRepositoryInterface } from '../../../application/repositories/CartRepositoryInterface';
import { CartRepository } from '../../../infrastructure/CartRepository';
import { AddProductCart } from '../../../application/usecases/AddProductCart';


const container = new Container();
container.bind<ProductRepository>('ProductRepositoryInterface').to(ProductRepository);
container.bind<GetProductDetails>(GetProductDetails).toSelf();
container.bind<CartRepositoryInterface>('CartRepositoryInterface').to(CartRepository);
container.bind<AddProductCart>(AddProductCart).toSelf();


const ProductDetail: React.FC = () => {
    return (
        <main >
            <Header />
            <div className={'product-page detail'}>
                <ProductDetailController getProductDetails={container.get(GetProductDetails)} />
            </div>
            <Footer />
        </main>
    );
};

export default ProductDetail;