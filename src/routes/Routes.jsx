import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllArtCraft from "../pages/AllArtCraft";
import MyCraftList from "../pages/MyCraftList";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import AddCraft from "../pages/AddCraft";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import HomeCardDetails from "../pages/HomeCardDetails";
import TableItemDetails from "../pages/TableItemDetails";
import UpdateArt from "../pages/UpdateArt";
import MatchedCategory from "../pages/MatchedCategory";
import AboutUs from "../pages/AboutUs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://painting-and-drawing-server-psi.vercel.app/art')
            },
            {
                path: '/homecarddetails/:id',
                element: <PrivateRoute> <HomeCardDetails></HomeCardDetails> </PrivateRoute> ,
                loader: ({ params }) => fetch(`https://painting-and-drawing-server-psi.vercel.app/art/${params.id}`),
            
            },
            {
                path: '/allartcraft',
                element: <AllArtCraft></AllArtCraft>,
                loader: () => fetch('https://painting-and-drawing-server-psi.vercel.app/art')
            },
            {
                path: '/tableitemdetails/:id',
                element: <PrivateRoute> <TableItemDetails></TableItemDetails> </PrivateRoute> ,
                loader: ({ params }) => fetch(`https://painting-and-drawing-server-psi.vercel.app/art/${params.id}`),
            
            },
            {
                path: '/addcraft',
                element: <PrivateRoute> <AddCraft></AddCraft> </PrivateRoute>,
                loader: () => fetch('https://painting-and-drawing-server-psi.vercel.app/user')

            },

            {
                path: '/myartcraft',
                element: <PrivateRoute>  <MyCraftList></MyCraftList> </PrivateRoute>,
            },
            {
                path: '/updateart/:id',
                element: <PrivateRoute> <UpdateArt></UpdateArt> </PrivateRoute>,
                loader: ({params}) =>fetch(`https://painting-and-drawing-server-psi.vercel.app/art/${params.id}`)
            },
            {
                path: '/matchedcategory/:subcategory',
                element: <MatchedCategory></MatchedCategory>,
                loader: ({ params }) => fetch(`https://painting-and-drawing-server-psi.vercel.app/artbysubcategory/${params.subcategory}`),
               
            },
            {
                path: '/aboutus',
                element:<AboutUs></AboutUs>,
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