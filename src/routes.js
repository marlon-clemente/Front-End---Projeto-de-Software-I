import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import CaixaEntrada from './pages/CaixaEntrada';
import Salas from './pages/Salas';
/*
*   BrowserRouters deve fica por volta de todas as rotas utilizadas
*   Switch permite que somente uma rota seja utilizada por vez
*
*/

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/index" component={Home} />
                <Route path="/caixa_entrada" component={CaixaEntrada} />
                <Route path="/salas" component={Salas} />
            </Switch>
        </BrowserRouter>
    );
}