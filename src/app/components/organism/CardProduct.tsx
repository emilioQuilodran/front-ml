import React from 'react';
import { Product } from '../../../models/Product';
import FilledBtn from '../atoms/FilledBtn';
import { useNavigate } from 'react-router-dom';


const CardProduct: React.FC<Product> = (item, index) => {
    const navigate = useNavigate();
    const handleRedirect = (id: string) => {
        navigate(`/items/${id}`);
    }
    return (
        <div className="card-product" key={index}>
            <div>
                <img src={item?.image} alt={item.title} className="product-image" />
                <div>
                    <p className="product-price">$ {item?.price?.amount}</p>
                    <h2 className="product-title">{item.title}</h2>
                    <FilledBtn 
                        text={'Ver producto'}
                        padding='8px' 
                        handlerOnClick={() => handleRedirect(item.id)} 
                    />
                </div>
            </div>
            <p>{item.state_name} </p>
        </div>
    );
};

export default CardProduct;