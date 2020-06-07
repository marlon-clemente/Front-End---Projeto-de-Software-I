import React, { useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import Styles from './styles';
import DataContext from '../../../context/Data';
import { useSections } from '../../../context/Sections';

const LoginUser = ({history}) =>{
    const classes = Styles();
    const { setCurrentSections } = useSections();
    const handleAlterBox = () =>{
        setCurrentSections('loginDir')
    }

    const { loggedUser, handleLogin } = useContext(DataContext);
    
    const handleLoginGoogle = ({ profileObj: { email, name, imageUrl }}) => {
        handleLogin({ name, email, picture: imageUrl }, (status, error) => {
            console.log(status)
            status === 200 && history.push('/')
        });
    }

    const handleFacebookLogin = ({ name, email, picture }) => {
        handleLogin({ name, email, picture: picture.data.url }, (status, error) => {
            status === 200 && history.push('/')
        });
    }
    
    if(Object.keys(loggedUser).length){
        return <Redirect to="/" />
    }

    return (<>
        <meta name="theme-color" content="#2A3261"/>
        <div className={classes.section_description}>
            <Typography component="div">
                <Box
                    fontFamily="Lato"
                    fontSize={20}
                    fontWeight={300}
                    textAlign="center"
                >
                BEM VINDO
                </Box>
                <Box
                    fontFamily="Comic Neue"
                    fontSize={25}
                    fontWeight={800}
                    textAlign="center"
                >
                Aluno & Professor
                </Box>
                <Box 
                    fontSize={20}
                    fontWeight={400}
                    fontFamily="Lato"
                    textAlign="center"
                >
                    Para contribuir com a direção de sua escola,
                    entre com uma das contas a seguir.
                </Box>
            </Typography>
        </div>
        
        <div className={classes.section_description_mob}>
            <Typography component="div">
                <Box 
                    fontFamily="Lato"
                    fontSize={37}
                    fontWeight={300}
                >
                    BEM VINDO
                </Box>
                <Box fontFamily="Roboto"
                    fontSize={25}
                    fontWeight={800}
                >
                    Aluno & Professor <br/>
                </Box>
                <Box 
                    fontSize={14}
                    fontWeight={400}
                    fontFamily="Arial"
                >
                    Para contribuir com a direção de sua escola,
                    <br/> entre com uma das contas a seguir.
                </Box>
            </Typography>
        </div>

        <div className={classes.paper_buttons}>
            <FacebookLogin
                appId="1124613164561850"
                fields="name, picture, email"
                callback={handleFacebookLogin}
                icon="fa fa-facebook"
                textButton={<span style={{ paddingLeft: 5 }}>Entrar com Facebook</span>}
                cssClass={classes.buttonFace}
            />

            <GoogleLogin
                clientId="673094250370-gka1grnp2eui1u86jh17pukfjk798r1m.apps.googleusercontent.com"
                buttonText="Entrar com Google"
                className={classes.buttonGoogle}
                onSuccess={handleLoginGoogle}
                onFailure={handleLoginGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <Typography component="div">
                <Box fontFamily="Roboto"
                    className={classes.buttonTroca}
                    onClick={handleAlterBox}
                    fontSize={18}
                    color="primary"
                    
                    fontWeight={300}
                    textAlign="center"
                >
                    <Link href="#" onClick={handleAlterBox} color="inherit">
                        Acesso da direção escolar
                    </Link>
                </Box>
            </Typography>
        </div>
    </>)
}

export default withRouter(LoginUser);