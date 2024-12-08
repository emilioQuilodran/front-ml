import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../organism/Header';
import CardProduct from '../organism/CardProduct';
import Breadcrumb from '../organism/Breadcrumb';
import Footer from '../organism/Footer';
const ProductPage = ({ products }) => {
    return (_jsxs("main", { children: [_jsx(Header, {}), _jsx(Breadcrumb, { items: ['Inicio', 'Productos'] }), _jsx("div", { className: 'product-page', children: _jsx("div", { className: 'product-list', children: products.map((product, index) => (_jsx(CardProduct, { title: product.title, price: product.price, image: product.image, id: product.id, condition: product.condition, free_shipping: false, state_name: product.state_name }, index))) }) }), _jsx(Footer, {})] }));
};
export default ProductPage;
