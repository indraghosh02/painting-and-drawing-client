import { useContext } from "react";
import { AuthContext } from "../pages/FirebaseProvider/FirebaseProvider";


const UseAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default UseAuth;