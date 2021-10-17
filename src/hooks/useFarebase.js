import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    // login using google 
    const signUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(resutl => {

            })
            .catch(error => {

            })
    }

    // logout 
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(() => {

            })
    }

    // observe user 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, [])

    return {
        user,
        signUsingGoogle,
        logOut,
    }
}

export default useFirebase;