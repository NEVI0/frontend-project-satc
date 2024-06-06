import { FC, useState } from 'react';

import { Button, Input } from '../../../../components';

export const Signup: FC = () => {
    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confPassword, setConfPassword ] = useState<string>('');

    return (
        <section className="container right">
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
                        value={name}
                        onChangeValue={setName}
                    />

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

                    <Input
                        name='confPassword'
                        type='password'
                        label='Confirme sua senha'
                        icon='lock'
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