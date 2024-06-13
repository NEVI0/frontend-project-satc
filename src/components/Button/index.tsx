import { FC } from 'react';

import { Icon } from '..';
import { ICONS } from '../../constants/icons';

import './styles.css';

interface ButtonProps {
    text: string;
    icon?: keyof typeof ICONS;
    type?: 'button' | 'submit';
    loading?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = ({ text, icon, type = 'button', loading, onClick }) => {
    return (
        <button
            className='button'
            type={type}
            disabled={loading}
            onClick={event => {
                if (onClick) onClick(event);
            }}
        >
            {
                loading ? 'Carregando...' : <>
                    {text}
                    {!!icon && <Icon name={icon} className='button-icon' />}
                </>
            }
        </button>
    );
}