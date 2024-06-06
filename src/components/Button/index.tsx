import { FC } from 'react';

import { Icon } from '..';
import { ICONS } from '../../constants/icons';

import './styles.css';

interface ButtonProps {
    text: string;
    icon?: keyof typeof ICONS;
    type?: 'button' | 'submit';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = ({ text, icon, type = 'button', onClick }) => {
    return (
        <button
            className='button'
            type={type}
            onClick={event => {
                if (onClick) onClick(event);
            }}
        >
            {text}
            {!!icon && <Icon name={icon} className='button-icon' />}
        </button>
    );
}