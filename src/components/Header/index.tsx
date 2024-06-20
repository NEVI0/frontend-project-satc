import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useUserContext } from '../../contexts/UserContext';

import './styles.css';

export const Header: FC = () => {
    const { user, signout } = useUserContext();

    const firstName = useMemo(() => {
        if (!user) return 'usuário';
        return user.name.split(' ')[0];
    }, [user]);

    return (
        <header>
            <h1>
                Bem-vindo(a) {firstName}!
            </h1>

            <nav>
                <Link to="/">Produtos</Link>
                <Link to="/user">Minha conta</Link>

                <button type='button' onClick={signout}>
                    Sair
                </button>
            </nav>
        </header>
    );
}