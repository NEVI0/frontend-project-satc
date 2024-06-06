import { FC } from 'react';

import { Signin, Signup } from './components';

import './styles.css';

export const Auth: FC = () => {
    return (
        <main className="auth">
            <div className="auth-box">
                <Signin />
                <Signup />
            </div>
        </main>
    )
}
