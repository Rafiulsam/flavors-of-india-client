import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.init';


export const AuthContext = createContext(null) // auth context

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider() //google auth provider

const AuthProvider = ({ children }) => {
    
    // Sign in with email
    const createUserWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign in with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const user = { displayName: 'Sameer' }
    const authInfo = {
        user,
        createUserWithGoogle,
        createUserWithEmail
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