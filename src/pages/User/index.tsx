import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { OutletContent, Input, Button } from '../../components';
import { useUserContext } from '../../contexts/UserContext';

import './styles.css';

export const User: FC = () => {
    const { user, updateUser, deleteUser } = useUserContext();

    const [name, setName] = useState<string>(user?.name || '');
    const [email, setEmail] = useState<string>(user?.email || '');
    const [password, setPassword] = useState<string>('');
    const [confPassword, setConfPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (password !== confPassword) return alert('As senhas não são iguais!');
        setLoading(true);

        await updateUser(name, email, password);
        navigate('/');

        setLoading(false);
    }
    
    return (
        <OutletContent
            title='Minha conta'
            actions={[
                {
                    text: 'Deletar minha conta',
                    color: '#c71010',
                    onClick: deleteUser
                }
            ]}
        >
            <form
                className="form-container"
                onSubmit={event => {
                    event.preventDefault();
                    handleSubmit();
                }}
            >
                <Input
                    label='Seu nome'
                    name='name'
                    icon='user'
                    required={true}
                    value={name}
                    onChangeValue={setName}
                />

                <Input
                    label='E-mail'
                    name='email'
                    icon='mail'
                    type='email'
                    required={true}
                    value={email}
                    onChangeValue={setEmail}
                />

                <Input
                    name='password'
                    type='password'
                    label='Nova senha'
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

                <Button
                    text="Atualizar"
                    icon="edit"
                    type='submit'
                    loading={loading}
                />
            </form>
        </OutletContent>
    );
}