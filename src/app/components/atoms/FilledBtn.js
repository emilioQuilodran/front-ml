import { jsx as _jsx } from "react/jsx-runtime";
const FilledBtn = ({ handlerOnClick, text, disabled = false, type = 'button', padding }) => {
    return (_jsx("button", { className: `btn`, style: { padding: padding }, type: type, disabled: disabled, onClick: handlerOnClick, children: _jsx("p", { children: text }) }));
};
export default FilledBtn;
