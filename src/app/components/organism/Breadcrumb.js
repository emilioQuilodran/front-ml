import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Breadcrumb = ({ items }) => {
    return (_jsx("nav", { className: "breadcrumb", children: items.map((item, index) => (_jsxs("span", { className: "breadcrumb-item", children: [item, index < items.length - 1 && _jsx("span", { className: "breadcrumb-separator", children: " > " })] }, index))) }));
};
export default Breadcrumb;
