import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import HomeUser from '../pages/HomeUser';
import CaixaEntrada from '../pages/CaixaEntrada';
import Salas from '../pages/Salas';
import Problemas from '../pages/Problemas';
import Ajuda from '../pages/Ajuda';
import Error from '../pages/Error';
import Grid from '../temp/Grades';
import NewDir from '../pages/NovoDiretor';
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
                <Route path="/grid" component={Grid} />
                <Route path="/home" component={HomeUser} />
                <Route path="/new" component={NewDir} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}