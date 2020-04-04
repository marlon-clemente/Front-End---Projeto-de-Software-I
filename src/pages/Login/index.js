import React from 'react';
import './styles.css';
//import { FiLogIn } from 'react-icons/fi';
//import img_h from '../../assets/heroes.png';

export default function Login(){
    return(
        <div>
            <div className="login-container">
                <section className="form">
                    <h1>Bem vindo</h1>
                    <h2>Faça login para continuar.</h2>
                    <form action="">
                        <input placeholder="Sua ID"/>
                        <input placeholder="Sua Senha"/>
                        <button className="button" type="submit">Entrar</button>
                    </form>
                    <a href="/register">
                        Esqueci minha senha.
                    </a>
                </section>
            </div>
        </div> 
    );
}