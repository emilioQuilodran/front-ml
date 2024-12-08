import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../app/components/atoms/Input';
const SearchController = ({ searchProducts }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = async (e) => {
        e.preventDefault();
        const results = await searchProducts.execute(query);
        navigate('/items', { state: { products: results } });
    };
    return (_jsx("form", { children: _jsx(Input, { type: "text", value: query, handleOnChange: (e) => setQuery(e?.target?.value), placeholder: "Nunca dejes de buscar", onSubmit: handleSearch }) }));
};
export default SearchController;
