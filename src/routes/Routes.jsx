import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllArtCraft from "../pages/AllArtCraft";
import MyCraftList from "../pages/MyCraftList";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AddCraft from "../pages/AddCraft";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allartcraft',
                element: <AllArtCraft></AllArtCraft>,
            },
            {
                path: '/addcraft',
                element: <AddCraft></AddCraft>,
            },
            {
                path: '/myartcraft',
                element: <MyCraftList></MyCraftList>,
            },
            {
                path: '/login',
                element:<LogIn></LogIn>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },

        ]


    }
])

export default router;