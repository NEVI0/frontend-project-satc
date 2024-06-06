import { FC, useState } from 'react';

import { Button, Input } from '../../../../components';

export const Signin: FC = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    return (
        <section className="container left">
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
                        value={email}
                        onChangeValue={setEmail}
                    />

                    <Input
                        name='password'
                        type='password'
                        label='Senha'
                        icon='lock'
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