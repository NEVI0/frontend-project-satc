import { FC, useEffect } from 'react';

import { useProductContext } from '../../contexts/ProductContext';

import { Table } from './components';

import './styles.css';

export const Products: FC = () => {
    const { fetchProducts } = useProductContext();

    useEffect(() => {
        (async () => {
            await fetchProducts();
        })();
    }, []);

    return (
        <div className='Products'>
            <h2>
                Produtos cadastrados
            </h2>

            <Table />
        </div>
    );
}