import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductContext } from '../../contexts/ProductContext';

import { ProductForm, OutletContent } from '../../components';

export const NewProduct: FC = () => {
    const { addProduct } = useProductContext();

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [stock, setStock] = useState<number>(0);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        await addProduct({ name, price, stock });
        navigate('/');
    }
    
    return (
        <OutletContent title='Cadastrar novo produto'>
            <ProductForm
                button={{
                    text: 'Cadastrar',
                    icon: 'plus'
                }}
                name={{
                    value: name,
                    setValue: setName
                }}
                price={{
                    value: price,
                    setValue: setPrice
                }}
                stock={{
                    value: stock,
                    setValue: setStock
                }}
                onSubmit={handleSubmit}
            />
        </OutletContent>
    );
}