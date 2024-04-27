import { GithubAuthProvider,GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

// import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
 
   


    //create user
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Call logout after user is created
            logout();
            return userCredential;
        })
        .catch((error) => {
            // Handle errors if any
            console.error("Error creating user:", error);
        });
    }

    //update user profile
    const updateUserProfile = (name, image) =>{
        return  updateProfile(auth.currentUser, {
              displayName: name, 
              photoURL: image,
              
            })
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
       // githublogin
       const githubLogin = ()=>{
        // setLoading(true)
       return signInWithPopup(auth, githubProvider);

    }

    // logout
    const logout = () => {
        setUser(null)
        signOut(auth);
    }
    
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                
            }
           
            setLoading(false);
             
          });
          return () => unsubscribe(); 
        

    }, [])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile,
        user,
        loading,
       
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