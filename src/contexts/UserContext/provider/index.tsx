import { FC, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { UserContext, TContextUser } from '../hooks';

import { addUserService, fetchUserByEmailService, fetchUserByEmailAndPasswordService } from '../../../services/user';

import { Auth } from '../../../pages';
import { router } from '../../../router';

export const UserContextProvider: FC = () => {
    const [user, setUser] = useState<TContextUser>(null);

    const signin = async (email: string, password: string) => {
        try {
            const found = await fetchUserByEmailAndPasswordService(email, password);

            if (!found) return alert('E-mail ou senha incorretos!');
            setUser(found);
        } catch (error) {
            alert('Erro inesperado ao realizar o login!');
        }
    }

    const signup = async (name: string, email: string, password: string) => {
        try {
            const found = await fetchUserByEmailService(email);
            if (found) return alert('Algum usuário já possui este e-mail cadastrado!');

            const created = await addUserService({ name, email, password });
            setUser(created);
        } catch (error) {
            alert('Erro inesperado ao realizar o login!');
        }
    }

    const signout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, signin, signup, signout }}>
            {!!user ? <RouterProvider router={router} /> : <Auth />}
        </UserContext.Provider>
    );
}