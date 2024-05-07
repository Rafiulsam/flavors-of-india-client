import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.init';


export const AuthContext = createContext(null) // auth context

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider() //google auth provider

const AuthProvider = ({ children }) => {

    // create user with email
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user with email
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign up with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const user = { displayName: 'Sameer' }
    const authInfo = {
        user,
        createUserWithGoogle,
        createUserWithEmail,
        signInWithEmail
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider; 