import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, isIsLoading] = useState(true);

    // login using google 
    const signUsingGoogle = () => {
        isIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(resutl => {

            })
            .catch(error => {

            })
            .finally(() => isIsLoading(false))
    }

    // logout 
    const logOut = () => {
        isIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(() => {

            })
            .finally(() => isIsLoading(false))
    }

    // observe user 
    useEffect(() => {
        isIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            isIsLoading(false);
        })
        return unsubscribe;
    }, [])

    return {
        user,
        signUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;