import { Context, createContext, useContext } from 'react';

import { IUser } from '../../../entities';

export type TContextUser = Omit<IUser, 'password'> | null;

export interface IUserContext {
    user: TContextUser;

    signin(email: string, password: string): void;
    signup(name: string, email: string, password: string): void;
    signout(): void;

    updateUser(name: string, email: string, password: string): void;
    deleteUser(): void;
}

export const UserContext: Context<IUserContext> = createContext({} as IUserContext);
export const useUserContext = () => useContext(UserContext);
