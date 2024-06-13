import { FC } from 'react';

import { Icon } from '..';
import { ICONS } from '../../constants/icons';

import './styles.css';

interface InputProps {
    name: string;
    label: string;
    value: string;
    error?: string;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    icon?: keyof typeof ICONS;
    min?: number;
    max?: number;
    required?: boolean;
    onChangeValue: (value: string) => void;
}

export const Input: FC<InputProps> = ({
    name,
    label,
    value,
    error,
    placeholder,
    type = 'text',
    icon,
    min,
    max,
    required = false,
    onChangeValue
}) => {
    return (
        <div className="input">
            {!!error && (
                <span className='input-error'>
                    {error}
                </span>
            )}

            <div className="input-box">
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    required={required}
                    onChange={event => onChangeValue(event.target.value)}
                    className="input-field"
                />

                {!!icon && <Icon name={icon} className='input-icon' />}
            </div>

            <label htmlFor={name} className="input-label">
                {label}
            </label>
        </div>
    );
}