import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import HomeUser from '../pages/HomeUser';
import CaixaEntrada from '../pages/CaixaEntrada';
// import Salas from '../pages/Salas';
import Problemas from '../pages/Problemas';
import Ajuda from '../pages/Ajuda';
import Error from '../pages/Error';
import Grid from '../temp/Grades';
import NewDir from '../pages/NovoDiretor';

import PrivateRouteDir from './PrivateRouteDir';
import PrivateRouteUser from './PrivateRouteUser';

import SwitchRoute from './SwitchRoute';

/**
 * Usar PrivateRouteDir em rotas
 * que somente o diretor tem aceso
 * providerId == password
 * 
 * Usar PrivateRouteUser em rotas
 * que somente o usuario
 * tem aceso
 * 
 */

export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={SwitchRoute} exact />
                
                <PrivateRouteDir path="/dashboard" component={Dashboard} />
                <PrivateRouteDir path="/caixa_entrada" component={CaixaEntrada} />
                {/* <PrivateRouteDir path="/salas" component={Salas} /> */}
                <PrivateRouteDir path="/ajuda" component={Ajuda} />
                <PrivateRouteDir path="/problemas" component={Problemas} />
                
                <PrivateRouteUser path="/home" component={HomeUser} />
                
                <Route path="/login" component={Login} exact />
                <Route path="/grid" component={Grid} />
                <Route path="/new" component={NewDir} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}