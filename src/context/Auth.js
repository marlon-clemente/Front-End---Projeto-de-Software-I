import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import app from '../firebase';

export const AuthContext = React.createContext();

const useStyles = makeStyles({
    root: {
      marginLeft:'50%',
      marginTop:'50vh',
    }
});
  
export const AuthProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending){
        return <>
            <CircularProgress className={classes.root}
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