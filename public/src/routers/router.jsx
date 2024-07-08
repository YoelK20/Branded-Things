import {  createBrowserRouter, redirect  } from "react-router-dom"
import BaseLayout from "../views/BaseLayout"
import Home from "../views/Home"
import ProductDetails from "../views/ProductDetails"


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />  
            },
            {
                path: "products/detail/:id",
                element: <ProductDetails />

            }
        ]
    }
])