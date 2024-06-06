import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
    return (
        <div>Home

            <Link to="/auth">Auth Link</Link>
        </div>
    )
}
