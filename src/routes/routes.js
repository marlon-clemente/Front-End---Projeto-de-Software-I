import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import CaixaEntrada from '../pages/CaixaEntrada';
import Salas from '../pages/Salas';
import Problemas from '../pages/Problemas';
import Ajuda from '../pages/Ajuda';
import Login from '../pages/Login';
import Error from '../pages/Error';
/*
*   BrowserRouters deve fica por volta de todas as rotas utilizadas
*   Switch permite que somente uma rota seja utilizada por vez
*
*/

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/caixa_entrada" component={CaixaEntrada} />
                <Route path="/salas" component={Salas} />
                <Route path="/problemas" component={Problemas} />
                <Route path="/ajuda" component={Ajuda} />
                <Route path="/login_diretor" component={Login} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}