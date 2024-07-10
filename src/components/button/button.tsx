// src/components/Button.tsx
import React from 'react';
import './button.css';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', className = 'Login' }) => {
    return (
        <button type={type} onClick={onClick} className={`button p-0`}>
            {children}
        </button>
    );
};

export default Button;
