import React from 'react';

interface FilledBtnProps {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    padding?: string;
    text: string;
    handlerOnClick: () => void;
}

const FilledBtn: React.FC<FilledBtnProps> = ({
    handlerOnClick,
    text,
    disabled = false,
    type = 'button',
    padding
}) => {
    return (
        <button
            className={`btn`}
            style={{padding: padding}}
            type={type}
            disabled={disabled}
            onClick={handlerOnClick}
        >
            <p>{text}</p>
        </button>
    );
};

export default FilledBtn;