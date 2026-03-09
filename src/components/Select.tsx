import React from 'react';

interface Option {
    label: string;
    value: string | number;
}

interface SelectProps {
    options: Option[];
    onChange: (value: string | number) => void;
    value?: string | number;
}

const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;