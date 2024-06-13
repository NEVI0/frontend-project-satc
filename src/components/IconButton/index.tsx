import { FC } from 'react';

import { Icon } from '..';

import { ICONS } from '../../constants/icons';

import './styles.css';

interface IconButtonProps {
    icon: keyof typeof ICONS;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
    return (
        <button className='IconButton' type='button' onClick={onClick}>
            <Icon name={icon} className='button-icon' />
        </button>
    );
}