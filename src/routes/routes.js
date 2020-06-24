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
import ChangeUser from '../pages/Support/ConfigUser'
import ChangeSchool from '../pages/Support/ConfigSchool'

import PrivateRouteDir from './PrivateRouteDir';
import PrivateRouteUser from './PrivateRouteUser';

import SwitchRoute from './SwitchRoute';


export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={SwitchRoute} exact />
                <Route path="/login" component={Login} />
                
                <PrivateRouteDir path="/dashboard" component={Dashboard} />
                <PrivateRouteDir path="/caixa_entrada" component={CaixaEntrada} />
                {/* <PrivateRouteDir path="/salas" component={Salas} /> */}
                <PrivateRouteDir path="/ajuda" component={Ajuda} />
                <PrivateRouteDir path="/problemas" component={Problemas} />
                <PrivateRouteDir path="/change_user" component={ChangeUser} />
                <PrivateRouteDir path="/change_school" component={ChangeSchool} />
                
                <PrivateRouteUser path="/home" component={HomeUser} />
                
                <Route path="/grid" component={Grid} />
                <Route path="/new" component={NewDir} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}