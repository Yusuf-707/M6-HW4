import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "../Layout"
import { HomePage } from "../../Pages/HomePage"
import { ProductPage } from "../../Pages/ProductPage"
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />
            }
        ]
    }
])

import React from 'react'

export const AppRouter = () => {
  return <RouterProvider router={router}/>
}
