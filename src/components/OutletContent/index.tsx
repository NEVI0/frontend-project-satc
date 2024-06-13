import { FC, ReactNode } from 'react';
import './styles.css';

interface OutletContentProps {
    title: string;
    children: ReactNode;
}

export const OutletContent: FC<OutletContentProps> = ({ title, children }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>
);