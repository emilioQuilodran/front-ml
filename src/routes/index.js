import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../app/App';
import ProductPage from '../app/components/templates/ProductPage';
import { useProductStore } from '../store/productStore';
import ProductDetail from '../app/components/templates/ProductDetail';
const RoutesComponent = () => {
    const products = useProductStore(state => state.products);
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(App, {}) }), _jsx(Route, { path: "/items", element: _jsx(ProductPage, { products: products }) }), _jsx(Route, { path: "/items/:id", element: _jsx(ProductDetail, {}) })] }) }));
};
export default RoutesComponent;
