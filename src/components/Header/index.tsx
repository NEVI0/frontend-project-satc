import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Header: FC = () => {
    return (
        <header>
            <h1>
                Meu Projeto!
            </h1>

            <nav>
                <Link to="/">Produtos</Link>
                <Link to="/product">Cadastro</Link>
            </nav>
        </header>
    );
}