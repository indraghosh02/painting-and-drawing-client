import { Outlet } from "react-router-dom";

import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import FirebaseProvider from "../pages/FirebaseProvider/FirebaseProvider";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
           
        </div>
    );
};

export default Layout;
