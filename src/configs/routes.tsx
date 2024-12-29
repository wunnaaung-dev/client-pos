import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Dashboard, Products, ProductCategories, Purchase, Sale, Supplier, Customer, Stocks, Login, Error404, CustomerCreatePage, ProductCreate } from '../pages';
import { AuthLayout, DashboardLayout, RootLayout } from '../layouts';
import ProductEdit from '../pages/products/product-edit-form';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <DashboardLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="dashboard" replace/>
                    },
                    {
                        index: true,
                        path: 'dashboard',
                        element: <Dashboard />,
                    },
                    {
                        path: 'products',
                        element: <Products />,
                    },
                    {
                        path: 'products/create',
                        element: <ProductCreate />,
                    },
                    {
                        path: 'products/edit',
                        element: <ProductEdit />,
                    },
                    {
                        path: 'product-categories',
                        element: <ProductCategories />,
                    },
                    {
                        path: 'purchases',
                        element: <Purchase />,
                    },
                    {
                        path: 'sale',
                        element: <Sale />,
                    },
                    {
                        path: 'supplier',
                        element: <Supplier />,
                    },
                    {
                        path: 'customer',
                        element: <Customer />,
                    },
                    {
                        path: 'customer/create',
                        element: <CustomerCreatePage />,
                    },
                    {
                        path: 'stocks',
                        element: <Stocks />,
                    },
                ]
            },
            {
                path: 'auth',
                element: <AuthLayout />,
                children: [
                    {
                        index: true,
                        path: 'login',
                        element: <Login />,
                    }
                ]
            }
        ]
    },
    {
        path: '/*',
        element: <Error404 />
    }
])