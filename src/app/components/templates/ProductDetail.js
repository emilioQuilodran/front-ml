import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from 'inversify';
import 'reflect-metadata';
import Header from '../organism/Header';
import { GetProductDetails } from '../../../application/usecases/GetProductDetails';
import { ProductRepository } from '../../../infrastructure/ProductRepository';
import ProductDetailController from '../../../interface/controllers/ProductDetailController';
import Footer from '../organism/Footer';
import { CartRepository } from '../../../infrastructure/CartRepository';
import { AddProductCart } from '../../../application/usecases/AddProductCart';
const container = new Container();
container.bind('ProductRepositoryInterface').to(ProductRepository);
container.bind(GetProductDetails).toSelf();
container.bind('CartRepositoryInterface').to(CartRepository);
container.bind(AddProductCart).toSelf();
const ProductDetail = () => {
    return (_jsxs("main", { children: [_jsx(Header, {}), _jsx("div", { className: 'product-page detail', children: _jsx(ProductDetailController, { getProductDetails: container.get(GetProductDetails) }) }), _jsx(Footer, {})] }));
};
export default ProductDetail;
