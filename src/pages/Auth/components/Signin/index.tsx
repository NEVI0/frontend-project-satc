import { FC, useState } from 'react';

import { useUserContext } from '../../../../contexts/UserContext';

import { Button, Input } from '../../../../components';

export const Signin: FC = () => {
    const { signin } = useUserContext();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        await signin(email, password);
    }

    return (
        <section className="container left" onSubmit={handleSubmit}>
            <h1 className="title">
                Entrar no sistema
            </h1>

            <form className="form">
                <div className="content">
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

                    <a href="#" className="forgot-password">
                        Esqueci minha senha
                    </a>
                </div>

                <div className="footer">
                    <Button type='submit' text='Entrar' icon='log-in' />
                </div>
            </form>

        </section>
    );
}