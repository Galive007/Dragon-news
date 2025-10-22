import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import About from '../Pages/About';
import Career from '../Pages/Career';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '/',
                    Component: Home
                },
                {
                    path: '/category/:id',
                    loader:()=>fetch('/news.json'),
                    Component: CategoryNews
                },
                {
                    path: '/about',
                    Component: About
                },
                {
                    path: '/career',
                    Component: Career
                }
            ]
        },
        {
            path: '/auth',
            element: <h2>Authentication Layout</h2>
        },
        {
            path: '/news',
            element: <h2>News Layout</h2>
        },
        {
            path: '/*',
            element: <h2>Error 404</h2>
        }
    ]
)

export default Router;