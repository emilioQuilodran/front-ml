import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilledBtn from '../../app/components/atoms/FilledBtn';
import { useCartStore } from '../../store/cartStore';
const ProductDetailController = ({ getProductDetails }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const addToCart = useCartStore(state => state.addToCart);
    const cart = useCartStore(state => state.cart);
    useEffect(() => {
        console.log("cart", cart);
        const fetchProduct = async () => {
            const productData = await getProductDetails.execute(id);
            setProduct(productData);
        };
        fetchProduct();
    }, [id, getProductDetails, cart]);
    const handleAddToCart = (product) => {
        addToCart(product);
    };
    if (!product)
        return _jsx("div", { children: "Cargando..." });
    return (_jsxs("section", { style: { textAlign: 'left' }, children: [_jsxs("div", { style: { display: "flex", justifyContent: 'center', gap: '2em' }, children: [_jsx("img", { src: product?.image, alt: product?.title, style: { width: '650px', height: 'auto' } }), _jsxs("div", { children: [_jsx("h2", { children: product?.title }), _jsxs("p", { children: ["Precio: $", product?.price?.amount] }), _jsx(FilledBtn, { text: 'Añadir al carrito', padding: '8px', handlerOnClick: () => handleAddToCart(product) })] })] }), _jsxs("div", { children: [_jsx("h2", { children: "Descripcion del producto: " }), _jsx("p", { className: 'description', children: product?.description })] })] }));
};
export default ProductDetailController;
