import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchProductByIdService } from '../../services/product';
import { useProductContext } from '../../contexts/ProductContext';

import { ProductForm, OutletContent } from '../../components';

export const UpdateProduct: FC = () => {
    const { id } = useParams();
    const { updateProduct } = useProductContext();

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [stock, setStock] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const redirect = () => {
        return navigate('/', { replace: true });
    }

    const handleSubmit = async () => {
        if (!id) return redirect();

        await updateProduct({ id, name, price, stock });
        navigate('/');
    }

    useEffect(() => {
        (async () => {
            if (!id) return redirect();

            try {
                setLoading(true);
                const product = await fetchProductByIdService(id);

                setName(product.name);
                setPrice(product.price);
                setStock(product.stock);
            } catch (error) {
                if (!id) return redirect();
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <p>Carregando produto...</p>
        );
    }

    return (
        <OutletContent title='Atualizar produto'>
            <ProductForm
                button={{
                    text: 'Atualizar',
                    icon: 'edit'
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