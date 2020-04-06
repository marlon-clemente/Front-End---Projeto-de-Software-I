import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Login(){
    return(
       < div className = 'logon-container'>        
           <section className="form">           
                <form>            
                    <h1>Bem Vindo</h1>                
                    <h3 style={{opacity:0.6}}><i>Faça login para continuar </i></h3>
                
                    <input placeholder = "usuario"/>
                    <input type="password" placeholder = "senha"/>

                    <button className="button" type="submit"> Entrar</button>

                    <a>Não esta conseguindo entrar?
                        <Link to ="/Registro" variant="body2">{"Clique aqui"}</Link>
                    </a>                
                </form>
            </section>            
       </div>
    );
}