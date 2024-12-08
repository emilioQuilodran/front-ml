import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../app/App';
import ProductPage from '../app/components/templates/ProductPage';
import { Product } from '../models/Product';
import { useProductStore } from '../store/productStore';
import ProductDetail from '../app/components/templates/ProductDetail';


const RoutesComponent = () => {
    const products: Product[] = useProductStore(state => state.products);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/items" element={<ProductPage products={products} />} />
                <Route path="/items/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;