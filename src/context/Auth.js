import React, {useEffect, useState, } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import app from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending){
        return <>
            <CircularProgress
             color="primary" />
        </>
    }
    
    return(
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};