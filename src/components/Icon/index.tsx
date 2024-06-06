import { FC } from 'react';
import { ICONS } from '../../constants/icons';

export const Icon: FC<{
	name: keyof typeof ICONS;
	className?: string;
}> = ({ name, className }) => {
	const BuiltIcon = ICONS[name];
	return <BuiltIcon className={className} />;
}

