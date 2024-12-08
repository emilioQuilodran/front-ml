import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    value: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    onSubmit: (e: React.FormEvent) => Promise<void>;
}
declare const Input: React.FC<InputProps>;
export default Input;
