import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import PrivateRoutes from './private';
/*
*   BrowserRouters deve fica por volta de todas as rotas utilizadas
*   Switch permite que somente uma rota seja utilizada por vez
*/
export default function Routers(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route component={PrivateRoutes}/>
            </Switch>
        </BrowserRouter>
    );
}