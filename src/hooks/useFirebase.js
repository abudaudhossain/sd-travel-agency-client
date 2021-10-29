import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.initialize";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")

    const auth = getAuth();

    const googleSignIn = () => {
        const googlProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googlProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message);
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        });

    }
    return {
        user,
        error,
        googleSignIn,
        logOut
    }
}

export default useFirebase;