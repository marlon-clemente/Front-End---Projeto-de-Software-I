import { useState } from 'react';
import { auth, googleProvider } from "../firebase";

export function useAuth(){
    
    const [logado, setLogado] = useState(false)
    
    const signInDir = (email, senha) => {
        return auth
            .signInWithEmailAndPassword(email,senha)
            .then(function(user){
                setLogado(true);
                console.log("Logado ->" + logado + user);
                //window.location.href = "/dashboard"
            }).catch(function(error){
                var errorMessage = error.message;
                alert(errorMessage)
            })
    }

    const isAuthenticated = () => true;

    const singInGoogle = () => {
        auth.signInWithPopup(googleProvider).then(function(result) {
            window.location.href = "/home"
          })
    }
    
    return {
        signInDir,
        isAuthenticated,
        singInGoogle
    };
}