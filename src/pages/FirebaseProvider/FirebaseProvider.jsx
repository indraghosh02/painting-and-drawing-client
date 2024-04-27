import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);
   


    //create user
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const signInUser = (email, password) =>{
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    };

    // google login
    const googleLogin = ()=>{
        // setLoading(true)
       return signInWithPopup(auth, googleProvider);

    }

    
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
            }
           
            // setLoading(false);
             
          });
          return () => unsubscribe(); 
        

    }, [])


    const allValues = {
        createUser,
        signInUser,
        googleLogin
    }
    
    return (
        <AuthContext.Provider value={allValues}>
           {
            children
           }
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;