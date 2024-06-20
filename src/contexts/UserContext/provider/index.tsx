import { FC, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { UserContext, TContextUser } from '../hooks';

import {
    addUserService,
    fetchUserByEmailService,
    fetchUserByEmailAndPasswordService,
    updateUserService,
    deleteUserService
} from '../../../services/user';

import { Auth } from '../../../pages';
import { router } from '../../../router';

export const UserContextProvider: FC = () => {
    const [user, setUser] = useState<TContextUser>(null);

    const checkEmail = async (email: string) => {
        if (user && user.email === email) return;

        const found = await fetchUserByEmailService(email);
        if (found) return alert('Algum usuário já possui este e-mail cadastrado!');
    }

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
            await checkEmail(email);            

            const created = await addUserService({ name, email, password });
            setUser(created);
        } catch (error) {
            alert('Erro inesperado ao realizar o login!');
        }
    }

    const signout = () => {
        setUser(null);
    }

    const updateUser = async (name: string, email: string, password: string) => {
        try {
            if (!user) return;
            await checkEmail(email);            

            await updateUserService({ id: user.id, name, email, password });
            setUser({ id: user.id, name, email });

            alert('Seus dados foram atualizados!')
        } catch (error) {
            alert('Erro inesperado ao atualizar seus dados!');
        }
    }

    const deleteUser = async () => {
        try {
            if (!user) return;
            await deleteUserService(user.id);

            setUser(null);

            alert('Sua conta foi deletada!')
        } catch (error) {
            alert('Erro inesperado ao deletar seus dados!');
        }
    }

    return (
        <UserContext.Provider value={{
            user,
            signin,
            signup,
            signout,
            updateUser,
            deleteUser
        }}>
            {!!user ? <RouterProvider router={router} /> : <Auth />}
        </UserContext.Provider>
    );
}