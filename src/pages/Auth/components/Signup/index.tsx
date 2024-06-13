import { FC, useState } from 'react';

import { useUserContext } from '../../../../contexts/UserContext';

import { Button, Input } from '../../../../components';

export const Signup: FC = () => {
    const { signup } = useUserContext();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confPassword, setConfPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (password !== confPassword) return alert('As senhas não são iguais!');

        await signup(name, email, password);
    }

    return (
        <section className="container right" onSubmit={handleSubmit}>
            <h1 className="title">
                Criar minha conta
            </h1>

            <form className="form">
                <div className="content">
                    <Input
                        name='name'
                        type='text'
                        label='Seu nome'
                        icon='user'
                        placeholder='Meu nome e sobrenome'
                        required={true}
                        value={name}
                        onChangeValue={setName}
                    />

                    <Input
                        name='email'
                        type='email'
                        label='E-mail'
                        icon='mail'
                        placeholder='examplo@gmail.com'
                        required={true}
                        value={email}
                        onChangeValue={setEmail}
                    />

                    <Input
                        name='password'
                        type='password'
                        label='Senha'
                        icon='lock'
                        required={true}
                        value={password}
                        onChangeValue={setPassword}
                    />

                    <Input
                        name='confPassword'
                        type='password'
                        label='Confirme sua senha'
                        icon='lock'
                        required={true}
                        value={confPassword}
                        onChangeValue={setConfPassword}
                    />
                </div>

                <div className="footer">
                    <Button type='submit' text='Criar conta' icon='plus' />
                </div>
            </form>

        </section>
    );
}