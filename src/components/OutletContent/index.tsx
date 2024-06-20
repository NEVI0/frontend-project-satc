import { FC, ReactNode } from 'react';
import './styles.css';

interface IActions {
    text: string;
    color: string;
    onClick: () => void;
}

interface OutletContentProps {
    title: string;
    actions?: IActions[];
    children: ReactNode;
}

export const OutletContent: FC<OutletContentProps> = ({ title, actions = [], children }) => (
    <section>
        <div>
            <h2>{title}</h2>

            <div>
                {!!actions.length && actions.map(action => (
                    <button
                        key={action.text}
                        onClick={action.onClick}
                        style={{ color: action.color }}
                    >
                        {action.text}
                    </button>
                ))}
            </div>
        </div>

        {children}
    </section>
);