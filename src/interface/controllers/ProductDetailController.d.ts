import React from 'react';
import { GetProductDetails } from '../../application/usecases/GetProductDetails';
interface Props {
    getProductDetails: GetProductDetails;
}
declare const ProductDetailController: React.FC<Props>;
export default ProductDetailController;
