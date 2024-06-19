import { IUser } from '../entities';
import { HTTP_URL } from '../constants/http';

const url = HTTP_URL + '/users';

export const fetchUserByEmailService = async (email: string) => {
    const response = await fetch(`${url}?email=${email}`);
    const users = await response.json() as IUser[];

    if (!users.length) return null;
    delete users[0].password;

    return users[0];
}

export const fetchUserByEmailAndPasswordService = async (email: string, password: string) => {
    const response = await fetch(`${url}?email=${email}&password=${password}`);
    const users = await response.json() as IUser[];

    if (!users.length) return null;
    delete users[0].password;

    return users[0];
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