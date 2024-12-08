import React from 'react';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    onSubmit: (e: React.FormEvent) => Promise<void>;
}

const Input: React.FC<InputProps> = ({ label, value, handleOnChange, placeholder, onSubmit }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSubmit(e as React.FormEvent);
        }
    };
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <div className="input-with-icon">
                <input
                    className='input-field' 
                    type="text" 
                    value={value} 
                    onChange={(e) => handleOnChange(e)}
                    onKeyDown={handleKeyDown} 
                    placeholder={placeholder} 
                />
                <Search
                    className="input-icon"
                    onClick={onSubmit}
                />
            </div>
        </div>
    );
};

export default Input;