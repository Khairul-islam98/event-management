
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import ContactUs from '../pages/ContactUs/ContactUs';
import Service from '../components/Services/Service/Service';
import PrivateRoute from '../provider/PrivateRoute';
import TeamDetails from '../components/TeamMember/TeamMemberDetails/TeamDetails';
import Gallery from '../pages/Gallery/Gallery';

const Routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/event.json'),
            },
            {
                path: '/event/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: () => fetch('/event.json'),
            },
            {
                path: '/team/:id',
                element: <PrivateRoute><TeamDetails></TeamDetails></PrivateRoute>,
                loader: () => fetch('/team.json'),
            },
            {
                path: '/gallery',
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/contactus',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            }
        ]
    }
])

export default Routes;