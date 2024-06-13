import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Content, Footer } from '../../components';

import './styles.css';

export const Home: FC = () => {
    return (
        <div className='Home'>
            <Header />
            
            <Content>
                <Outlet />
            </Content>

            <Footer />
        </div> 
    );
}
