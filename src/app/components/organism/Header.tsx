import React from 'react';
import logo from '../../../assets/logoMeli.png'
import SearchController from '../../../interface/controllers/SearchController';
import { Container } from 'inversify';
import 'reflect-metadata';
import { ProductRepository } from '../../../infrastructure/ProductRepository';
import { SearchProducts } from '../../../application/usecases/SearchProducts';
import { GetProductDetails } from '../../../application/usecases/GetProductDetails';
import { useNavigate } from 'react-router-dom';

const container = new Container();
container.bind<ProductRepository>('ProductRepositoryInterface').to(ProductRepository);
container.bind<SearchProducts>(SearchProducts).toSelf();
container.bind<GetProductDetails>(GetProductDetails).toSelf();

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className={'header'}>
            <div className={'logo-container'}>
                <img 
                    src={logo} 
                    alt="Mercado Libre" 
                    className={'logo'}
                    onClick={() => navigate('/')} 
                />
            </div>
            <SearchController searchProducts={container.get(SearchProducts)} />
        </header>
    )
}
export default Header;