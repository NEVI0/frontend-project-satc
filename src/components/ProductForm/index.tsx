import { FC, useState } from 'react';

import { Input, Button } from '..';
import { ICONS } from '../../constants/icons';

import './styles.css';

interface InputProps {
    value: any;
    setValue: (value: any) => void;
}

interface ProductFormProps {
    button: {
        text: string;
        icon: keyof typeof ICONS;
    };

    name: InputProps;
    price: InputProps;
    stock: InputProps;

    onSubmit: () => void;
}

export const ProductForm: FC<ProductFormProps> = ({ button, name, price, stock, onSubmit }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <form
            className='ProductForm'
            onSubmit={async event => {
                event.preventDefault();
                setLoading(true);

                await onSubmit();
                setLoading(false);
            }}
        >
            <Input
                label='Nome do produto'
                name='name'
                icon='tag'
                value={name.value}
                onChangeValue={name.setValue}
            />

            <Input
                label='Preço'
                name='price'
                icon='currency'
                type='number'
                min={0}
                value={String(price.value)}
                onChangeValue={value => price.setValue(Number(value))}
            />

            <Input
                label='Estoque'
                name='stock'
                icon='cart'
                type='number'
                min={0}
                value={String(stock.value)}
                onChangeValue={value => stock.setValue(Number(value))}
            />

            <Button
                text={button.text}
                icon={button.icon}
                type='submit'
                loading={loading}
            />
        </form>
    );
}