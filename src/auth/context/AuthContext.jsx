import { useEffect, useState, createContext, useContext } from "react";
import { auth, googleProvider } from "../../firebase";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)

    //handle user state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    //email/password login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    };

    //email/password registration
    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //google login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    //logout
    const logout = () => {
        return signOut(auth);
    };

    const value = {
        currentUser,
        login,
        register,
        loginWithGoogle,
        resetPassword,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}