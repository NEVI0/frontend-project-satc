import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductContext } from '../../contexts/ProductContext';

import { OutletContent } from '../../components';
import { Table } from './components';

export const Products: FC = () => {
    const { fetchProducts } = useProductContext();

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await fetchProducts();
        })();
    }, []);

    return (
        <OutletContent
            title='Produtos'
            actions={[
                {
                    text: 'Novo',
                    color: '#535bf2',
                    onClick: () => navigate('/product')
                }
            ]}
        >
            <Table />
        </OutletContent>
    );
}