import { IUser } from '../entities';
import { HTTP_URL } from '../constants/http';

const url = HTTP_URL + '/users';

export const fetchUserByEmailService = async (email: string) => {
    const response = await fetch(url);
    const users = await response.json() as IUser[];

    const user = users.find(user => user.email === email);

    if (!user) return null;
    delete user.password;

    return user;
}

export const fetchUserByEmailAndPasswordService = async (email: string, password: string) => {
    const response = await fetch(url);
    const users = await response.json() as IUser[];

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) return null;
    delete user.password;

    return user;
}

export const addUserService = async (user: Omit<IUser, 'id'>) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
    });

    const created = await response.json() as IUser;
    delete created.password;

    return created!;
}