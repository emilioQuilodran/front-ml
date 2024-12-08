import React from 'react';
import { SearchProducts } from '../../application/usecases/SearchProducts';
interface Props {
    searchProducts: SearchProducts;
}
declare const SearchController: React.FC<Props>;
export default SearchController;
