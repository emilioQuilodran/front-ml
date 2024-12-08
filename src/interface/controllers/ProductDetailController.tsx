import React, { useEffect, useState } from 'react';
import { GetProductDetails } from '../../application/usecases/GetProductDetails';
import { useParams } from 'react-router-dom';
import { Product } from '../../models/Product';
import FilledBtn from '../../app/components/atoms/FilledBtn';
import { useCartStore } from '../../store/cartStore';

interface Props {
    getProductDetails: GetProductDetails;
}

const ProductDetailController: React.FC<Props> = ({ getProductDetails }) => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const addToCart = useCartStore(state => state.addToCart);
    const cart = useCartStore(state => state.cart);
    
    useEffect(() => {
        console.log("cart", cart)
        const fetchProduct = async () => {
            const productData = await getProductDetails.execute(id!);
            setProduct(productData);
        };
        fetchProduct();
    }, [id, getProductDetails, cart]);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <section style={{textAlign: 'left'}}>
            <div style={{display: "flex", justifyContent: 'center', gap: '2em'}}>
                <img src={product?.image} alt={product?.title} style={{width:'650px', height: 'auto'}} />
                <div>
                    <h2>{product?.title}</h2>
                    <p>Precio: ${product?.price?.amount}</p>
                    <FilledBtn 
                        text={'Añadir al carrito'}
                        padding='8px' 
                        handlerOnClick={() => handleAddToCart(product)} 
                    />
                </div>
            </div>
            <div>
                <h2>Descripcion del producto: </h2>
                <p className='description'>{product?.description}</p>
            </div>
        </section>
        
    );
};

export default ProductDetailController;