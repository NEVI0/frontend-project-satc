import { IProduct } from '../entities';
import { HTTP_URL } from '../constants/http';

const url = HTTP_URL + '/products';

export const fetchProductsService = async () => {
    const response = await fetch(url);
    return await response.json() as IProduct[];
}

export const fetchProductByIdService = async (productId: IProduct['id']) => {
    const response = await fetch(url + '/' + productId);
    return await response.json() as IProduct;
}

export const addProductService = async (product: Omit<IProduct, 'id'>) => {
    return await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'
        },
    });
}

export const updateProductService = async (product: IProduct) => {
    return await fetch(url + '/' + product.id, {
        method: 'PUT',
        body: JSON.stringify({
            name: product.name,
            price: product.price,
            stock: product.stock,
        }),
        headers: {
            'content-type': 'application/json'
        },
    });
}

export const deleteProductService = async (productId: IProduct['id']) => {
    return await fetch(url + '/' + productId, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    });
}