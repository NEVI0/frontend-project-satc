import { FC, ReactNode } from 'react';
import './styles.css';

interface ContentProps {
    children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => (
    <main>
        {children}
    </main>
);