import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FilledBtn from '../atoms/FilledBtn';
import { useNavigate } from 'react-router-dom';
const CardProduct = (item, index) => {
    const navigate = useNavigate();
    const handleRedirect = (id) => {
        navigate(`/items/${id}`);
    };
    return (_jsxs("div", { className: "card-product", children: [_jsxs("div", { children: [_jsx("img", { src: item?.image, alt: item.title, className: "product-image" }), _jsxs("div", { children: [_jsxs("p", { className: "product-price", children: ["$ ", item?.price?.amount] }), _jsx("h2", { className: "product-title", children: item.title }), _jsx(FilledBtn, { text: 'Ver producto', padding: '8px', handlerOnClick: () => handleRedirect(item.id) })] })] }), _jsxs("p", { children: [item.state_name, " "] })] }, index));
};
export default CardProduct;
