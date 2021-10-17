import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);

    // login using google 
    const signUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
            
    }

    // logout 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(() => {

            })
            .finally(() => setIsLoading(false))
    }

    // observe user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
        return unsubscribe;
    }, [])

    return {
        user,
        signUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;