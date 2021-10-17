import { useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signUsingGoogle = () => {

    }

    return {
        user,
        signUsingGoogle,
    }
}

export default useFirebase;