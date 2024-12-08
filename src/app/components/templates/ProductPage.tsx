import React from 'react';
import Header from '../organism/Header';
import { Product } from '../../../models/Product';
import CardProduct from '../organism/CardProduct';
import Breadcrumb from '../organism/Breadcrumb';
import Footer from '../organism/Footer';

interface ProductPageProps {
    products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
    return (
        <main>
            <Header />
            <Breadcrumb items={['Inicio', 'Productos']} />
            <div className={'product-page'}>
                <div className={'product-list'}>
                    {products.map((product, index) => (
                       <CardProduct
                        key={index}
                        title={product.title}
                        price={product.price}
                        image={product.image} 
                        id={product.id} 
                        condition={product.condition} 
                        free_shipping={false} 
                        state_name={product.state_name}
                    />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ProductPage;