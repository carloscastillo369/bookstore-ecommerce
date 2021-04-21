import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../configs/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const resetError = () => {
        setError('');
    }

    const createUser = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
        .catch(error => {
            if(error.code === 'auth/email-already-in-use'){
                setError('La dirección de correo electrónico ya está registrada.')
            }
        })
    };

    const signIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
        .catch(error => {
            if(error.code === 'auth/user-not-found'){
                setError('No hay ningún registro de usuario que corresponda a esta dirección de correo electrónico.')
            }

            if(error.code === 'auth/wrong-password'){
                setError('La contraseña es incorrecta o la dirección de correo electrónico está mal escrita.')
            }
        })
    };

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .catch(error => {
            console.log(error.message)
        })
    };

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
        .catch(error => {
            if(error.code === 'auth/account-exists-with-different-credential'){
                setError('Ya existe una cuenta con la misma dirección de correo electrónico.')
            }
        })
    };

    const signOut = () => {
        auth.signOut()
    };

    useEffect(() => {
        const unSuscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unSuscribe;
    }, []);

    return (
        <AuthContext.Provider
        value = {{
            currentUser,
            error,
            createUser,
            signIn,
            signInWithFacebook,
            signInWithGoogle,
            signOut,
            resetError,
        }}>
            {!loading && children}
        </AuthContext.Provider>
    )
};