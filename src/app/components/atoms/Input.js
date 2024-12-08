import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search } from 'lucide-react';
const Input = ({ label, value, handleOnChange, placeholder, onSubmit }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit(e);
        }
    };
    return (_jsxs("div", { className: "input-container", children: [label && _jsx("label", { className: "input-label", children: label }), _jsxs("div", { className: "input-with-icon", children: [_jsx("input", { className: 'input-field', type: "text", value: value, onChange: (e) => handleOnChange(e), onKeyDown: handleKeyDown, placeholder: placeholder }), _jsx(Search, { className: "input-icon", onClick: onSubmit })] })] }));
};
export default Input;
