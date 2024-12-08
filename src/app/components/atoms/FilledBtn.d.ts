import React from 'react';
interface FilledBtnProps {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    padding?: string;
    text: string;
    handlerOnClick: () => void;
}
declare const FilledBtn: React.FC<FilledBtnProps>;
export default FilledBtn;
