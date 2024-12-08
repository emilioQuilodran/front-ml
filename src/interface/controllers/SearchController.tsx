import React, { useState } from 'react';
import { SearchProducts } from '../../application/usecases/SearchProducts';
import { Product } from '../../models/Product';
import { useNavigate } from 'react-router-dom';
import Input from '../../app/components/atoms/Input';

interface Props {
    searchProducts: SearchProducts;
}

const SearchController: React.FC<Props> = ({ searchProducts }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const results: Product[] = await searchProducts.execute(query);
        navigate('/items', { state: { products: results } });
    };

    return (
        <form>
            <Input
                type="text" 
                value={query} 
                handleOnChange={(e) => setQuery(e?.target?.value)} 
                placeholder="Nunca dejes de buscar"
                onSubmit={handleSearch} 
            />
        </form>
    );
};

export default SearchController;