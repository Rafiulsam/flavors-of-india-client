import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext(null) // auth context

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider() //google auth provider
const gitHubProvider = new GithubAuthProvider() //github auth provider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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

    // Sign up with github
    const createUserWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // sign out
    const logOut = () => {
        return signOut(auth)
    }

    // Password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // set an auth state change observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)

        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUserWithGoogle,
        createUserWithGitHub,
        createUserWithEmail,
        signInWithEmail,
        logOut,
        resetPassword
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