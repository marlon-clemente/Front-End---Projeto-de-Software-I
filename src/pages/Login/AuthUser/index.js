import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IoLogoGoogle } from "react-icons/io";
import * as firebase from "firebase/app";

import Styles from './styles';
import { AuthContext } from '../../../context/Auth';
import { useSections } from '../../../context/Sections'; 

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

const LoginUser = ({history}) =>{
    const classes = Styles();
    const { setCurrentSections } = useSections();
    const handleAlterBox = () =>{
        setCurrentSections('loginDir')
    }
     const handleLoginGoogle = ()=>{
         firebase.auth()
             .signInWithRedirect(providerGoogle)
             .then(function(result) {
                //  logado
         }).catch(function(error) {
             alert(error)
         });    
     }

     const handleLoginFacebook=()=>{
        firebase.auth()
          .signInWithRedirect(providerFacebook)
          .then(function(result) {
          }).catch(function(error) {
            alert("FAcebook" + error)
         });
     }
    
    const { currentUser } = useContext(AuthContext);
    
    if(currentUser){
        return <Redirect to="/" />
    }

    return (<>
        <meta name="theme-color" content="#2A3261"/>
        <div className={classes.section_description}>
            <Typography component="div"><Box fontFamily="Lato"
                fontSize={20}
                fontWeight={300}
                textAlign="center">
                BEM VINDO
            </Box><Box fontFamily="Comic Neue"
                fontSize={25}
                fontWeight={800}
                textAlign="center">
                Aluno & Professor
            </Box><Box 
                fontSize={20}
                fontWeight={400}
                fontFamily="Lato"
                textAlign="center">
                Para contribuir com a direção de sua escola,
                entre com uma das contas a seguir.
            </Box></Typography>
        </div>
        
        <div className={classes.section_description_mob}>
            <Typography component="div"><Box fontFamily="Lato"
                fontSize={37}
                fontWeight={300}>
                BEM VINDO
            </Box><Box fontFamily="Roboto"
                fontSize={25}
                fontWeight={800}>
                Aluno & Professor <br/>
            </Box><Box 
                fontSize={14}
                fontWeight={400}
                fontFamily="Arial">
                Para contribuir com a direção de sua escola,
                <br/> entre com uma das contas a seguir.
            </Box></Typography>
        </div>

        <div className={classes.paper_buttons}>   
            <Button variant="contained"
                className={classes.buttonFace}
                startIcon={<FacebookIcon />}
                onClick={handleLoginFacebook}
                >
                Entrar com Facebook
            </Button>

            <Button variant="contained"
                className={classes.buttonGoogle}
                startIcon={<IoLogoGoogle />}
                onClick={handleLoginGoogle}>
                Entrar com Google
            </Button>
            <Typography component="div">
                <Box fontFamily="Roboto"
                className={classes.buttonTroca}
                onClick={handleAlterBox}
                fontSize={18}
                color="primary"
                
                fontWeight={300}
                textAlign="center">
                <Link href="#" onClick={handleAlterBox} color="inherit">
                    Acesso da direção escolar
                </Link>
            </Box></Typography>
        </div>
    </>)
}

export default withRouter(LoginUser);