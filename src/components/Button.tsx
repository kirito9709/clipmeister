import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    loading?: boolean;
    disabled?: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, loading, disabled, onClick }) => {
    return (
        <button 
            className={`button ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`} 
            onClick={disabled ? () => {} : onClick} 
            disabled={disabled || loading}
        >
            {loading ? 'Loading...' : text}
        </button>
    );
};

export default Button;