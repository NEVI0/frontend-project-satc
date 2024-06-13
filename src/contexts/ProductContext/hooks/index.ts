import { Context, createContext, useContext } from 'react';

import { IProduct } from '../../../entities';

export interface IProductContext {
	products: IProduct[];
	loadingProducts: boolean;

	fetchProducts(): void;
	addProduct(product: Omit<IProduct, 'id'>): void;
	updateProduct(product: IProduct): void;
	deleteProduct(productId: IProduct['id']): void;
}

export const ProductContext: Context<IProductContext> = createContext({} as IProductContext);
export const useProductContext = () => useContext(ProductContext);
