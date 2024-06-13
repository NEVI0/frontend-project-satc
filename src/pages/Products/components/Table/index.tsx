import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductContext } from '../../../../contexts/ProductContext';

import { currencyFormatter } from '../../../../helpers/currencyFormatter';
import { numberFormatter } from '../../../../helpers/numberFormatter';

import { IconButton } from '../../../../components';

import './styles.css';

export const Table: FC = () => {
    const { products, loadingProducts, deleteProduct } = useProductContext();

    const navigate = useNavigate();

    if (loadingProducts) {
        return (
            <p>Carregando produtos...</p>
        );
    }

    if (!products.length) {
        return (
            <p>Sem produtos!</p>
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                    <th>
                        Estoque (KG)
                    </th>
                    <th>
                        Ações
                    </th>
                </tr>
            </thead>
            
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>
                                {product.id}
                            </td>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {currencyFormatter(product.price)}
                            </td>
                            <td>
                                {numberFormatter(product.stock)}
                            </td>
                            <td>
                                <IconButton
                                    icon='trash'
                                    onClick={() => deleteProduct(product.id)}
                                />

                                <IconButton
                                    icon='edit'
                                    onClick={() => navigate('/product/' + product.id)}
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}