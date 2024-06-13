import { FC, ReactNode, useState } from 'react';

import { IProduct } from '../../../entities';

import { ProductContext } from '../hooks';
import { addProductService, deleteProductService, fetchProductsService, updateProductService } from '../../../services/product';

interface ProductContextProviderProps {
    children: ReactNode;
}

export const ProductContextProvider: FC<ProductContextProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

    const fetchProducts = async () => {
        try {
            setLoadingProducts(true);

            const data = await fetchProductsService();
            setProducts(data);
        } catch (error) {
            alert('Não foi possível pegar os produtos!');
        } finally {
            setLoadingProducts(false);
        }
    }

    const addProduct = async (product: Omit<IProduct, 'id'>) => {
        try {
            await addProductService(product);
        } catch (error) {
            alert('Não foi possível adicionar o produto!');
        }
    }

    const updateProduct = async (product: IProduct) => {
        try {
            await updateProductService(product);;
        } catch (error) {
            alert('Não doi possível atualizar os dados do produto!');
        }
    }

    const deleteProduct = async (productId: IProduct['id']) => {
        try {
            await deleteProductService(productId);

            setProducts(
                currentProducts => currentProducts.filter(product => product.id !== productId)
            );
        } catch (error) {
            alert('Não foi possível deletar o produto!');
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                loadingProducts,
                fetchProducts,
                addProduct,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}