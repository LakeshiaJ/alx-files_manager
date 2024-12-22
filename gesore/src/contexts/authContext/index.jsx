import React { useContext, useState, useEffect }from "react";
import { auth } from "../../components/firebase/firebase";

import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();

export function AuthProvider({gesore}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = userState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth, initializeUser);
        return Unsubscribe;
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading

    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && gesore}
        </AuthContext.Provider>
    )

}