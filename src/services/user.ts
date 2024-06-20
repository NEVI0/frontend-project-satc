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
    const response = await fetch(`${url}?email=${email}`);
    
    const users = await response.json() as IUser[];
    if (!users.length) return null;

    const incorrectPassword = users[0].password !== password;
    if (incorrectPassword) return null;
    
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

export const updateUserService = async (user: IUser) => {
    return await fetch(url + '/' + user.id, {
        method: 'PUT',
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
        }),
        headers: {
            'content-type': 'application/json'
        },
    });
}

export const deleteUserService = async (userId: IUser['id']) => {
    return await fetch(url + '/' + userId, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    });
}