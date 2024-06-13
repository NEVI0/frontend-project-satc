import { createBrowserRouter } from 'react-router-dom';

import { Home, Auth, Products, NewProduct, UpdateProduct } from '../pages';
import { ProductContextProvider } from '../contexts/ProductContext';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProductContextProvider>
                <Home />
            </ProductContextProvider>
        ),
        children: [
            {
                path: '/',
                element: <Products />,
            },
            {
                path: '/product',
                element: <NewProduct />,
            },
            {
                path: '/product/:id',
                element: <UpdateProduct />
            }
        ],
    },
    {
        path: '/auth',
        element: <Auth />,
    }
]);