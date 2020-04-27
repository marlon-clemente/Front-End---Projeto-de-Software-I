import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Home';
import HomeUser from '../pages/HomeUser';
import CaixaEntrada from '../pages/CaixaEntrada';
import Salas from '../pages/Salas';
import Problemas from '../pages/Problemas';
import Ajuda from '../pages/Ajuda';
import Error from '../pages/Error';
import Grid from '../temp/Grades';
import NewDir from '../pages/NovoDiretor';

import PrivateRoute from './PrivateRoute';

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" component={Dashboard} exact />
                <PrivateRoute path="/caixa_entrada" component={CaixaEntrada} />
                <PrivateRoute path="/salas" component={Salas} />
                <PrivateRoute path="/ajuda" component={Ajuda} />
                <PrivateRoute path="/problemas" component={Problemas} />
                <PrivateRoute path="/home" component={HomeUser} />
                
                <Route path="/login" component={Login} exact />
                <Route path="/grid" component={Grid} />
                <Route path="/new" component={NewDir} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}