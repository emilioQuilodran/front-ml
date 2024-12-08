import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from '../../../assets/logoMeli.png';
import SearchController from '../../../interface/controllers/SearchController';
import { Container } from 'inversify';
import 'reflect-metadata';
import { ProductRepository } from '../../../infrastructure/ProductRepository';
import { SearchProducts } from '../../../application/usecases/SearchProducts';
import { GetProductDetails } from '../../../application/usecases/GetProductDetails';
import { useNavigate } from 'react-router-dom';
const container = new Container();
container.bind('ProductRepositoryInterface').to(ProductRepository);
container.bind(SearchProducts).toSelf();
container.bind(GetProductDetails).toSelf();
const Header = () => {
    const navigate = useNavigate();
    return (_jsxs("header", { className: 'header', children: [_jsx("div", { className: 'logo-container', children: _jsx("img", { src: logo, alt: "Mercado Libre", className: 'logo', onClick: () => navigate('/') }) }), _jsx(SearchController, { searchProducts: container.get(SearchProducts) })] }));
};
export default Header;
